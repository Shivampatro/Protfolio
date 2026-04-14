<script>
  import { onMount } from 'svelte';
  import createCobe from 'cobe';

  let canvas;
  let phi = 0;
  let pointerInteracting = null;
  let pointerInteractionMovement = 0;

  onMount(() => {
    let globe = createCobe(canvas, {
      devicePixelRatio: 2,
      width: 800,
      height: 800,
      phi: 0,
      theta: 0.1,
      dark: 1,
      diffuse: 1.2,
      scale: 1,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.1, 0.1, 0.2], // space theme matching color
      markerColor: [0.31, 0.72, 0.90], // matches the cyan text color
      glowColor: [0.15, 0.15, 0.25], // subtle glow
      markers: [
        // Marker for India (Shivam Patro)
        { location: [20.5937, 78.9629], size: 0.08 }
      ],
      onRender: (state) => {
        if (!pointerInteracting) {
          phi += 0.003;
        }
        state.phi = phi + pointerInteractionMovement;
        // Optional: add a slight bounce/float effect using Math.sin
        // state.width = 800 + Math.sin(Date.now() / 1000) * 10;
        // state.height = 800 + Math.sin(Date.now() / 1000) * 10;
      }
    });

    return () => {
      if (globe) globe.destroy();
    };
  });
</script>

<div class="globe-wrapper">
  <canvas
    bind:this={canvas}
    class="globe-canvas"
    on:pointerdown={(e) => {
      pointerInteracting = e.clientX - pointerInteractionMovement;
      canvas.style.cursor = 'grabbing';
    }}
    on:pointerup={() => {
      pointerInteracting = null;
      canvas.style.cursor = 'grab';
    }}
    on:pointerout={() => {
      pointerInteracting = null;
      canvas.style.cursor = 'grab';
    }}
    on:pointermove={(e) => {
      if (pointerInteracting !== null) {
        const delta = e.clientX - pointerInteracting;
        pointerInteractionMovement = delta * 0.01;
      }
    }}
  ></canvas>
</div>

<style>
  .globe-wrapper {
    position: absolute;
    top: 45%;
    left: 45%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 600px;
    z-index: 2; /* Ensure it stays behind the text but above galaxy */
    pointer-events: auto;
    filter: drop-shadow(0 0 30px rgba(79, 184, 230, 0.15));
    animation: float 6s ease-in-out infinite;
  }

  .globe-canvas {
    width: 100%;
    height: 100%;
    contain: layout paint size;
    cursor: grab;
  }

  @keyframes float {
    0% { transform: translate(-50%, -50%); }
    50% { transform: translate(-50%, -52%); }
    100% { transform: translate(-50%, -50%); }
  }

  /* Responsive Adjustments */
  @media only screen and (max-width: 1024px) {
    .globe-wrapper {
      width: 500px;
      height: 500px;
      left: 50%;
    }
  }

  @media only screen and (max-width: 768px) {
    .globe-wrapper {
      width: 350px;
      height: 350px;
      top: 35%;
      left: 50%;
    }
  }
</style>
