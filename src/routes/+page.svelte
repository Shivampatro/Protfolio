<script>
  export let data;
  export let params = {};
  import Home from "./_index/Home.svelte";
  import About from "./_index/About.svelte";
  import Projects from "./_index/Projects.svelte";
  import Tech from "./_index/Tech.svelte";
  import Journey from "./_index/Journey.svelte";
  import CertificationNebula from "$lib/components/CertificationNebula.svelte";
  import ScrollReveal from "$lib/components/ScrollReveal.svelte";
  import StatsCounter from "$lib/components/StatsCounter.svelte";
</script>

<Home />
<main>
  <ScrollReveal animation="fade-up">
    <About />
  </ScrollReveal>

  <ScrollReveal animation="scale-in" delay={100}>
    <StatsCounter />
  </ScrollReveal>

  <ScrollReveal animation="fade-up" delay={100}>
    <Tech />
  </ScrollReveal>

  <ScrollReveal animation="fade-up" delay={150}>
    <CertificationNebula />
  </ScrollReveal>

  <ScrollReveal animation="fade-up" delay={100}>
    <Projects />
  </ScrollReveal>

  <ScrollReveal animation="fade-up">
    <Journey />
  </ScrollReveal>

  <footer>
    <p>
      made with ❤ and svelte.js by @Shivam Patro <br />
      <a href="https://github.com/Shivampatro/Protfolio"> code </a>
      |
      <a href="https://kit.svelte.dev/"> svelte </a>
      |
      <a href="https://en.wikipedia.org/wiki/Free_and_open-source_software"
        >FOSS</a
      >
    </p>
  </footer>
</main>


<style lang="scss">
  main {
    @include absolute;
    @include section(fit-content, 100vw);
    @include flex(column);
    z-index: $page-index;
    color: $light;
    padding-top: 100vh;
    pointer-events: none;

    & > :global(*) {
      pointer-events: auto;
    }
  }
  footer {
    @include section(fit-content, 100vw);
    @include flex(column);
    @include flex-center;
    @include mono;
    text-align: center;
    color: $light;
    background-color: $pri;
  }
  a {
    color: $light;
  }
</style>
