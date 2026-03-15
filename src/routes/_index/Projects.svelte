<script>
  import Pin from "./Pin.svelte";
  import load from "$lib/loader.js";
  import { onMount } from "svelte";
  import ProjectCard3D from "$lib/components/ProjectCard3D.svelte";

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
      <ProjectCard3D 
        title={title} 
        description={des[i]} 
        link={`https://github.com/Shivampatro/${title.toLowerCase().replaceAll(' ', '-')}`} 
      />
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

  @media screen and (max-width: 500px) {
    section {
      grid-template-columns: 1fr;
    }
  }
</style>
