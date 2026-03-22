<script>
  import { onMount, onDestroy } from 'svelte';

  // Define tech nodes with categories and positions
  const techs = [
    { id: 'c', name: 'C', x: 0.12, y: 0.25, color: '#00599C', category: 'lang' },
    { id: 'java', name: 'Java', x: 0.08, y: 0.5, color: '#ED8B00', category: 'lang' },
    { id: 'js', name: 'JavaScript', x: 0.22, y: 0.38, color: '#F7DF1E', category: 'lang' },
    { id: 'python', name: 'Python', x: 0.15, y: 0.7, color: '#3776AB', category: 'lang' },
    { id: 'html', name: 'HTML5', x: 0.32, y: 0.2, color: '#E34F26', category: 'web' },
    { id: 'css', name: 'CSS3', x: 0.38, y: 0.35, color: '#1572B6', category: 'web' },
    { id: 'tailwind', name: 'Tailwind', x: 0.45, y: 0.22, color: '#38B2AC', category: 'web' },
    { id: 'react', name: 'React', x: 0.35, y: 0.52, color: '#61DAFB', category: 'web' },
    { id: 'django', name: 'Django', x: 0.25, y: 0.58, color: '#092E20', category: 'backend' },
    { id: 'flask', name: 'Flask', x: 0.2, y: 0.82, color: '#ffffff', category: 'backend' },
    { id: 'spring', name: 'Spring', x: 0.12, y: 0.88, color: '#6DB33F', category: 'backend' },
    { id: 'numpy', name: 'NumPy', x: 0.55, y: 0.65, color: '#013243', category: 'data' },
    { id: 'pandas', name: 'Pandas', x: 0.62, y: 0.52, color: '#150458', category: 'data' },
    { id: 'matplotlib', name: 'Matplotlib', x: 0.58, y: 0.78, color: '#ffffff', category: 'data' },
    { id: 'nvidia', name: 'NVIDIA', x: 0.68, y: 0.7, color: '#76B900', category: 'data' },
    { id: 'aws', name: 'AWS', x: 0.78, y: 0.25, color: '#FF9900', category: 'cloud' },
    { id: 'oracle', name: 'Oracle', x: 0.85, y: 0.4, color: '#F80000', category: 'cloud' },
    { id: 'firebase', name: 'Firebase', x: 0.72, y: 0.38, color: '#039BE5', category: 'cloud' },
    { id: 'mysql', name: 'MySQL', x: 0.88, y: 0.55, color: '#4479A1', category: 'cloud' },
    { id: 'mongodb', name: 'MongoDB', x: 0.82, y: 0.7, color: '#4ea94b', category: 'cloud' },
    { id: 'dynamodb', name: 'DynamoDB', x: 0.75, y: 0.82, color: '#4053D6', category: 'cloud' },
    { id: 'git', name: 'Git', x: 0.5, y: 0.42, color: '#F05032', category: 'tools' },
    { id: 'github', name: 'GitHub', x: 0.48, y: 0.55, color: '#ffffff', category: 'tools' },
    { id: 'salesforce', name: 'Salesforce', x: 0.65, y: 0.35, color: '#00A1E0', category: 'tools' },
    { id: 'photoshop', name: 'Photoshop', x: 0.52, y: 0.88, color: '#31A8FF', category: 'tools' }
  ];

  const connections = [
    ['js', 'react'], ['js', 'html'], ['js', 'css'],
    ['html', 'css'], ['css', 'tailwind'],
    ['python', 'django'], ['python', 'flask'], ['python', 'numpy'],
    ['python', 'pandas'], ['numpy', 'pandas'], ['numpy', 'matplotlib'],
    ['pandas', 'matplotlib'], ['nvidia', 'numpy'],
    ['java', 'spring'], ['java', 'c'],
    ['aws', 'firebase'], ['aws', 'dynamodb'],
    ['oracle', 'mysql'], ['mysql', 'mongodb'],
    ['mongodb', 'dynamodb'],
    ['git', 'github'], ['salesforce', 'oracle'],
    ['react', 'css'], ['django', 'python'],
    ['flask', 'python']
  ];

  let canvas;
  let ctx;
  let width = 800;
  let height = 500;
  let mouseX = -1;
  let mouseY = -1;
  let hoveredNode = null;
  let animId;
  let time = 0;

  function getNodePixelPos(node) {
    return { x: node.x * width, y: node.y * height };
  }

  function draw() {
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);
    time += 0.01;

    // Draw connections
    for (const [fromId, toId] of connections) {
      const from = techs.find(t => t.id === fromId);
      const to = techs.find(t => t.id === toId);
      if (!from || !to) continue;
      const p1 = getNodePixelPos(from);
      const p2 = getNodePixelPos(to);

      const isHighlighted = hoveredNode && (hoveredNode.id === fromId || hoveredNode.id === toId);

      ctx.strokeStyle = isHighlighted
        ? 'rgba(0, 242, 255, 0.5)'
        : 'rgba(100, 150, 200, 0.08)';
      ctx.lineWidth = isHighlighted ? 1.5 : 0.5;
      
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
    }

    // Draw nodes
    for (const node of techs) {
      const pos = getNodePixelPos(node);
      const dx = mouseX - pos.x;
      const dy = mouseY - pos.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const isHovered = dist < 25;
      const isConnected = hoveredNode && connections.some(
        ([a, b]) => (a === hoveredNode.id && b === node.id) || (b === hoveredNode.id && a === node.id)
      );

      if (isHovered) hoveredNode = node;

      // Twinkle
      const twinkle = 0.6 + 0.4 * Math.sin(time * 2 + node.x * 10 + node.y * 7);
      const baseRadius = isHovered ? 6 : (isConnected ? 5 : 3.5);
      const radius = baseRadius * twinkle;

      // Ambient Glow for all nodes (Nebula effect)
      const ambientGlow = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, 18);
      ambientGlow.addColorStop(0, node.color + '18'); // subtle backdrop
      ambientGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = ambientGlow;
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, 18, 0, Math.PI * 2);
      ctx.fill();

      // Highlight/Hover Glow
      if (isHovered || isConnected) {

        const gradient = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, 25);
        gradient.addColorStop(0, node.color + '60');
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 25, 0, Math.PI * 2);
        ctx.fill();
      }

      // Star dot
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);
      const alphaHex = Math.floor(twinkle * 100).toString(16).padStart(2, '0');
      ctx.fillStyle = isHovered ? '#ffffff' : (isConnected ? node.color : node.color + alphaHex);

      ctx.fill();

      // Draw name on hover
      if (isHovered) {
        ctx.font = '600 13px "Source Code Pro", monospace';
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.fillText(node.name, pos.x, pos.y - 15);
      }
    }

    // Reset hovered if mouse is far from all nodes
    if (mouseX >= 0) {
      let found = false;
      for (const node of techs) {
        const pos = getNodePixelPos(node);
        const dist = Math.sqrt((mouseX - pos.x) ** 2 + (mouseY - pos.y) ** 2);
        if (dist < 25) { found = true; break; }
      }
      if (!found) hoveredNode = null;
    }

    animId = requestAnimationFrame(draw);
  }

  function handleMouseMove(e) {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  }

  function handleMouseLeave() {
    mouseX = -1;
    mouseY = -1;
    hoveredNode = null;
  }

  function handleResize() {
    if (!canvas) return;
    const container = canvas.parentElement;
    width = container.clientWidth;
    height = Math.min(500, width * 0.6);
    canvas.width = width;
    canvas.height = height;
  }

  onMount(() => {
    ctx = canvas.getContext('2d');
    handleResize();
    animId = requestAnimationFrame(draw);
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }
  });

  onDestroy(() => {
    if (animId) cancelAnimationFrame(animId);
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', handleResize);
    }
  });

</script>

<div class="constellation-container">
  <canvas
    bind:this={canvas}
    on:mousemove={handleMouseMove}
    on:mouseleave={handleMouseLeave}
  ></canvas>
  <div class="legend">
    <span class="legend-item"><span class="dot" style="background: #F7DF1E"></span>Languages</span>
    <span class="legend-item"><span class="dot" style="background: #61DAFB"></span>Frontend</span>
    <span class="legend-item"><span class="dot" style="background: #6DB33F"></span>Backend</span>
    <span class="legend-item"><span class="dot" style="background: #76B900"></span>Data/AI</span>
    <span class="legend-item"><span class="dot" style="background: #FF9900"></span>Cloud/DB</span>
    <span class="legend-item"><span class="dot" style="background: #F05032"></span>Tools</span>
  </div>
</div>

<style lang="scss">
  @import "../../app.scss";

  .constellation-container {
    width: 100%;
    max-width: 900px;
    margin: 2rem auto 0;
    position: relative;
  }

  canvas {
    width: 100%;
    display: block;
    cursor: crosshair;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.05);
  }

  .legend {
    display: flex;
    justify-content: center;
    gap: 1.2rem;
    flex-wrap: wrap;
    margin-top: 1rem;
  }

  .legend-item {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.7rem;
    color: $dim;
    font-family: 'Source Code Pro', monospace;
  }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    display: inline-block;
  }
</style>
