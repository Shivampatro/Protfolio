<script>
  import { onMount } from "svelte";
  import load from "$lib/loader.js";
  const links = [
    "https://img.shields.io/badge/Salesforce-00A1E0?style=for-the-badge&logo=salesforce&logoColor=white",
    "https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white",
    "https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white",
    "https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black",
    "https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white",
    "https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white",
    "https://img.shields.io/badge/Amazon_DynamoDB-4053D6?style=for-the-badge&logo=amazon-dynamodb&logoColor=white",
    "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white",
    "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
    "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
    "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
    "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
    "https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white",
    "https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white",
    "https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black",
    "https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white",
    "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
    "https://img.shields.io/badge/GIT-F05032?style=for-the-badge&logo=git&logoColor=white",
    "https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white",
    "https://img.shields.io/badge/Apache-D22128?style=for-the-badge&logo=apache&logoColor=white",
    "https://img.shields.io/badge/Apache_Tomcat-F8DC75?style=for-the-badge&logo=apache-tomcat&logoColor=black",
    "https://img.shields.io/badge/Adobe_Photoshop-31A8FF?style=for-the-badge&logo=adobe-photoshop&logoColor=black",
    "https://img.shields.io/badge/Canva-00C4CC?style=for-the-badge&logo=canva&logoColor=white",
    "https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white",
    "https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white",
    "https://img.shields.io/badge/Matplotlib-ffffff?style=for-the-badge&logo=matplotlib&logoColor=black",
    "https://img.shields.io/badge/NVIDIA-76B900?style=for-the-badge&logo=nvidia&logoColor=white",
  ];
</script>

<main>
  <h1>Technologies i use,</h1>
  <p>
    I use technologies, depending on the work at hand, but some notable ones are
  </p>
  <p>
    {#each links as link}
      <img src={link} alt="" />
    {/each}
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
    color: $light;
    padding-bottom: 20px;
  }
  section {
    @include section(fit-content, 90vw);
    @include grid(1fr 1fr 1fr, 1fr);
    max-width: 500px;
  }
  @media screen and (max-width: 500px) {
    section {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }
  }
  h2 {
    text-decoration: underline;
  }
  p {
    @include para;
  }
  div {
    text-align: center;
  }
</style>
