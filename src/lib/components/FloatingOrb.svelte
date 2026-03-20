<script>
  export let size = 120;
  export let top = '15%';
  export let left = '8%';
</script>

<div class="orb-container" style="--size: {size}px; top: {top}; left: {left};">
  <div class="orb">
    <div class="orb-surface"></div>
    <div class="orb-atmosphere"></div>
    <div class="orb-ring"></div>
  </div>
</div>

<style lang="scss">
  .orb-container {
    position: absolute;
    width: var(--size);
    height: var(--size);
    z-index: 0;
    pointer-events: none;
    animation: orbFloat 8s ease-in-out infinite;
  }

  .orb {
    width: 100%;
    height: 100%;
    position: relative;
    animation: orbSpin 20s linear infinite;
  }

  .orb-surface {
    position: absolute;
    inset: 15%;
    border-radius: 50%;
    background: radial-gradient(
      circle at 35% 35%,
      rgba(100, 200, 255, 0.6),
      rgba(30, 60, 120, 0.8) 50%,
      rgba(10, 10, 40, 0.9)
    );
    box-shadow:
      inset -10px -10px 30px rgba(0, 0, 0, 0.6),
      inset 5px 5px 15px rgba(100, 200, 255, 0.3);
  }

  .orb-atmosphere {
    position: absolute;
    inset: 10%;
    border-radius: 50%;
    background: radial-gradient(
      circle at 30% 30%,
      rgba(0, 242, 255, 0.15),
      transparent 60%
    );
    filter: blur(4px);
    animation: atmospherePulse 4s ease-in-out infinite;
  }

  .orb-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 130%;
    height: 30%;
    transform: translate(-50%, -50%) rotateX(75deg);
    border-radius: 50%;
    border: 2px solid rgba(0, 242, 255, 0.2);
    box-shadow:
      0 0 10px rgba(0, 242, 255, 0.15),
      inset 0 0 10px rgba(0, 242, 255, 0.1);
  }

  @keyframes orbFloat {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    25% { transform: translateY(-15px) rotate(1deg); }
    50% { transform: translateY(-8px) rotate(-1deg); }
    75% { transform: translateY(-20px) rotate(0.5deg); }
  }

  @keyframes orbSpin {
    from { transform: rotateY(0deg); }
    to { transform: rotateY(360deg); }
  }

  @keyframes atmospherePulse {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }
</style>
