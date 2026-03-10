<main>
  <div class="about-container glass animate-fade-up">
    <h1>Hello there! 👋</h1>
    <p class="para">
      I am a {new Date().getFullYear() - 2007} year old <strong>Full Stack Developer</strong> and <strong>Data Analyst</strong>. I'm driven by a passion for solving complex problems through elegant code and competitive programming.
    </p>
    <p class="para">
      When I'm not coding, you'll find me sketching pencil art, exploring mythology, or enjoying a good biriyani. I have a deep appreciation for storytelling, from ancient myths to modern Shark Tank pitches.
    </p>
    <p class="para">
      I believe that great software is a blend of logic and creativity—much like a good piece of art.
    </p>
    <div class="footer">
      <p>Checkout my <strong>Artist</strong> side on</p>
      <a href="https://www.instagram.com/_its_me_yash_130/" class="insta-link">Instagram →</a>
    </div>
  </div>
</main>

<style lang="scss">
  main {
    @include section(fit-content, 100vw);
    @include flex(column);
    @include flex-center;
    @include mono;
    background-color: $pri;
    color: $light;
    z-index: $page-index;
    padding: 10vh 2rem;
  }

  .about-container {
    max-width: 800px;
    padding: 3rem;
    text-align: center;
    border-radius: 40px;
    background: rgba(255, 255, 255, 0.02);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);

    h1 {
      font-size: clamp(2rem, 5vw, 3rem);
      margin-bottom: 2rem;
      @include text-gradient;
    }
  }

  .para {
    @include para;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    line-height: 1.7;
    color: $dim;
    width: 100%;
  }

  .footer {
    margin-top: 3rem;
    p { margin-bottom: 0.5rem; color: $dim; }
  }

  .insta-link {
    color: $hl;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    &:hover {
      letter-spacing: 1px;
      text-shadow: 0 0 10px rgba($hl, 0.4);
    }
  }

  @media screen and (max-width: 600px) {
    .about-container {
      padding: 2rem 1.5rem;
      border-radius: 24px;
    }
  }
</style>
