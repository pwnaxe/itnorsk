

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.48I-II5I.js","_app/immutable/chunks/scheduler.r29ZSyza.js","_app/immutable/chunks/index.vAmFYpgg.js","_app/immutable/chunks/IconButton.vY9gbxth.js"];
export const stylesheets = ["_app/immutable/assets/0.O5-S7PSb.css"];
export const fonts = [];
