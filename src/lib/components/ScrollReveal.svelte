<script>
  import { onMount, onDestroy } from 'svelte';

  export let animation = 'fade-up';
  export let delay = 0;
  export let threshold = 0.15;
  export let duration = 800;

  let el;
  let visible = false;
  let observer;

  onMount(() => {
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visible = true;
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
  });

  onDestroy(() => {
    if (observer && el) observer.unobserve(el);
  });
</script>

<div
  bind:this={el}
  class="scroll-reveal {animation}"
  class:visible
  style="transition-delay: {delay}ms; transition-duration: {duration}ms;"
>
  <slot />
</div>

<style>
  .scroll-reveal {
    transition-property: opacity, transform;
    transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    will-change: opacity, transform;
  }

  /* fade-up */
  .fade-up {
    opacity: 0;
    transform: translateY(60px);
  }
  .fade-up.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* fade-left */
  .fade-left {
    opacity: 0;
    transform: translateX(-60px);
  }
  .fade-left.visible {
    opacity: 1;
    transform: translateX(0);
  }

  /* fade-right */
  .fade-right {
    opacity: 0;
    transform: translateX(60px);
  }
  .fade-right.visible {
    opacity: 1;
    transform: translateX(0);
  }

  /* scale-in */
  .scale-in {
    opacity: 0;
    transform: scale(0.85);
  }
  .scale-in.visible {
    opacity: 1;
    transform: scale(1);
  }
</style>
