<script>
  import gallery from "$lib/gallery.json";

  // Deterministic "random" coordinates for the constellation
  const nodes = gallery.map((item, i) => {
    const isEven = i % 2 === 0;
    // Base X centers (e.g., 20% for left, 80% for right)
    const baseX = isEven ? 25 : 75;
    // Slight deterministic scatter for an organic look
    const scatter = (i * 37 % 10) - 5;
    const x = baseX + scatter;
    
    // Y progresses safely downwards. 
    // Top padding 150px, each node 350px apart vertically.
    const yTop = i * 400 + 150;

    return { ...item, x, yTop };
  });

  const totalHeight = nodes.length > 0 ? nodes[nodes.length - 1].yTop + 300 : 500;
</script>

<div class="constellation-gallery" style="height: {totalHeight}px;">
  <!-- SVG connecting lines -->
  <svg class="lines-layer" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="rgba(100, 200, 255, 0.5)" />
        <stop offset="100%" stop-color="rgba(255, 100, 255, 0.5)" />
      </linearGradient>
    </defs>
    {#each nodes as node, i}
      {#if i < nodes.length - 1}
        <line
          x1="{node.x}%"
          y1="{node.yTop}px"
          x2="{nodes[i + 1].x}%"
          y2="{nodes[i + 1].yTop}px"
          class="constellation-line"
        />
      {/if}
    {/each}
  </svg>

  <!-- Interactive Nodes -->
  {#each nodes as node, i}
    <div 
      class="node-container {i % 2 === 0 ? 'left-align' : 'right-align'}" 
      style="top: {node.yTop}px; left: {node.x}%;"
    >
      <div class="star-core" style="animation-delay: {i * -0.7}s"></div>
      
      <div class="hologram-card">
        <div class="card-glare"></div>
        <div class="card-inner">
          <div class="image-wrapper">
            <img src={node.image} alt={node.title} loading="lazy" />
          </div>
          <div class="info">
            <span class="date">{node.date}</span>
            <h3 class="title">{node.title}</h3>
            <p class="description">{node.description}</p>
            <div class="tech-stack">
              {#each node.tech as tech}
                <span class="badge">{tech}</span>
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>

<style lang="scss">
  .constellation-gallery {
    position: relative;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }

  .lines-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;

    .constellation-line {
      stroke: url(#lineGrad);
      stroke-width: 2px;
      stroke-dasharray: 6 8;
      animation: dash 30s linear infinite;
    }
  }

  @keyframes dash {
    to {
      stroke-dashoffset: -1000;
    }
  }

  .node-container {
    position: absolute;
    transform: translate(-50%, -50%);
    z-index: 10;
    perspective: 1000px;

    /* Push the card to the inner side of the screen */
    &.left-align .hologram-card {
      left: 30px;
      transform-origin: left center;
    }
    
    &.right-align .hologram-card {
      right: 30px;
      transform-origin: right center;
    }

    &:hover {
      z-index: 20;
      
      .star-core {
        transform: scale(2) !important;
        animation: none !important;
        box-shadow: 0 0 30px 10px rgba(180, 100, 255, 0.9), 
                    0 0 60px 20px rgba(100, 200, 255, 0.6);
        background: #fff;
      }

      .hologram-card {
        opacity: 1;
        transform: scale(1) rotateX(0deg) rotateY(0deg);
        pointer-events: auto;
      }
    }
  }

  .star-core {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 15px 5px rgba(180, 100, 255, 0.8), 
                0 0 30px 10px rgba(100, 200, 255, 0.5);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    cursor: crosshair;
    position: relative;
    z-index: 2;
    animation: twinkle-node 2s ease-in-out infinite alternate;

    /* Flare beams */
    &::before, &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
      background: radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, rgba(180,100,255,0.8) 20%, rgba(100,200,255,0) 70%);
      border-radius: 100%;
    }

    /* Horizontal Flare */
    &::before {
      width: 70px;
      height: 2px;
    }

    /* Vertical Flare */
    &::after {
      width: 2px;
      height: 70px;
    }
  }

  @keyframes twinkle-node {
    0% {
      opacity: 0.5;
      transform: scale(0.6);
    }
    100% {
      opacity: 1;
      transform: scale(1.1);
    }
  }

  .hologram-card {
    position: absolute;
    top: -150px;
    width: 320px;
    opacity: 0;
    pointer-events: none;
    transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
    transform: scale(0.9) rotateY(10deg);
    
    @include glass;
    background: rgba(15, 20, 30, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.05);

    .card-glare {
      position: absolute;
      top: 0;
      left: -100%;
      width: 50%;
      height: 100%;
      background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%);
      transform: skewX(-20deg);
      animation: glare 4s infinite;
      z-index: 10;
      pointer-events: none;
    }

    .image-wrapper {
      width: 100%;
      height: 180px;
      overflow: hidden;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.8s ease;
      }
    }

    &:hover .image-wrapper img {
      transform: scale(1.05);
    }

    .info {
      padding: 20px;
      color: #fff;

      .date {
        font-family: monospace;
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.5);
        display: block;
        margin-bottom: 8px;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      .title {
        font-size: 1.25rem;
        font-weight: 600;
        margin: 0 0 10px 0;
        background: linear-gradient(90deg, #fff, #a5b4fc);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .description {
        font-size: 0.9rem;
        line-height: +1.5;
        color: rgba(255, 255, 255, 0.7);
        margin-bottom: 16px;
      }

      .tech-stack {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;

        .badge {
          font-size: 0.75rem;
          padding: 4px 10px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(4px);
        }
      }
    }
  }

  @keyframes glare {
    0% { left: -100%; }
    20% { left: 200%; }
    100% { left: 200%; }
  }

  /* Responsive fixes */
  @media (max-width: 768px) {
    .node-container {
      /* Force everything more central on mobile */
      left: 50% !important;

      &.left-align .hologram-card, &.right-align .hologram-card {
        left: 50%;
        top: 25px;
        transform: translate(-50%, 0) scale(0.9) rotateY(0deg);
        transform-origin: top center;
      }

      &:hover .hologram-card {
        transform: translate(-50%, 0) scale(1) rotateY(0deg);
      }
    }

    .lines-layer line {
      x1: 50% !important;
      x2: 50% !important;
    }
  }
</style>
