<script>
  import GalaxyCursor from "$lib/components/GalaxyCursor.svelte";
  import HyperjumpLoader from "$lib/components/HyperjumpLoader.svelte";
  import { onMount } from "svelte";
  
  let scrollFactor = 0;
  let scrollY = 0;
  
  onMount(() => {
    document.onscroll = () => {
      scrollY = window.scrollY;
      document.body.style.setProperty('--scroll-y', `${scrollY}px`);
      scrollFactor =
        scrollY /
        (document.documentElement.scrollHeight - window.screen.height);
    };
  });
</script>

<HyperjumpLoader duration={2500} />

<main>
  <img id="pointer" src="/pointer.svg" alt="pointer" />
  <section>
    <a href="/"> Home </a>
    <a href="/gallery"> Gallery </a>
    <a href="/blog"> Blogs </a>
  </section>
</main>
<GalaxyCursor />
<div style="width:{scrollFactor * 100}vw;"></div>

<slot></slot>

<style lang="scss">
  main {
    @include flex(row);
    @include fixed(0, 0);
    @include glass;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 5vh;
    color: $light;
    z-index: 100;
    padding-left: 5vw;
    padding-right: 5vw;
  }
  a {
    @include mono;
    color: $light;
    padding-left: 30px;
  }
  div {
    @include fixed(0, 0);
    @include section(3px, 0);
    background-color: $hl;
    transition: width 500ms;
    z-index: 1000;
  }
  #pointer {
    transform: rotate(-90deg);
  }
</style>
