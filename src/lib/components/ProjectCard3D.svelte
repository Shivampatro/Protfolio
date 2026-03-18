<script>
    export let title = "";
    export let description = "";
    export let link = "";
    export let index = 0;

    // Galaxy accent colors for each card
    const accentColors = [
        { primary: '#00d4ff', secondary: '#7b2ff7', emoji: '🚀' },
        { primary: '#ff6bcb', secondary: '#f59e0b', emoji: '⚡' },
        { primary: '#34d399', secondary: '#06b6d4', emoji: '🌟' },
        { primary: '#a78bfa', secondary: '#f472b6', emoji: '💫' },
        { primary: '#38bdf8', secondary: '#818cf8', emoji: '✨' },
        { primary: '#fb923c', secondary: '#e879f9', emoji: '🔥' }
    ];

    $: accent = accentColors[index % accentColors.length];

    let card;
    let glowX = 50;
    let glowY = 50;
    let isHovered = false;
    let style = "";

    function handleMouseMove(e) {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        glowX = (x / rect.width) * 100;
        glowY = (y / rect.height) * 100;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;
        
        style = `transform: perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04, 1.04, 1.04); --glow-x: ${glowX}%; --glow-y: ${glowY}%;`;
        isHovered = true;
    }

    function handleMouseLeave() {
        style = `transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);`;
        isHovered = false;
    }
</script>

<a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    class="project-card"
    class:hovered={isHovered}
    bind:this={card}
    on:mousemove={handleMouseMove}
    on:mouseleave={handleMouseLeave}
    {style}
    style:--accent={accent.primary}
    style:--accent2={accent.secondary}
    style:--delay={index * 0.1 + 's'}
>
    <!-- Animated gradient border -->
    <div class="border-glow"></div>

    <!-- Mouse-tracking spotlight -->
    <div class="spotlight"></div>

    <!-- Top accent bar -->
    <div class="accent-bar"></div>

    <!-- Floating particles -->
    <div class="particles">
        <span></span><span></span><span></span><span></span><span></span>
    </div>

    <div class="content">
        <div class="card-header">
            <span class="card-emoji">{accent.emoji}</span>
            <h2>{title.replaceAll(/-|_/g, " ")}</h2>
        </div>
        <p>{description}</p>
        <div class="footer">
            <span class="github-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
                View Source
            </span>
            <span class="arrow">→</span>
        </div>
    </div>
</a>

<style lang="scss">
    .project-card {
        text-decoration: none;
        color: inherit;
        display: block;
        padding: 0;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        border-radius: 20px;
        transition: transform 0.15s ease-out, box-shadow 0.4s ease;
        transform-style: preserve-3d;
        background: linear-gradient(145deg, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.7));
        isolation: isolate;
        animation: cardFadeIn 0.6s ease-out both;
        animation-delay: var(--delay);

        &:hover {
            box-shadow:
                0 25px 50px rgba(0, 0, 0, 0.5),
                0 0 40px rgba(var(--accent-rgb, 0, 212, 255), 0.15),
                inset 0 1px 0 rgba(255, 255, 255, 0.1);

            .border-glow {
                opacity: 1;
            }
            .spotlight {
                opacity: 1;
            }
            .accent-bar {
                transform: scaleX(1);
                opacity: 1;
            }
            .github-link {
                color: var(--accent);
            }
            .arrow {
                transform: translateX(4px);
                color: var(--accent);
            }
            .card-emoji {
                transform: scale(1.2) rotate(10deg);
            }
            .particles span {
                opacity: 1;
            }
        }
    }

    @keyframes cardFadeIn {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    // Animated gradient border
    .border-glow {
        position: absolute;
        inset: 0;
        border-radius: 20px;
        padding: 1.5px;
        background: linear-gradient(
            135deg,
            var(--accent) 0%,
            transparent 40%,
            transparent 60%,
            var(--accent2) 100%
        );
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        opacity: 0.4;
        transition: opacity 0.4s ease;
        pointer-events: none;
        z-index: 1;
    }

    // Mouse-tracking spotlight effect
    .spotlight {
        position: absolute;
        inset: 0;
        background: radial-gradient(
            350px circle at var(--glow-x, 50%) var(--glow-y, 50%),
            rgba(var(--accent-rgb, 0, 212, 255), 0.12),
            transparent 60%
        );
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
        z-index: 1;
    }

    // Top accent bar
    .accent-bar {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--accent), var(--accent2));
        transform: scaleX(0.3);
        transform-origin: left;
        opacity: 0.5;
        transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
        z-index: 2;
    }

    // Floating particles
    .particles {
        position: absolute;
        inset: 0;
        pointer-events: none;
        z-index: 0;
        overflow: hidden;

        span {
            position: absolute;
            width: 2px;
            height: 2px;
            border-radius: 50%;
            background: var(--accent);
            opacity: 0;
            transition: opacity 0.6s ease;

            &:nth-child(1) {
                top: 20%;
                right: 15%;
                animation: float1 4s ease-in-out infinite;
                animation-delay: 0s;
            }
            &:nth-child(2) {
                top: 60%;
                right: 25%;
                width: 3px;
                height: 3px;
                animation: float2 5s ease-in-out infinite;
                animation-delay: 1s;
            }
            &:nth-child(3) {
                bottom: 30%;
                left: 20%;
                animation: float1 6s ease-in-out infinite;
                animation-delay: 2s;
            }
            &:nth-child(4) {
                top: 40%;
                left: 10%;
                width: 1.5px;
                height: 1.5px;
                background: var(--accent2);
                animation: float2 4.5s ease-in-out infinite;
                animation-delay: 0.5s;
            }
            &:nth-child(5) {
                bottom: 15%;
                right: 10%;
                width: 2.5px;
                height: 2.5px;
                background: var(--accent2);
                animation: float1 5.5s ease-in-out infinite;
                animation-delay: 1.5s;
            }
        }
    }

    @keyframes float1 {
        0%, 100% { transform: translate(0, 0); }
        50% { transform: translate(8px, -12px); }
    }
    @keyframes float2 {
        0%, 100% { transform: translate(0, 0); }
        50% { transform: translate(-6px, 10px); }
    }

    .content {
        position: relative;
        z-index: 3;
        padding: 1.8rem 2rem 1.5rem;
        transform: translateZ(30px);

        h2 {
            margin: 0;
            font-size: 1.3rem;
            color: $light;
            font-weight: 700;
            letter-spacing: -0.3px;
            line-height: 1.3;
        }

        p {
            color: $dim;
            font-size: 0.9rem;
            line-height: 1.7;
            margin: 0.8rem 0 1.5rem;
            min-height: 48px;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
    }

    .card-header {
        display: flex;
        align-items: center;
        gap: 0.7rem;
        margin-bottom: 0.3rem;
    }

    .card-emoji {
        font-size: 1.6rem;
        transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        filter: drop-shadow(0 0 6px rgba(var(--accent-rgb, 0, 212, 255), 0.4));
    }

    .footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 1rem;
        border-top: 1px solid rgba(255, 255, 255, 0.06);
    }

    .github-link {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.82rem;
        font-weight: 600;
        color: $dim;
        transition: color 0.3s ease;

        svg {
            opacity: 0.7;
        }
    }

    .arrow {
        font-size: 1.2rem;
        color: $dim;
        transition: all 0.3s ease;
        font-weight: 300;
    }
</style>
