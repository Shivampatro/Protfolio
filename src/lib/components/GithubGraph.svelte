<script>
    import { onMount } from 'svelte';

    export let username = "Shivampatro";
    let contributions = [];
    const weeks = 52; // Number of weeks to show (Full Year)
    const daysPerWeek = 7;
    
    // Generate mock data that looks like a real contribution graph
    onMount(() => {
        for (let i = 0; i < weeks * daysPerWeek; i++) {
            contributions.push({
                level: Math.floor(Math.random() * 5), // 0 to 4
                date: new Date(Date.now() - (weeks * daysPerWeek - i) * 24 * 60 * 60 * 1000)
            });
        }
    });

    const colors = [
        'rgba(255, 255, 255, 0.05)', // level 0
        'rgba(0, 242, 255, 0.2)',    // level 1
        'rgba(0, 242, 255, 0.4)',    // level 2
        'rgba(0, 242, 255, 0.7)',    // level 3
        '#00f2ff'                    // level 4
    ];
</script>

<div class="github-graph glass animate-fade-up">
    <div class="header">
        <div class="title">
            <span>🐙</span> GitHub Activity
        </div>
        <a href="https://github.com/{username}" target="_blank" class="username">@{username}</a>
    </div>
    
    <div class="graph-container">
        {#each Array(weeks) as _, w}
            <div class="week">
                {#each Array(daysPerWeek) as _, d}
                    {#if contributions[w * daysPerWeek + d]}
                        <div 
                            class="day" 
                            style="background-color: {colors[contributions[w * daysPerWeek + d].level]}"
                            title="{contributions[w * daysPerWeek + d].date.toDateString()}"
                        ></div>
                    {/if}
                {/each}
            </div>
        {/each}
    </div>

    <div class="legend">
        <span>Less</span>
        {#each colors as color}
            <div class="day" style="background-color: {color}"></div>
        {/each}
        <span>More</span>
    </div>
</div>

<style lang="scss">
    .github-graph {
        padding: 1.5rem;
        border-radius: 20px;
        max-width: fit-content;
        margin: 2rem auto;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        
        .title {
            font-weight: bold;
            font-size: 0.9rem;
            color: $light;
        }

        .username {
            font-size: 0.8rem;
            color: $hl;
            text-decoration: none;
            &:hover { text-decoration: underline; }
        }
    }

    .graph-container {
        display: flex;
        gap: 3px;
        overflow-x: auto;
        padding-bottom: 0.5rem;
        
        &::-webkit-scrollbar {
            height: 4px;
        }
        &::-webkit-scrollbar-thumb {
            background: rgba($hl, 0.3);
            border-radius: 10px;
        }
    }

    .week {
        display: flex;
        flex-direction: column;
        gap: 3px;
        flex-shrink: 0;
    }

    .day {
        width: 11px;
        height: 11px;
        border-radius: 2px;
        transition: transform 0.2s ease;

        &:hover {
            transform: scale(1.3);
            z-index: 10;
        }
    }

    .legend {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 4px;
        margin-top: 1rem;
        font-size: 0.7rem;
        color: $dim;
        
        .day { width: 8px; height: 8px; margin: 0 1px; }
    }

    @media screen and (max-width: 600px) {
        .github-graph {
            padding: 1rem;
            width: 100%;
        }
        .day { width: 9px; height: 9px; }
    }
</style>
