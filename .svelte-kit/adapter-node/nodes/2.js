import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.BnocpRud.js","_app/immutable/chunks/scheduler.CSyhv48i.js","_app/immutable/chunks/index.DODHiEkR.js","_app/immutable/chunks/IconButton.C1-702Fd.js","_app/immutable/chunks/index.CfQLiwE_.js"];
export const stylesheets = ["_app/immutable/assets/2.D9vFxdJn.css"];
export const fonts = [];
