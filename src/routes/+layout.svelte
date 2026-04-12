<script>
  export let data;
  export let params = {};
  import GalaxyCursor from "$lib/components/GalaxyCursor.svelte";
  import HyperjumpLoader from "$lib/components/HyperjumpLoader.svelte";
  import ShootingStars from "$lib/components/ShootingStars.svelte";
  import Terminal from "$lib/components/Terminal.svelte";
  import { showTerminal, soundEnabled } from "$lib/stores.js";
  import { playHoverSound, toggleAmbient } from "$lib/audio.js";
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

    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        $showTerminal = !$showTerminal;
      }
      if (e.key === '`') {
        e.preventDefault();
        $showTerminal = !$showTerminal;
      }
    });

    document.addEventListener('mouseover', (e) => {
        const target = e.target.closest('button, a, .tech-badge, .widget, .item');
        if(target && $soundEnabled) playHoverSound();
    });
  });

  $: {
    if (typeof window !== 'undefined') {
       toggleAmbient();
    }
  }
</script>

  <HyperjumpLoader duration={500} />




<main>
  <img id="pointer" src="/pointer.svg" alt="pointer" />
  <section>
    <a href="/"> Home </a>
    <a href="/gallery"> Gallery </a>
    <a href="/blog"> Blogs </a>
  </section>
</main>
<GalaxyCursor />
<ShootingStars />
<Terminal bind:visible={$showTerminal} />
<button class="sound-toggle glass" class:active={$soundEnabled} on:click={() => $soundEnabled = !$soundEnabled}>
  {$soundEnabled ? '🔊 AUDIO ON' : '🔈 AUDIO OFF'}
</button>
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
  .sound-toggle {
    @include fixed(auto, 20px);
    bottom: 20px;
    z-index: 10000;
    padding: 8px 15px;
    background: rgba(15, 17, 26, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: $dim;
    font-family: 'Source Code Pro', monospace;
    font-size: 0.7rem;
    cursor: pointer;
    border-radius: 20px;
    transition: all 0.3s ease;

    &:hover {
      border-color: rgba(0, 242, 255, 0.5);
      color: #00f2ff;
    }

    &.active {
      color: #00ffaa;
      border-color: rgba(0, 255, 170, 0.4);
      box-shadow: 0 0 10px rgba(0, 255, 170, 0.2);
    }
  }
</style>
