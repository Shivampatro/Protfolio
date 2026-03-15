import { json } from '@sveltejs/kit';

export async function GET() {
    const slug = "d87hu06bo764lw6a68";
    const graphqlUrl = "https://profile.api.trailhead.com/graphql";
    
    const query = `
        query GetTrailheadRank($slug: String, $hasSlug: Boolean!) {
            profile(slug: $slug, hasSlug: $hasSlug) {
                trailheadStats {
                    earnedPointsSum
                    earnedBadgesCount
                    completedTrailCount
                    rank {
                        title
                        imageUrl
                    }
                }
            }
        }
    `;

    try {
        const response = await fetch(graphqlUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query,
                variables: { slug, hasSlug: true },
                operationName: "GetTrailheadRank"
            })
        });

        const result = await response.json();
        const stats = result.data.profile.trailheadStats;

        return json({
            badges: stats.earnedBadgesCount,
            points: stats.earnedPointsSum.toLocaleString(),
            trails: stats.completedTrailCount,
            rank: stats.rank.title,
            rankIcon: stats.rank.imageUrl
        });
    } catch (error) {
        console.error("Error fetching Trailhead data:", error);
        return json({ 
            badges: 53, 
            points: "19,525", 
            trails: 5, 
            rank: "Mountaineer" 
        }); // Fallback to provided data
    }
}
