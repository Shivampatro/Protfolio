<script>
  export let items = [];
</script>

<div class="side-rail animate-fade-up">
  <div class="tech-panel"></div>
  <div class="tech-overlay-glow"></div>
  
  <div class="icons-container">
    {#each items as item}
      <a
        href={item.href}
        target={item.target || "_self"}
        class="icon-item"
        on:click={item.onClick}
        aria-label={item.label}
      >
        <div class="icon-wrapper">
          <svelte:component this={item.icon} />
        </div>
      </a>
    {/each}
  </div>
</div>


<style lang="scss">
  @import "../../app.scss";

  .side-rail {
    position: absolute;
    left: 2rem;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    z-index: 10;

    @media only screen and (max-width: 700px) {
      left: 1rem;
    }
  }

  .tech-panel {
    position: absolute;
    top: 5%;
    bottom: 5%;
    left: 0;
    width: calc(100% + 18px); // Expand to the right 
    background: rgba(12, 12, 18, 0.94); // Dark base
    border: 1px solid rgba(0, 242, 255, 0.35); // Cyan outline
    border-radius: 8px;
    z-index: -1;
    
    // Tech-Case/HUD polygon shape on the right edge
    clip-path: polygon(
      0% 0%, 
      85% 0%, 
      85% 30px, 
      100% 45px, 
      100% calc(100% - 45px), 
      85% calc(100% - 30px), 
      85% 100%, 
      0% 100%
    );

    // Subtle Cyan outer highlight on right border edge
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      box-shadow: inset -3px 0 10px rgba(0, 242, 255, 0.15);
      pointer-events: none;
    }
  }

  // Linear edge circuit lines overlay
  .tech-overlay-glow {
    position: absolute;
    top: 5%;
    bottom: 5%;
    left: 0;
    width: calc(100% + 18px);
    z-index: -2;
    background: rgba(0, 242, 255, 0.05);
    filter: blur(8px);
    clip-path: polygon(
      0% 0%, 85% 0%, 85% 30px, 100% 45px, 
      100% calc(100% - 45px), 85% calc(100% - 30px), 
      85% 100%, 0% 100%
    );
  }

  .rail-line {
    width: 2px;
    height: 350px;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba($hl, 0.4) 20%,
      rgba($hl, 0.4) 80%,
      transparent
    );
    border-radius: 1px;
    box-shadow: 0 0 10px rgba($hl, 0.2);
  }

  .icons-container {
    display: flex;
    flex-direction: column;
    gap: 0.6rem; // Pack closely
    padding: 0.8rem; // Smooth bounds padding
    background: transparent; // Rely on backing sheet
    border: none;
    box-shadow: none;
  }

  .icon-item {
    color: #ffffff; // White icons
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background: rgba(255, 255, 255, 0.04); // subtle button squares
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 8px;
    transition: all 0.25s ease-out;

    &:hover {
      color: #00f2ff;
      transform: scale(1.1) translateX(2px);
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(0, 242, 255, 0.3);
      box-shadow: 0 0 15px rgba(0, 242, 255, 0.2);
    }
  }

  .icon-wrapper {
    width: 25px; // Enlarged from 20px
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;

    :global(svg) {
      width: 100%;
      height: 100%;
      fill: currentColor;
    }
  }
</style>
