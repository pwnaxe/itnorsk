

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.C5sFoiq7.js","_app/immutable/chunks/scheduler.CSyhv48i.js","_app/immutable/chunks/index.DODHiEkR.js","_app/immutable/chunks/IconButton.C1-702Fd.js"];
export const stylesheets = ["_app/immutable/assets/0.BN67xdlS.css"];
export const fonts = [];
