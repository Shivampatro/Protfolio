<script>
  import { getQuotes } from "$lib/utils.js";
  import Github from "$lib/svgs/Github.svelte";
  import Linkedin from "$lib/svgs/Linkedin.svelte";
  import Mail from "$lib/svgs/Mail.svelte";
  import Salesforce from "$lib/svgs/Salesforce.svelte";
  import Resume from "$lib/svgs/Resume.svelte";
  import ContactForm from "../_common/ContactForm.svelte";
  import Galaxy from "$lib/components/Galaxy.svelte";
  import InteractiveResume from "$lib/components/InteractiveResume.svelte";
  import Dock from "$lib/components/Dock.svelte";
  import FloatingOrb from "$lib/components/FloatingOrb.svelte";
  import SideRail from "$lib/components/SideRail.svelte";
  import ProfileAvatar from "$lib/components/ProfileAvatar.svelte";
  import { onMount } from "svelte";

  let text = "";
  let arrIndex = 0,
    index = 0,
    done = false;
  let showForm = false;
  let showResume = false;

  const dockItems = [
    {
      label: "Mail",
      icon: Mail,
      onClick: (e) => { e.preventDefault(); showForm = true; },
      href: "#contact"
    },
    {
      label: "Github",
      icon: Github,
      href: "https://github.com/Shivampatro/",
      target: "_blank"
    },
    {
      label: "Linkedin",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/shivam130/",
      target: "_blank"
    },
    {
      label: "Salesforce",
      icon: Salesforce,
      href: "https://www.salesforce.com/trailblazer/d87hu06bo764lw6a68",
      target: "_blank"
    },
    {
      label: "Resume",
      icon: Resume,
      onClick: (e) => { e.preventDefault(); showResume = true; },
      href: "#resume"
    }
  ];
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


  <!-- Left Navigation Social Rail -->
  <SideRail items={dockItems} />

  <!-- Top Right Glowing Profile Widget -->
  <ProfileAvatar src="/logo.png" />


  <!-- Content Group Bottom-Right -->
  <div class="hero-content animate-fade-up">
    <h1 class="brush-title">Shivam Patro</h1>
    <p class="quote">
      &gt; {text}
      <span></span>
    </p>
  </div>

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




  .hero-content {
    position: absolute;
    bottom: 4rem;
    right: 4rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    z-index: 5;
    text-align: right;
    max-width: 450px;

    @media only screen and (max-width: 700px) {
      bottom: 2.5rem;
      right: 0;
      left: 0;
      margin: 0 auto;
      align-items: center;
      text-align: center;
      max-width: 90vw;
    }
  }

  .brush-title {
    font-family: 'Caveat', cursive, sans-serif;
    font-size: clamp(3rem, 10vw, 4.5rem);
    font-weight: 500;
    margin-bottom: 0.2rem;
    color: #4FB8E6; 
    text-shadow: 0 0 20px rgba(0, 242, 255, 0.2);
  }

  p.quote {
    color: #A0B3CF;
    font-size: 0.9rem;
    line-height: 1.5;
    max-width: 100%;
    font-family: 'Source Code Pro', monospace;
    opacity: 0.85;
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
