<script>
  import { getQuotes } from "$lib/utils.js";
  import Codechef from "$lib/svgs/Codechef.svelte";
  import Github from "$lib/svgs/Github.svelte";
  import Linkedin from "$lib/svgs/Linkedin.svelte";
  import Hackerrank from "$lib/svgs/Hackerrank.svelte";
  import Mail from "$lib/svgs/Mail.svelte";
  import Salesforce from "$lib/svgs/Salesforce.svelte";
  import Resume from "$lib/svgs/Resume.svelte";
  import ContactForm from "../_common/ContactForm.svelte";
  import Galaxy from "$lib/components/Galaxy.svelte";
  import InteractiveResume from "$lib/components/InteractiveResume.svelte";
  import { onMount } from "svelte";

  let text = "";
  let arrIndex = 0,
    index = 0,
    done = false;
  let showForm = false;
  let showResume = false;
  const strings = ["Hello Friend///////", ...getQuotes()];

  function write(strs) {
    if (done) {
      text = text.slice(0, -1);
      if (!text.length) {
        done = false;
        if (arrIndex == strs.length - 1) return true;
      }
      return false;
    }

    if (strs[index] != "/") text += strs[index];
    index++;
    if (index >= strs.length) {
      index = 0;
      done = true;
      return true;
    }
    return false;
  }

  onMount(() => {
    const id = setInterval(() => {
      if (write(strings[arrIndex])) {
        arrIndex++;
        if (arrIndex >= strings.length) clearInterval(id);
      }
    }, 150);
  });
</script>

<main>
  <div class="galaxy-bg">
    <Galaxy />
  </div>
  <img src="/logo.png" alt="logo" class="animate-fade-up" />
  <h1 class="text-gradient animate-fade-up" style="animation-delay: 0.1s">Shivam Patro</h1>
  <p class="animate-fade-up" style="animation-delay: 0.2s">
    > {text}
    <span></span>
  </p>
  <section class="glass animate-fade-up" style="animation-delay: 0.3s">
    <a
      aria-label="Mail"
      href="#contact"
      on:click|preventDefault={() => (showForm = true)}
    >
      <Mail />
    </a>
    <a
      aria-label="Github"
      target="_blank"
      href="https://github.com/Shivampatro/"
    >
      <Github />
    </a>
    <a
      aria-label="Linkedin"
      target="_blank"
      href="https://www.linkedin.com/in/shivam130/"
    >
      <Linkedin />
    </a>
    <a
      aria-label="Salesforce"
      target="_blank"
      href="https://www.salesforce.com/trailblazer/d87hu06bo764lw6a68"
    >
      <Salesforce />
    </a>
    <a
      aria-label="Resume"
      href="#resume"
      on:click|preventDefault={() => (showResume = true)}
    >
      <Resume />
    </a>
  </section>

  {#if showForm}
    <ContactForm on:close={() => (showForm = false)} />
  {/if}

  {#if showResume}
    <InteractiveResume on:close={() => (showResume = false)} />
  {/if}
</main>

<style lang="scss">
  main {
    @include fullscreen;
    @include fixed(0, 0);
    @include mono;
    @include flex(column);
    @include flex-center;
    z-index: 0;
    background-color: $pri;
    color: $light;
    overflow: hidden;
  }
  
  .galaxy-bg {
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;
  }

  section {
    @include grid(repeat(5, 1fr), 1fr);
    @include glass;
    align-items: center;
    text-align: center;
    width: 90vw;
    height: 60px;
    max-width: 400px;
    margin-top: 2rem;
    position: relative;
    background: rgba(255, 255, 255, 0.05);

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: 20px;
      padding: 1px;
      background: linear-gradient(to right, rgba($hl, 0.3), rgba($acc, 0.3));
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      pointer-events: none;
    }
  }

  img {
    filter: drop-shadow(0 0 20px rgba($hl, 0.3));
    aspect-ratio: 1;
    max-width: 180px;
    width: 35vw;
    border-radius: 24px;
    margin-bottom: 1.5rem;
  }

  h1 {
    font-size: clamp(2rem, 8vw, 4rem);
    font-weight: 800;
    margin-bottom: 0.5rem;
    letter-spacing: -1px;
    text-align: center;
  }

  p {
    max-width: 90vw;
    text-align: center;
    color: $dim;
    font-size: 1.1rem;
    min-height: 1.6em;
  }
  span {
    border-right: 6px solid $light;
    animation: 1000ms infinite blink;
  }
  @keyframes blink {
    0% {
      border-color: $pri;
    }
    20% {
      border-color: $light;
    }
    80% {
      border-color: $light;
    }
    100% {
      border-color: $pri;
    }
  }
</style>
