<script>
    export let title = "";
    export let description = "";
    export let link = "";

    let card;
    let style = "";

    function handleMouseMove(e) {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element
        const y = e.clientY - rect.top;  // y position within the element
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -10; // Max rotation 10deg
        const rotateY = ((x - centerX) / centerX) * 10;
        
        style = `transform: perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02);`;
    }

    function handleMouseLeave() {
        style = `transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);`;
    }
</script>

<a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    class="project-card premium-card"
    bind:this={card}
    on:mousemove={handleMouseMove}
    on:mouseleave={handleMouseLeave}
    {style}
>
    <div class="glow-effect"></div>
    <div class="content">
        <h2>{title.replaceAll(/-|_/g, " ")}</h2>
        <p>{description}</p>
        <div class="footer">
            <span class="github-link">Source Code →</span>
            <div class="decoration-dots">
                <span></span><span></span><span></span>
            </div>
        </div>
    </div>
</a>

<style lang="scss">
    .project-card {
        text-decoration: none;
        color: inherit;
        display: block;
        @include premium-card;
        padding: 2rem;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        transition: transform 0.1s ease-out, box-shadow 0.3s ease;
        transform-style: preserve-3d;
        background: rgba($sec, 0.4);
        border: 1px solid rgba(255, 255, 255, 0.05);

        &:hover {
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba($hl, 0.15);
            border-color: rgba($hl, 0.3);
            
            .glow-effect {
                opacity: 1;
            }
            .github-link {
                color: $hl;
                opacity: 1;
                transform: translateX(5px);
            }
            .decoration-dots span {
                background: $hl;
            }
        }
    }

    .glow-effect {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at top right, rgba($hl, 0.15), transparent 60%);
        opacity: 0;
        transition: opacity 0.4s ease;
        pointer-events: none;
    }

    .content {
        position: relative;
        z-index: 2;
        transform: translateZ(30px); // Parallax effect for content

        h2 {
            margin-top: 0;
            font-size: 1.4rem;
            color: $light;
            font-weight: 700;
            letter-spacing: -0.5px;
            margin-bottom: 1rem;
        }

        p {
            color: $dim;
            font-size: 0.95rem;
            line-height: 1.6;
            margin-bottom: 2rem;
            min-height: 48px;
        }
    }

    .footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid rgba(255, 255, 255, 0.05);
        padding-top: 1rem;
    }

    .github-link {
        font-size: 0.85rem;
        font-weight: 600;
        opacity: 0.7;
        color: $dim;
        transition: all 0.3s ease;
    }

    .decoration-dots {
        display: flex;
        gap: 4px;
        span {
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.2);
            transition: background 0.3s ease;
        }
    }
</style>
