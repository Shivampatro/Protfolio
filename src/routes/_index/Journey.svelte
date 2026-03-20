<script>
  import totalContent from "$lib/journey.json";
  import Link from "../../lib/svgs/Link.svelte";
  import { onMount } from 'svelte';

  let index = 5;
  let content = totalContent.slice(0, index);
  let visibleCards = [];
  let sectionEl;

  function showMore() {
    index += 4;
    if (index > totalContent.length) index = totalContent.length;
    content = totalContent.slice(0, index);
  }

  const isEven = (x) => x % 2 == 0;

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.dataset.index);
            if (!visibleCards.includes(idx)) {
              visibleCards = [...visibleCards, idx];
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    // Observe existing and future cards
    const observeCards = () => {
      const cards = sectionEl?.querySelectorAll('.timeline-entry');
      cards?.forEach(card => observer.observe(card));
    };

    observeCards();
    // Re-observe when content changes
    const mutationObs = new MutationObserver(observeCards);
    if (sectionEl) mutationObs.observe(sectionEl, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObs.disconnect();
    };
  });
</script>

<main>
  <h1>Mission Log 🚀</h1>
  <p class="subtitle">A chronicle of my journey through the cosmos of tech</p>
  
  <section class="timeline" bind:this={sectionEl}>
    <div class="timeline-line"></div>
    
    {#each content as entry, i}
      <div
        class="timeline-entry {isEven(i) ? 'left' : 'right'}"
        class:visible={visibleCards.includes(i)}
        data-index={i}
      >
        <div class="timeline-node">
          <div class="node-pulse"></div>
          <div class="node-dot"></div>
        </div>
        
        <div class="timeline-connector"></div>
        
        <div class="timeline-card">
          <h2 class="entry-date">{entry.month}</h2>
          <div class="entry-content">
            {#each entry.notes as line}
              {#if typeof line == "string"}
                <p>{line}</p>
              {:else}
                <p>
                  {line.note}
                  {#if line.link}
                    <a target="_blank" href="{line.link}">
                      <Link />
                    </a>
                  {/if}
                </p>
              {/if}
            {/each}
          </div>
          {#if entry.link}
            <a class="entry-link" target="_blank" href="{entry.link}">View Details →</a>
          {/if}
        </div>
      </div>
    {/each}
  </section>

  {#if index == totalContent.length}
    <p class="end-message">🌟 The beginning of the journey...</p>
  {:else}
    <button class="show-more" on:mousedown={showMore}>
      <span>Load More Entries</span>
      <span class="arrow">↓</span>
    </button>
  {/if}
</main>

<style lang="scss">
  main {
    @include section(fit-content, 100vw);
    padding: 5rem 2rem 3rem;
    @include flex(column);
    @include flex-center;
    @include mono;
    text-align: center;
    background-color: $pri;
    pointer-events: auto;
    position: relative;
  }

  h1 {
    font-size: clamp(1.8rem, 5vw, 2.8rem);
    @include text-gradient;
    margin-bottom: 0.5rem;
  }

  .subtitle {
    color: $dim;
    font-size: 0.9rem;
    margin-bottom: 3rem;
  }

  .timeline {
    position: relative;
    max-width: 900px;
    width: 100%;
    padding: 2rem 0;
  }

  .timeline-line {
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    transform: translateX(-50%);
    background: linear-gradient(
      to bottom,
      transparent,
      rgba($hl, 0.6) 10%,
      rgba($acc, 0.4) 50%,
      rgba($hl, 0.6) 90%,
      transparent
    );
    box-shadow: 0 0 10px rgba($hl, 0.3), 0 0 20px rgba($hl, 0.1);

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        to bottom,
        rgba($hl, 0.8),
        rgba($acc, 0.5),
        rgba($hl, 0.8)
      );
      animation: lineGlow 3s ease-in-out infinite;
      opacity: 0.5;
    }
  }

  @keyframes lineGlow {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.8; }
  }

  .timeline-entry {
    position: relative;
    width: 50%;
    padding: 1rem 0;
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);

    &.left {
      padding-right: 3rem;
      text-align: right;
      align-self: flex-start;

      .timeline-connector {
        right: 0;
        left: auto;
      }
      .timeline-node {
        right: -8px;
        left: auto;
      }
    }

    &.right {
      margin-left: 50%;
      padding-left: 3rem;
      text-align: left;

      .timeline-connector {
        left: 0;
      }
      .timeline-node {
        left: -8px;
      }
    }

    &.left {
      transform: translateX(-40px);
    }
    &.right {
      transform: translateX(40px);
    }

    &.visible {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .timeline-node {
    position: absolute;
    top: 2rem;
    width: 16px;
    height: 16px;
    z-index: 3;
  }

  .node-dot {
    position: absolute;
    inset: 3px;
    border-radius: 50%;
    background: $hl;
    box-shadow: 0 0 10px rgba($hl, 0.8);
  }

  .node-pulse {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 2px solid rgba($hl, 0.5);
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(2); opacity: 0; }
  }

  .timeline-connector {
    position: absolute;
    top: 2.4rem;
    width: 2rem;
    height: 1px;
    background: linear-gradient(to right, rgba($hl, 0.4), rgba($hl, 0.1));
  }

  .timeline-card {
    padding: 1.2rem 1.5rem;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(8px);
    transition: all 0.3s ease;

    &:hover {
      border-color: rgba($hl, 0.3);
      box-shadow: 0 0 25px rgba($hl, 0.1);
      transform: translateY(-2px);
    }
  }

  .entry-date {
    font-size: 1rem;
    font-weight: 700;
    color: $hl;
    margin-bottom: 0.5rem;
  }

  .entry-content {
    p {
      color: $dim;
      font-size: 0.85rem;
      line-height: 1.6;
      margin: 0.3rem 0;
    }
    :global(svg) {
      width: 14px;
      height: 14px;
      fill: $hl;
      vertical-align: middle;
      margin-left: 4px;
    }
  }

  .entry-link {
    display: inline-block;
    margin-top: 0.5rem;
    font-size: 0.75rem;
    color: $acc;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      letter-spacing: 0.5px;
      text-shadow: 0 0 6px rgba($acc, 0.5);
    }
  }

  .show-more {
    margin-top: 2rem;
    padding: 0.6rem 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: 1px solid rgba($hl, 0.3);
    border-radius: 25px;
    background: rgba($hl, 0.05);
    color: $hl;
    font-family: 'Source Code Pro', monospace;
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: rgba($hl, 0.1);
      box-shadow: 0 0 20px rgba($hl, 0.2);
      transform: translateY(-2px);
    }

    .arrow {
      animation: bounce 1.5s infinite;
    }
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(4px); }
  }

  .end-message {
    margin-top: 2rem;
    color: $dim;
    font-size: 0.9rem;
    font-style: italic;
  }

  @media only screen and (max-width: 700px) {
    .timeline-line {
      left: 20px;
    }

    .timeline-entry {
      width: 100%;
      padding-left: 3.5rem !important;
      padding-right: 0 !important;
      text-align: left !important;

      &.left, &.right {
        margin-left: 0;
        transform: translateX(30px);

        .timeline-node {
          left: 12px;
          right: auto;
        }
        .timeline-connector {
          left: 28px;
          right: auto;
        }
      }

      &.visible {
        transform: translateX(0);
      }
    }
  }
</style>
