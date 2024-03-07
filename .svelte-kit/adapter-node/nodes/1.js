

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.xc0fx2cB.js","_app/immutable/chunks/scheduler.r29ZSyza.js","_app/immutable/chunks/index.vAmFYpgg.js","_app/immutable/chunks/entry.NTi4k8Hg.js"];
export const stylesheets = [];
export const fonts = [];
