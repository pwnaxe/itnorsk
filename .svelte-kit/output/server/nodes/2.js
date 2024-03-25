import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.Cezg8Zz4.js","_app/immutable/chunks/scheduler.DvnNe4Kd.js","_app/immutable/chunks/index.DaSRCPX4.js","_app/immutable/chunks/IconButton.BONeI0TB.js","_app/immutable/chunks/index.BBVKhZEK.js"];
export const stylesheets = ["_app/immutable/assets/2.C4van15i.css"];
export const fonts = [];
