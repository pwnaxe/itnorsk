

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.CgNjTsXM.js","_app/immutable/chunks/scheduler.DvnNe4Kd.js","_app/immutable/chunks/index.DaSRCPX4.js"];
export const stylesheets = ["_app/immutable/assets/3.BWYe3gHr.css"];
export const fonts = [];
