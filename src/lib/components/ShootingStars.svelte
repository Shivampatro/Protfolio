<script>
  import { onMount, onDestroy } from 'svelte';

  let stars = [];
  let nextId = 0;
  let interval;

  function spawnStar() {
    const id = nextId++;
    const startX = Math.random() * 60 + 10; // 10-70% from left
    const startY = Math.random() * 40; // 0-40% from top
    const angle = Math.random() * 30 + 15; // 15-45 degrees
    const duration = Math.random() * 800 + 600; // 600-1400ms
    const size = Math.random() * 2 + 1; // 1-3px

    stars = [...stars, { id, startX, startY, angle, duration, size }];

    // Remove after animation
    setTimeout(() => {
      stars = stars.filter(s => s.id !== id);
    }, duration + 200);
  }

  onMount(() => {
    // Spawn at random intervals (8-15 seconds)
    function scheduleNext() {
      const delay = Math.random() * 7000 + 8000;
      interval = setTimeout(() => {
        spawnStar();
        scheduleNext();
      }, delay);
    }
    // First star after 3 seconds
    interval = setTimeout(() => {
      spawnStar();
      scheduleNext();
    }, 3000);
  });

  onDestroy(() => {
    if (interval) clearTimeout(interval);
  });
</script>

<div class="shooting-stars-container">
  {#each stars as star (star.id)}
    <div
      class="shooting-star"
      style="
        left: {star.startX}%;
        top: {star.startY}%;
        --angle: {star.angle}deg;
        --duration: {star.duration}ms;
        --size: {star.size}px;
      "
    ></div>
  {/each}
</div>

<style>
  .shooting-stars-container {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 1;
    overflow: hidden;
  }

  .shooting-star {
    position: absolute;
    width: var(--size);
    height: var(--size);
    background: white;
    border-radius: 50%;
    box-shadow:
      0 0 6px 2px rgba(255, 255, 255, 0.6),
      0 0 12px 4px rgba(0, 242, 255, 0.3);
    animation: shoot var(--duration) linear forwards;
    opacity: 0;
  }

  .shooting-star::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 100%;
    width: 80px;
    height: 1px;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0.8),
      rgba(0, 242, 255, 0.4) 30%,
      transparent
    );
    transform: translateY(-50%) rotate(calc(var(--angle) * -1));
    transform-origin: right center;
  }

  @keyframes shoot {
    0% {
      opacity: 0;
      transform: translate(0, 0) rotate(var(--angle));
    }
    5% {
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translate(
        calc(cos(var(--angle)) * 500px),
        calc(sin(var(--angle)) * 500px)
      ) rotate(var(--angle));
    }
  }
</style>
