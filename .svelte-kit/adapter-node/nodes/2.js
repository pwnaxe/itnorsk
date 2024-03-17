import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.WsIIBJPc.js","_app/immutable/chunks/scheduler.DEUgoPay.js","_app/immutable/chunks/index.eqSPwC_h.js","_app/immutable/chunks/IconButton.PiU9kw6D.js","_app/immutable/chunks/SmuiElement.DwdDMu6I.js","_app/immutable/chunks/index.CJdUHvjF.js","_app/immutable/chunks/Button.D4Nmw8Gq.js"];
export const stylesheets = ["_app/immutable/assets/2.mOkcxzSK.css"];
export const fonts = [];
