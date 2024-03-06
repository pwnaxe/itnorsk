

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.axKcBBvW.js","_app/immutable/chunks/scheduler.ka5iuBU8.js","_app/immutable/chunks/index.sHaYHqK-.js"];
export const stylesheets = [];
export const fonts = [];
