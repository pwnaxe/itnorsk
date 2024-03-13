

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/prices/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.cOK1YUQD.js","_app/immutable/chunks/scheduler.r29ZSyza.js","_app/immutable/chunks/index.vAmFYpgg.js"];
export const stylesheets = [];
export const fonts = [];
