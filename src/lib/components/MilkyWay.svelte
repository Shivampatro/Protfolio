<script>
  import { onMount, onDestroy } from "svelte";

  let canvas;
  let ctx;
  let animationId;
  let particles = [];

  const PARTICLE_COUNT = 4000;
  const ARMS = 2; // Milky way is roughly a 2-arm / 4-arm spiral. We'll use 2 main arms and noise.
  const SPEED_FACTOR = 0.003; // Keeping the fast rotation speed that you liked!

  class Particle {
    constructor(canvasSize) {
      this.canvasSize = canvasSize;
      const maxRadius = canvasSize / 2;
      
      // Random arm assignment
      const arm = Math.floor(Math.random() * ARMS);
      const angleOffset = (Math.PI * 2 / ARMS) * arm;

      // Distance from center, skewed towards the center for a dense core
      const distanceSkew = Math.pow(Math.random(), 2);
      this.radius = distanceSkew * maxRadius;

      // Spiral angle based on distance. The further out, the more it wraps around.
      const spiralAngle = this.radius * 0.015;
      
      // Cloud noise (spread). Spread is proportional to distance but random
      const spread = (Math.random() - 0.5) * (Math.random() * this.radius * 1.5);
      
      this.angle = spiralAngle + angleOffset + (spread * 0.01);
      
      // Optional: Add some random particles to form a halo / dust ring
      if (Math.random() < 0.1) {
        this.radius = Math.random() * maxRadius;
        this.angle = Math.random() * Math.PI * 2;
      }

      // Slower near edges, faster near core
      this.speed = SPEED_FACTOR * (1 + (1 - distanceSkew) * 2); 

      // Colors based on distance
      const pct = this.radius / maxRadius;
      if (pct < 0.1) {
        // Core: Bright white / slight yellow
        this.color = `rgba(255, 250, 230, ${Math.random() * 0.8 + 0.2})`;
        this.size = Math.random() * 2 + 1;
      } else if (pct < 0.5) {
        // Inner arms: Cyan / vivid blue
        this.color = `rgba(79, 184, 230, ${Math.random() * 0.6 + 0.1})`;
        this.size = Math.random() * 1.5 + 0.5;
      } else {
        // Outer arms: Dim deep blue/purple
        this.color = `rgba(160, 179, 207, ${Math.random() * 0.4 + 0.1})`;
        this.size = Math.random() * 1.2 + 0.2;
      }
    }

    update() {
      this.angle -= this.speed; // Spin clockwise
    }

    draw(ctx, cx, cy) {
      const x = cx + Math.cos(this.angle) * this.radius;
      const y = cy + Math.sin(this.angle) * this.radius;
      
      ctx.beginPath();
      ctx.arc(x, y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }

  function resizeCanvas() {
    if (!canvas) return;
    const parent = canvas.parentElement;
    canvas.width = parent.clientWidth;
    canvas.height = parent.clientHeight;
    
    particles = [];
    const size = Math.min(canvas.width, canvas.height);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle(size));
    }
  }

  onMount(() => {
    ctx = canvas.getContext("2d");
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      // Draw subtle core glow
      const glowStr = canvas.width * 0.15;
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, glowStr);
      gradient.addColorStop(0, "rgba(255, 255, 255, 0.15)");
      gradient.addColorStop(0.5, "rgba(79, 184, 230, 0.05)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(cx, cy, glowStr, 0, Math.PI * 2);
      ctx.fill();

      // Additive blending for a fiery glowing effect
      ctx.globalCompositeOperation = "lighter";
      for (const p of particles) {
        p.update();
        p.draw(ctx, cx, cy);
      }
      ctx.globalCompositeOperation = "source-over";

      animationId = requestAnimationFrame(animate);
    }
    animate();
  });

  onDestroy(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", resizeCanvas);
    }
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
  });
</script>

<div class="milky-way-container">
  <canvas bind:this={canvas} class="milky-way-canvas"></canvas>
</div>

<style>
  .milky-way-container {
    position: absolute;
    top: 55%;
    left: 45%;
    transform: translate(-50%, -50%) rotateX(65deg) rotateZ(-15deg);
    width: 900px;
    height: 900px;
    z-index: 2;
    pointer-events: none;
    /* Extra subtle glow around the galaxy object */
    filter: drop-shadow(0 0 40px rgba(79, 184, 230, 0.15));
  }

  .milky-way-canvas {
    width: 100%;
    height: 100%;
    display: block;
    animation: slowDrift 20s ease-in-out infinite alternate;
  }

  /* Very slow drift to make it look alive globally */
  @keyframes slowDrift {
    0% { transform: scale(1) translateY(0px); }
    100% { transform: scale(1.02) translateY(-10px); }
  }

  @media only screen and (max-width: 1024px) {
    .milky-way-container {
      width: 700px;
      height: 700px;
      left: 50%;
      top: 50%;
    }
  }

  @media only screen and (max-width: 768px) {
    .milky-way-container {
      width: 500px;
      height: 500px;
      left: 50%;
      top: 40%;
      transform: translate(-50%, -50%) rotateX(55deg) rotateZ(-15deg);
    }
  }
</style>
