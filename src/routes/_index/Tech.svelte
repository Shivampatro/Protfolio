<script>
  import { onMount } from "svelte";
  import load from "$lib/loader.js";
  import TechConstellation from "$lib/components/TechConstellation.svelte";

  let showBadges = false;

  const links = [
    // --- Core Languages (Blues, Yellows) ---
    "https://img.shields.io/badge/C-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white",
    "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white",
    "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
    "https://img.shields.io/badge/python-%233776AB.svg?style=for-the-badge&logo=python&logoColor=white",

    // --- Web Foundation & Styles (Oranges, Blues, Cyans) ---
    "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
    "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
    "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
    
    // --- Frameworks & Libraries (Dark, Greens, Light Blue) ---
    "https://img.shields.io/badge/react-%2320232A.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
    "https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white",
    "https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white",
    "https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white",

    // --- Data Science & AI (Purple, White, Greens) ---
    "https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white",
    "https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white",
    "https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=for-the-badge&logo=Matplotlib&logoColor=black",
    "https://img.shields.io/badge/nvdia-%2376B900.svg?style=for-the-badge&logo=nvidia&logoColor=white",

    // --- Cloud, Server & Databases (Oranges, Reds, Greens) ---
    "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white",
    "https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white",
    "https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase",
    "https://img.shields.io/badge/mysql-%234479A1.svg?style=for-the-badge&logo=mysql&logoColor=white",
    "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
    "https://img.shields.io/badge/Amazon%20DynamoDB-4053D6?style=for-the-badge&logo=Amazon%20DynamoDB&logoColor=white",
    "https://img.shields.io/badge/apache-%23D22128.svg?style=for-the-badge&logo=apache&logoColor=white",
    "https://img.shields.io/badge/apache%20tomcat-%23F8DC75.svg?style=for-the-badge&logo=apache-tomcat&logoColor=black",

    // --- CRM, Design & Dev Tools (Light Blues, Reds, Oranges) ---
    "https://img.shields.io/badge/salesforce-%2300A1E0.svg?style=for-the-badge&logo=salesforce&logoColor=white",
    "https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white",
    "https://img.shields.io/badge/adobe%20photoshop-%2331A8FF.svg?style=for-the-badge&logo=adobe%20photoshop&logoColor=white",
    "https://img.shields.io/badge/adobe-%23FF0000.svg?style=for-the-badge&logo=adobe&logoColor=white",
    "https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white",
    "https://img.shields.io/badge/git-%23F05032.svg?style=for-the-badge&logo=git&logoColor=white",

    // --- Gaming / Hobbies (Reds, Blacks, Greens) ---
    "https://img.shields.io/badge/riotgames-%23D32936.svg?style=for-the-badge&logo=riotgames&logoColor=white",
    "https://img.shields.io/badge/epicgames-%23313131.svg?style=for-the-badge&logo=epicgames&logoColor=white",
    "https://img.shields.io/badge/xbox-%23107C10.svg?style=for-the-badge&logo=xbox&logoColor=white"
  ];
</script>

<main>
  <h1>Technologies i use,</h1>
  <p> I use technologies, depending on the work at hand, but some notable ones are</p>
  
  <TechConstellation />

  <button class="toggle-badges" on:click={() => showBadges = !showBadges}>
    {showBadges ? 'Hide' : 'Show'} All Badges ↓
  </button>

  {#if showBadges}
    <p class="tech-container">
      {#each links as link}
        <div class="tech-badge">
          <img src="{link}" alt="Technology Badge">
        </div>
      {/each}
    </p>
  {/if}
</main>

<style lang="scss">
  main {
    @include section(fit-content, 100vw);
    @include flex(column);
    @include flex-center;
    @include mono;

    background-color: $pri;
    z-index: $page-index;
    color: $light;
    padding-bottom: 20px;
  }

  .toggle-badges {
    margin-top: 1.5rem;
    padding: 0.5rem 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.04);
    color: $dim;
    font-family: 'Source Code Pro', monospace;
    font-size: 0.8rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      border-color: rgba($hl, 0.4);
      color: $hl;
      box-shadow: 0 0 15px rgba($hl, 0.15);
    }
  }
  p.tech-container {
    @include para;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    margin-top: 30px;
    padding: 0 10vw;
  }
  
  .tech-badge {
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    cursor: pointer;
    position: relative;
    border-radius: 4px;
    
    img {
      height: 32px;
      border-radius: 4px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
      transition: all 0.4s ease;
      position: relative;
      z-index: 2;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 4px;
      box-shadow: 0 0 20px 2px rgba(100, 200, 255, 0), /* Inner cyan */
                  0 0 40px 10px rgba(255, 100, 255, 0);  /* Outer pink nebula */
      opacity: 0;
      transition: all 0.5s ease;
      z-index: 1;
    }

    &:hover {
      transform: translateY(-8px) scale(1.15) rotate(1deg);
      
      img {
        filter: brightness(1.2) contrast(1.1);
      }

      &::after {
        opacity: 1;
        box-shadow: 0 0 20px 5px rgba(100, 200, 255, 0.8), /* Inner cyan glow */
                    0 0 40px 10px rgba(255, 100, 255, 0.4);  /* Outer pink nebula glow */
      }
    }
  }
</style>
