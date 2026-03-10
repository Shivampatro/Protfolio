<script>
  import Pin from "./Pin.svelte";
  import load from "$lib/loader.js";
  import { onMount } from "svelte";

  let titles = [],
    des = [];
  onMount(async () => {
    const arr = await load("/projects.txt");
    titles = arr[0];
    des = arr[1];
  });
</script>

<main>
  <div class="header animate-fade-up">
    <h1>Some of my projects.</h1>
    <p>A collection of my recent work in web development and data analysis.</p>
  </div>
  
  <section class="animate-fade-up" style="animation-delay: 0.2s">
    {#each titles as title, i}
      <a
        href="https://github.com/Shivampatro/{title
          .toLowerCase()
          .replaceAll(' ', '-')}"
        target="_blank"
        rel="noopener noreferrer"
        class="project-card premium-card"
      >
        <div class="content">
          <h2>{title.replaceAll(/-|_/g, " ")}</h2>
          <p>{des[i]}</p>
          <span class="github-link">Source Code →</span>
        </div>
      </a>
    {/each}
  </section>
  <p class="para animate-fade-up" style="animation-delay: 0.4s">
    More on my
    <a href="https://github.com/Shivampatro/">Github</a>.
  </p>
</main>

<style lang="scss">
  main {
    @include section(fit-content, 100vw);
    @include flex(column);
    @include flex-center;
    @include mono;
    background-color: $pri;
    z-index: $page-index;
  }
  .para {
    @include para;
  }
  section {
    @include section(fit-content, 90vw);
    @include grid(1fr 1fr, 1fr);
    column-gap: 20px;
    row-gap: 20px;
    max-width: 700px;
  }
  .project-card {
    text-decoration: none;
    color: inherit;
    display: block;
    @include premium-card;
    padding: 1.5rem;
    cursor: pointer;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, transparent 45%, rgba($hl, 0.1) 50%, transparent 55%);
      transition: all 0.6s ease;
    }

    &:hover::before {
      width: 100%;
      height: 100%;
    }
  }
  .content {
    h2 {
      margin-top: 0;
      font-size: 1.25rem;
      color: $light;
    }
    p {
      color: $dim;
      font-size: 0.9rem;
      line-height: 1.4;
      margin-bottom: 20px;
    }
  }
  .github-link {
    display: block;
    font-size: 0.8rem;
    font-weight: bold;
    opacity: 0.6;
    transition:
      opacity 0.3s ease,
      color 0.3s ease;
  }

  @media screen and (max-width: 500px) {
    section {
      grid-template-columns: 1fr;
    }
  }
</style>
