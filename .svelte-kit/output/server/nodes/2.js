import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.FHcaoiYY.js","_app/immutable/chunks/scheduler.r29ZSyza.js","_app/immutable/chunks/index.9vqZ6Hws.js","_app/immutable/chunks/IconButton.VhrfGem1.js","_app/immutable/chunks/index.bqecsoYB.js"];
export const stylesheets = ["_app/immutable/assets/2.G262tGMg.css"];
export const fonts = [];
