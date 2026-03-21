import { json } from "@sveltejs/kit";
async function GET() {
  const slug = "d87hu06bo764lw6a68";
  const graphqlUrl = "https://profile.api.trailhead.com/graphql";
  const query = `
        query GetTrailheadRank($slug: String, $hasSlug: Boolean!) {
            profile(slug: $slug) @include(if: $hasSlug) {
                ... on PublicProfile {
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
        }
    `;
  try {
    const response = await fetch(graphqlUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-idp": "iis",
        "Origin": "https://www.salesforce.com",
        "Referer": "https://www.salesforce.com/"
      },
      body: JSON.stringify({
        query,
        variables: { slug, hasSlug: true },
        operationName: "GetTrailheadRank"
      })
    });
    const result = await response.json();
    if (result.errors) {
      console.error("GraphQL Errors:", result.errors);
      throw new Error(result.errors[0].message);
    }
    const stats = result.data.profile?.trailheadStats;
    if (!stats) {
      throw new Error("No trailheadStats found in response");
    }
    return json({
      badges: stats.earnedBadgesCount,
      points: stats.earnedPointsSum.toLocaleString(),
      trails: stats.completedTrailCount,
      rank: stats.rank?.title || "Unknown",
      rankIcon: stats.rank?.imageUrl || ""
    });
  } catch (error) {
    console.error("Error fetching Trailhead data:", error);
    return json({
      badges: 53,
      points: "19,525",
      trails: 5,
      rank: "Mountaineer"
    });
  }
}
export {
  GET
};
