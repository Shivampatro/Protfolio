<script>
    export let badges = [];
</script>

<div class="tech-bento">
    {#each badges as badge, i}
        <div class="tech-card glass animate-fade-up" style="animation-delay: {0.1 + i * 0.05}s">
            <img src={badge} alt="tech" />
            <div class="glow-effect"></div>
        </div>
    {/each}
</div>

<style lang="scss">
    .tech-bento {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        gap: 1.5rem;
        width: 90vw;
        max-width: 1000px;
        margin: 4rem auto;
    }

    .tech-card {
        aspect-ratio: 16/9;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        position: relative;
        overflow: hidden;
        transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        cursor: pointer;

        img {
            height: 30px;
            width: auto;
            z-index: 2;
            transition: transform 0.3s ease;
            filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.1));
        }

        .glow-effect {
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at center, rgba($hl, 0.15) 0%, transparent 70%);
            opacity: 0;
            transition: opacity 0.5s ease;
            z-index: 1;
        }

        &:hover {
            transform: translateY(-8px) scale(1.02);
            border-color: rgba($hl, 0.4);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba($hl, 0.1);

            img { transform: scale(1.1); filter: drop-shadow(0 0 10px rgba($hl, 0.5)); }
            .glow-effect { opacity: 1; }
        }
        
        // Floating animation
        animation: float 6s ease-in-out infinite;
        &:nth-child(even) { animation-delay: -3s; }
    }

    @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
    }

    @media screen and (max-width: 600px) {
        .tech-bento {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
        }
        .tech-card img { height: 24px; }
    }
</style>
