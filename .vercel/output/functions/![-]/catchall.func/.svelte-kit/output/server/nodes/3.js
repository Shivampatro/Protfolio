

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.EaYhfrPv.js","_app/immutable/chunks/DhbHSwer.js","_app/immutable/chunks/DjANNjxS.js"];
export const stylesheets = ["_app/immutable/assets/3.WIa_Vg1K.css"];
export const fonts = [];
