import TechConstellation from "$lib/components/TechConstellation.svelte";
import fs from 'fs';

export async function GET() {
    try {
        const { html } = TechConstellation.render();
        return new Response(html);
    } catch (e) {
        fs.writeFileSync('C:/Users/shiva/OneDrive/Desktop/portfolio-release/src/routes/api/test_ssr/trace.txt', e.stack);
        return new Response(e.stack, { status: 500 });
    }
}
