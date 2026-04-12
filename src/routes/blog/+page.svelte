<script>
  export let data;
  export let params = {};
  import { onMount } from "svelte";
  let text = "Coming Soon...";
</script>

<main>
  <div class="glow"></div>
  <h1>Blogs</h1>
  <p>> {text}</p>
  <a href="/">↩ Return Home</a>
</main>

<style lang="scss">
  main {
    @include fullscreen;
    @include flex(column);
    @include flex-center;
    background-color: $pri;
    color: $light;
    @include mono;
    position: relative;
    overflow: hidden;
  }

  .glow {
    position: absolute;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba($hl, 0.15) 0%, transparent 70%);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    filter: blur(40px);
    z-index: -1;
  }

  h1 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, $hl, $acc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    color: $dim;
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  a {
    color: $hl;
    text-decoration: none;
    font-size: 1rem;
    border: 1px solid rgba($hl, 0.3);
    padding: 0.5rem 1rem;
    border-radius: 8px;
    transition: all 0.3s;

    &:hover {
      background: rgba($hl, 0.1);
      border-color: $hl;
      transform: scale(1.05);
    }
  }
</style>
