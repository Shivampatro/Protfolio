

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/gallery/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.BNRB9Ymm.js","_app/immutable/chunks/DhbHSwer.js","_app/immutable/chunks/DjANNjxS.js","_app/immutable/chunks/CkbIXKJ3.js"];
export const stylesheets = ["_app/immutable/assets/4.BKD__VQ9.css"];
export const fonts = [];
