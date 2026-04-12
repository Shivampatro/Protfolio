<script>
  export let data;
  export let params = {};
  import ConstellationGallery from "$lib/components/ConstellationGallery.svelte";
</script>

<svelte:head>
  <title>Gallery | Shivam Patro</title>
</svelte:head>

<div class="gallery-background">
  <div class="stars"></div>
  <div class="stars2"></div>
  <div class="stars3"></div>
</div>

<div class="gallery-page">
  <header class="page-header">
    <h1>Daily Work Gallery</h1>
    <p>A constellation of my daily progress, shipments, and experiments.</p>
  </header>
  
  <ConstellationGallery />
</div>

<style lang="scss">
  .gallery-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    z-index: 1; 
    overflow: hidden;
  }

  // Generate random stars
  @function multiple-box-shadow($n) {
    $value: '#{random(2000)}px #{random(2000)}px #FFF';
    @for $i from 2 through $n {
      $value: '#{$value}, #{random(2000)}px #{random(2000)}px #FFF';
    }
    @return unquote($value);
  }

  $shadows-small:  multiple-box-shadow(700);
  $shadows-medium: multiple-box-shadow(200);
  $shadows-big:    multiple-box-shadow(100);

  .stars {
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: $shadows-small;
    animation: animStar 50s linear infinite;

    &:after {
      content: " ";
      position: absolute;
      top: 2000px;
      width: 1px;
      height: 1px;
      background: transparent;
      box-shadow: $shadows-small;
    }
  }

  .stars2 {
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: $shadows-medium;
    animation: animStar 100s linear infinite;

    &:after {
      content: " ";
      position: absolute;
      top: 2000px;
      width: 2px;
      height: 2px;
      background: transparent;
      box-shadow: $shadows-medium;
    }
  }

  .stars3 {
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: $shadows-big;
    animation: animStar 150s linear infinite;

    &:after {
      content: " ";
      position: absolute;
      top: 2000px;
      width: 3px;
      height: 3px;
      background: transparent;
      box-shadow: $shadows-big;
    }
  }

  @keyframes animStar {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(-2000px);
    }
  }

  .gallery-page {
    min-height: 100vh;
    padding-top: 15vh;
    padding-bottom: 10vh;
    background-color: transparent; /* Changed from #0f111a to let the galaxy show */
    color: #f5f7fa; // $light text color
    position: relative;
    z-index: 10;
    pointer-events: none;

    /* Allows clicking the cards while keeping background click-through */
    & > :global(*) {
      pointer-events: auto;
    }
  }

  .page-header {
    text-align: center;
    margin-bottom: 80px;

    h1 {
      font-size: 3.5rem;
      font-weight: 800;
      background: linear-gradient(135deg, #ffffff 0%, #a5b4fc 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 16px;
      display: inline-block;
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    p {
      color: rgba(255, 255, 255, 0.6);
      font-size: 1.2rem;
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;
    }
  }
</style>
