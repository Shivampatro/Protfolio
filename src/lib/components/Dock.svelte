<script>
  import { onMount, onDestroy } from 'svelte';

  // Config props
  export let magnification = 55;
  export let distance = 80;
  export let baseItemSize = 50;
  export let panelHeight = 60;
  export let springConfig = { mass: 0.1, stiffness: 200, damping: 15 };
  export let items = [];

  let dockEl;
  let itemEls = [];
  let itemSizes = [];
  let labelVisibility = [];
  let mouseX = Infinity;
  let mouseY = Infinity;
  let animId;

  // Spring physics for each item
  let springStates = [];

  function initSprings() {
    springStates = items.map(() => ({
      current: baseItemSize,
      velocity: 0
    }));
    itemSizes = items.map(() => baseItemSize);
    labelVisibility = items.map(() => false);
  }

  function getTargetSize(itemEl) {
    if (!itemEl || mouseX === Infinity) return baseItemSize;
    const rect = itemEl.getBoundingClientRect();
    const itemCenterX = rect.x + rect.width / 2;

    const dx = Math.abs(mouseX - itemCenterX);

    let parentEl = itemEl.parentElement;
    if (!parentEl) return baseItemSize;
    const parentRect = parentEl.getBoundingClientRect();
    const panelCenterY = parentRect.top + parentRect.height / 2;
    const dy = Math.abs(mouseY - panelCenterY);

    // X falloff with Cosine Wave for smooth Continuous transitions
    const ratioX = Math.min(1, dx / distance);
    const factorX = 0.5 * (1 + Math.cos(Math.PI * ratioX));

    // Y falloff
    const maxDy = 120; // safe zone above and below the dock
    const ratioY = Math.min(1, dy / maxDy);
    const factorY = 0.5 * (1 + Math.cos(Math.PI * ratioY));

    const smoothRatio = factorX * factorY;

    return baseItemSize + (magnification - baseItemSize) * smoothRatio;
  }

  function springStep(state, target, dt) {
    const { mass, stiffness, damping } = springConfig;
    const displacement = state.current - target;
    const springForce = -stiffness * displacement;
    const dampingForce = -damping * state.velocity;
    const acceleration = (springForce + dampingForce) / mass;
    state.velocity += acceleration * dt;
    state.current += state.velocity * dt;
    return state;
  }

  let lastTime = 0;
  function animate(time) {
    if (!lastTime) lastTime = time;
    const dt = Math.min((time - lastTime) / 1000, 0.064); // cap dt
    lastTime = time;

    let needsUpdate = false;
    for (let i = 0; i < items.length; i++) {
      const target = getTargetSize(itemEls[i]);
      springStates[i] = springStep(springStates[i], target, dt);
      const newSize = springStates[i].current;
      if (Math.abs(itemSizes[i] - newSize) > 0.01) {
        needsUpdate = true;
      }
      itemSizes[i] = newSize;
    }
    if (needsUpdate) {
      itemSizes = [...itemSizes]; // trigger reactivity
    }
    animId = requestAnimationFrame(animate);
  }

  function handleMouseMove(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }

  function handleMouseLeave() {
    mouseX = Infinity;
    mouseY = Infinity;
    labelVisibility = items.map(() => false);
  }

  function handleItemEnter(i) {
    labelVisibility[i] = true;
    labelVisibility = [...labelVisibility];
  }

  function handleItemLeave(i) {
    labelVisibility[i] = false;
    labelVisibility = [...labelVisibility];
  }

  onMount(() => {
    initSprings();
    animId = requestAnimationFrame(animate);
  });

  onDestroy(() => {
    if (animId) cancelAnimationFrame(animId);
  });
</script>

<div class="dock-outer" style="scroll-bar-width: none;">
  <div
    class="dock-panel"
    style="height: {panelHeight}px;"
    role="toolbar"
    aria-label="Application dock"
    tabindex="0"
    on:mousemove={handleMouseMove}
    on:mouseleave={handleMouseLeave}
    bind:this={dockEl}
  >
    {#each items as item, i}
      <div
        class="dock-item"
        style="width: {itemSizes[i] || baseItemSize}px; height: {itemSizes[i] || baseItemSize}px;"
        bind:this={itemEls[i]}
        on:mouseenter={() => handleItemEnter(i)}
        on:mouseleave={() => handleItemLeave(i)}
        role="button"
        tabindex="0"
      >
        {#if item.href}
          <a
            href={item.href}
            target={item.target || '_self'}
            aria-label={item.label}
            on:click={item.onClick || null}
            class="dock-icon"
          >
            <svelte:component this={item.icon} />
          </a>
        {:else}
          <button
            aria-label={item.label}
            on:click={item.onClick}
            class="dock-icon dock-button"
          >
            <svelte:component this={item.icon} />
          </button>
        {/if}

        {#if labelVisibility[i]}
          <div class="dock-label" class:dock-label-visible={labelVisibility[i]}>
            {item.label}
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .dock-outer {
    display: flex;
    max-width: 100%;
    align-items: flex-end;
    justify-content: center;
    margin-top: 2rem;
    position: relative;
  }

  .dock-panel {
    display: flex;
    align-items: flex-end;
    width: fit-content;
    gap: 0.75rem;
    border-radius: 1rem;
    background: rgba(6, 0, 16, 0.6);
    backdrop-filter: blur(12px) saturate(180%);
    -webkit-backdrop-filter: blur(12px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 0.4rem 0.5rem 0.5rem;
    position: relative;
    overflow: visible;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: 1rem;
      padding: 1px;
      background: linear-gradient(90deg, rgba($hl, 0.4), rgba($acc, 0.4));
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      pointer-events: none;
    }
  }

  .dock-item {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    background: rgba(6, 0, 16, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
                0 2px 4px -1px rgba(0, 0, 0, 0.06);
    cursor: pointer;
    outline: none;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    flex-shrink: 0;

    &:hover {
      border-color: rgba($hl, 0.5);
      box-shadow: 0 0 20px rgba($hl, 0.2), 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }
  }

  .dock-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: inherit;
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;

    :global(svg) {
      width: 60%;
      height: 60%;
      fill: $light;
      transition: fill 0.3s ease, filter 0.3s ease;
    }
  }

  .dock-item:hover .dock-icon :global(svg) {
    fill: $hl;
    filter: drop-shadow(0 0 8px rgba($hl, 0.6));
  }

  .dock-button {
    outline: none;
  }

  .dock-label {
    position: absolute;
    top: -2rem;
    left: 50%;
    transform: translateX(-50%);
    width: fit-content;
    white-space: pre;
    border-radius: 0.375rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(6, 0, 16, 0.9);
    backdrop-filter: blur(8px);
    padding: 0.15rem 0.5rem;
    font-size: 0.7rem;
    font-family: 'Source Code Pro', monospace;
    color: $light;
    pointer-events: none;
    animation: labelIn 0.2s ease forwards;
    z-index: 10;
  }

  @keyframes labelIn {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(4px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(-4px);
    }
  }

  @media (max-width: 480px) {
    .dock-panel {
      gap: 0.4rem;
      padding: 0.3rem 0.4rem 0.4rem;
    }
  }
</style>
