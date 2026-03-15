<script>
    import { onMount } from 'svelte';

    export let userName = "Shivam Patro";
    
    let rank = "Mountaineer";
    let badges = 53;
    let points = "19,525";
    let trails = 5;
    let rankIcon = "https://res.cloudinary.com/trailhead/image/upload/public-trailhead/assets/images/ranks/mountaineer.png";
    let loading = true;

    async function fetchStats() {
        try {
            const res = await fetch('/api/trailhead');
            const data = await res.json();
            if (!data.error) {
                rank = data.rank;
                badges = data.badges;
                points = data.points;
                trails = data.trails;
                rankIcon = data.rankIcon || "https://res.cloudinary.com/trailhead/image/upload/public-trailhead/assets/images/ranks/mountaineer.png";
            }
        } catch (e) {
            console.error("Failed to fetch trailhead stats", e);
        } finally {
            loading = false;
        }
    }

    onMount(fetchStats);

    $: stats = [
        { label: "Badges", value: badges, icon: "🏅", color: "#2ecc71" },
        { label: "Points", value: points, icon: "⚡", color: "#27ae60" },
        { label: "Trails", value: trails, icon: "🛤️", color: "#219150" }
    ];
</script>

<div class="trailhead-card glass animate-fade-up">
    <div class="trailhead-header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" alt="Salesforce" class="sf-logo" />
        <div class="user-info">
            <h3>{userName}</h3>
            <p class="rank">{loading ? 'Loading...' : `${rank} Rank`}</p>
        </div>
        {#if rankIcon && !loading}
            <img src={rankIcon} alt={rank} class="rank-emblem" />
        {/if}
    </div>
    
    <div class="stats-grid">
        {#each stats as stat}
            <div class="stat-item">
                <span class="icon">{stat.icon}</span>
                <div class="stat-details">
                    <span class="value" style="color: {stat.color}">{loading ? '...' : stat.value}</span>
                    <span class="label">{stat.label}</span>
                </div>
            </div>
        {/each}
    </div>

    <a href="https://www.salesforce.com/trailblazer/d87hu06bo764lw6a68" target="_blank" rel="noopener noreferrer" class="view-profile">
        View Trailblazer Profile →
    </a>
</div>

<style lang="scss">
    .trailhead-card {
        padding: 2rem;
        max-width: 400px;
        margin: 2rem auto;
        border-radius: 24px;
        text-align: left;
        position: relative;
        overflow: hidden;

        &::after {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba($hl, 0.05) 0%, transparent 70%);
            pointer-events: none;
        }
    }

    .trailhead-header {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 2rem;

        .sf-logo {
            height: 35px;
            filter: drop-shadow(0 0 5px rgba($hl, 0.3));
        }

        .rank-emblem {
            height: 45px; // Smaller as requested
            width: auto;
            margin-left: auto;
            filter: drop-shadow(0 0 8px rgba($hl, 0.4));
        }

        h3 {
            margin: 0;
            font-size: 1.1rem;
            color: $light;
        }

        .rank {
            margin: 0;
            font-size: 0.8rem;
            color: $hl;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
    }

    .stats-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        margin-bottom: 2rem;
    }

    .stat-item {
        text-align: center;
        .icon { font-size: 1.5rem; display: block; margin-bottom: 0.5rem; }
        .value { display: block; font-weight: 800; font-size: 1.1rem; }
        .label { font-size: 0.75rem; color: $dim; text-transform: uppercase; }
    }

    .view-profile {
        display: block;
        text-align: center;
        color: $light;
        text-decoration: none;
        font-size: 0.9rem;
        font-weight: bold;
        padding: 0.8rem;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.05);
        transition: all 0.3s ease;

        &:hover {
            background: rgba($hl, 0.1);
            color: $hl;
            transform: translateY(-2px);
        }
    }
</style>
