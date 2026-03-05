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
  <h1>Some of my projects.</h1>
  <section>
    {#each titles as title, i}
      <a
        href="https://github.com/Shivampatro/{title
          .toLowerCase()
          .replaceAll(' ', '-')}"
        target="_blank"
        rel="noopener noreferrer"
        class="project-card"
      >
        <div class="content">
          <h2>{title.replaceAll(/-|_/g, " ")}</h2>
          <p>{des[i]}</p>
          <span class="github-link">View on GitHub →</span>
        </div>
      </a>
    {/each}
  </section>
  <p class="para">
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
    @include shadow;
    background-color: $sec;
    border-radius: 10px;
    padding: 15px;
    cursor: pointer;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease,
      border-color 0.3s ease;
    border: 1px solid transparent;

    &:hover {
      transform: translateY(-8px) scale(1.02);
      box-shadow: 0px 12px 24px 0px rgba(0, 0, 0, 0.4);
      border-color: $hl;

      .github-link {
        opacity: 1;
        color: $hl;
      }
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
