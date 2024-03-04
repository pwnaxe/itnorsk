import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.l7_D9j8q.js","_app/immutable/chunks/scheduler.ka5iuBU8.js","_app/immutable/chunks/index.buAJKsWr.js","_app/immutable/chunks/IconButton.kF-fElEH.js","_app/immutable/chunks/index.Ym7WIBZn.js"];
export const stylesheets = ["_app/immutable/assets/2.B9522R8U.css"];
export const fonts = [];
