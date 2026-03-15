<script>
  import { onMount } from "svelte";
  
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
  <div class="header animate-fade-up">
    <h1>Technologies i use,</h1>
    <p>
      I leverage a diverse set of tools to build scalable and efficient solutions.
    </p>
  </div>

  <div class="tech-grid animate-fade-up" style="animation-delay: 0.2s">
    {#each links as link}
      <div class="tech-item glass">
        <img src={link} alt="" />
      </div>
    {/each}
  </div>
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
    padding: 10vh 0;
    position: relative;
  }

  .header {
    text-align: center;
    margin-bottom: 4rem;
    
    h1 {
      font-size: 2.5rem;
      font-weight: 800;
      margin-bottom: 1rem;
      @include text-gradient;
    }
    
    p {
      @include para;
      color: $dim;
    }
  }

  .tech-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
    max-width: 1000px;
    padding: 0 2rem;
  }

  .tech-item {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    background: rgba(255, 255, 255, 0.03);

    &:hover {
      transform: translateY(-5px) scale(1.05);
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba($hl, 0.3);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 0 15px rgba($hl, 0.1);
      
      img {
        filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.2));
      }
    }

    img {
      height: 32px;
      width: auto;
      transition: filter 0.3s ease;
    }
  }

  @media screen and (max-width: 600px) {
    .tech-grid {
      gap: 1rem;
      padding: 0 1rem;
    }
    .tech-item img {
      height: 24px;
    }
  }
</style>
