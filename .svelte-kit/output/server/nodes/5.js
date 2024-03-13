

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/technology/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.aze3JOcK.js","_app/immutable/chunks/scheduler.r29ZSyza.js","_app/immutable/chunks/index.vAmFYpgg.js"];
export const stylesheets = [];
export const fonts = [];
