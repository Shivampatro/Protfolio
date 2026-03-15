<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';

    export let duration = 2500; // Duration in ms before hiding
    let visible = true;
    let lines = [];

    onMount(() => {
        // Generate warp lines
        for (let i = 0; i < 50; i++) {
            lines.push({
                top: Math.random() * 100,
                left: Math.random() * 100,
                width: 20 + Math.random() * 100,
                delay: Math.random() * 0.5,
                duration: 0.5 + Math.random() * 1
            });
        }
        lines = lines; // trigger reactivity

        setTimeout(() => {
            visible = false;
        }, duration);
    });
</script>

{#if visible}
    <div class="hyperjump-container" out:fade={{ duration: 800 }}>
        <div class="warp-core">
            <div class="glow-ring"></div>
            <div class="glow-ring inner"></div>
            <div class="core-text">Entering Orbit...</div>
        </div>
        
        {#each lines as line}
            <div 
                class="warp-line"
                style="
                    top: {line.top}%; 
                    left: {line.left}%; 
                    width: {line.width}px;
                    animation-delay: {line.delay}s;
                    animation-duration: {line.duration}s;
                "
            ></div>
        {/each}
        
        <div class="vignette"></div>
    </div>
{/if}

<style lang="scss">
    .hyperjump-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: $pri;
        z-index: 9999; // Above everything
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        perspective: 1000px;
    }

    .warp-core {
        position: relative;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: pulse 2s infinite ease-in-out;
    }

    .glow-ring {
        position: absolute;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: 2px solid transparent;
        border-top-color: $hl;
        border-bottom-color: $acc;
        animation: spin 1.5s linear infinite;
        box-shadow: 0 0 20px rgba($hl, 0.4), inset 0 0 20px rgba($acc, 0.2);

        &.inner {
            width: 100px;
            height: 100px;
            animation: spin-reverse 1s linear infinite;
            border-left-color: $hl;
            border-right-color: $acc;
            border-top-color: transparent;
            border-bottom-color: transparent;
        }
    }

    .core-text {
        font-family: 'Source Code Pro', monospace;
        color: $light;
        font-size: 1rem;
        letter-spacing: 4px;
        text-transform: uppercase;
        text-shadow: 0 0 10px rgba($hl, 0.8);
        animation: blink 1s infinite alternate;
    }

    .warp-line {
        position: absolute;
        height: 2px;
        background: linear-gradient(90deg, transparent, $hl, transparent);
        opacity: 0;
        filter: blur(1px);
        transform-origin: center;
        animation: warp-travel linear infinite;
    }

    .vignette {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle, transparent 40%, rgba($pri, 0.9) 100%);
        pointer-events: none;
    }

    @keyframes spin {
        0% { transform: rotate(0deg) scale(1); }
        50% { transform: rotate(180deg) scale(1.1); }
        100% { transform: rotate(360deg) scale(1); }
    }

    @keyframes spin-reverse {
        0% { transform: rotate(360deg) scale(1); }
        50% { transform: rotate(180deg) scale(0.9); }
        100% { transform: rotate(0deg) scale(1); }
    }

    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }

    @keyframes blink {
        0% { opacity: 0.5; }
        100% { opacity: 1; filter: drop-shadow(0 0 8px $hl); }
    }

    @keyframes warp-travel {
        0% {
            transform: translateZ(-1000px) scale(0.1);
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: translateZ(1000px) scale(3);
            opacity: 0;
        }
    }
</style>
