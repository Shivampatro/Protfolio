<script>
  export let src = "/logo.png";
  export let name = "Shivam";
</script>

<div class="profile-avatar animate-fade-up">

  <div class="avatar-glow-halo"></div>
  <div class="avatar-frame">
    <img {src} alt={name} />
  </div>
</div>

<style lang="scss">
  @import "../../app.scss";

  .profile-avatar {
    position: absolute;
    top: 6.5rem;
    right: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 10;

    @media only screen and (max-width: 700px) {
      top: 3.5rem;
      right: 1.5rem;
    }
  }

  .avatar-glow-halo {
    position: absolute;
    inset: -10px; 
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 255, 255, 1) 40%, rgba(255, 255, 255, 0.7) 60%, transparent 80%);
    filter: blur(14px);
    opacity: 0.9;
    animation: rotate 10s linear infinite;
  }


  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .avatar-frame {
    width: 310px;
    height: 310px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    border: 4px solid #ffffff; // White border
    box-shadow: 0 0 45px rgba(255, 255, 255, 0.5);
    background-image: url('/moon.png');
    background-size: cover;
    background-position: center;

    @media only screen and (max-width: 700px) {
      width: 180px;
      height: 180px;
    }






    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform: scale(1.15); // Zooms in slightly to hide its own baked-in white rim
      transition: transform 0.3s ease;
    }

    &:hover img {
      transform: scale(1.22);
    }

  }
</style>

