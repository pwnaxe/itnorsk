import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.ARxy5_DT.js","_app/immutable/chunks/scheduler.r29ZSyza.js","_app/immutable/chunks/index.vAmFYpgg.js","_app/immutable/chunks/IconButton.vY9gbxth.js","_app/immutable/chunks/entry.NTi4k8Hg.js"];
export const stylesheets = ["_app/immutable/assets/2.G262tGMg.css"];
export const fonts = [];
