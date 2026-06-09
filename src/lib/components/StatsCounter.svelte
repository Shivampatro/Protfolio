<script>
  import { onMount } from "svelte";

  const stats = [
    { value: 6, suffix: "+", label: "Projects Built" },
    { value: 15, suffix: "+", label: "Certifications" },
    { value: 3, suffix: "+", label: "Years Coding" },
    { value: 30000, suffix: "+", label: "Salesforce Points" },
  ];

  let displayValues = stats.map(() => 0);
  let started = false;
  let sectionEl;

  function animateCount(index, target, duration = 2000) {
    const startTime = performance.now();
    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      displayValues[index] = Math.round(eased * target);
      displayValues = [...displayValues];
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          stats.forEach((stat, i) => {
            setTimeout(() => animateCount(i, stat.value), i * 200);
          });
          observer.unobserve(sectionEl);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(sectionEl);
  });
</script>

<section bind:this={sectionEl} class="stats-section">
  <div class="stats-grid">
    {#each stats as stat, i}
      <div class="stat-card">
        <span class="stat-number">
          {displayValues[i].toLocaleString()}{stat.suffix}
        </span>
        <span class="stat-label">{stat.label}</span>
      </div>
    {/each}
  </div>
</section>

<style lang="scss">
  .stats-section {
    width: 100%;
    padding: 4rem 2rem;
    display: flex;
    justify-content: center;
    background-color: $pri;
    @include mono;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    max-width: 900px;
    width: 100%;
  }

  .stat-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 2rem 1rem;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.06);
    transition: all 0.4s ease;

    &:hover {
      border-color: rgba($hl, 0.3);
      box-shadow: 0 0 30px rgba($hl, 0.1);
      transform: translateY(-4px);
    }
  }

  .stat-number {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 800;
    background: linear-gradient(135deg, $hl, $acc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
  }

  .stat-label {
    font-size: 0.85rem;
    color: $dim;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  @media (max-width: 700px) {
    .stats-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
    .stat-card {
      padding: 1.5rem 0.75rem;
    }
  }
</style>
