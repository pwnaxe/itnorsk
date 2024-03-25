export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt","stormtrooper.dae","Stormtrooper_D.jpg"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.ZNoOX2ND.js","app":"_app/immutable/entry/app.CgGoZAXp.js","imports":["_app/immutable/entry/start.ZNoOX2ND.js","_app/immutable/chunks/entry.BYImSUQ9.js","_app/immutable/chunks/scheduler.DvnNe4Kd.js","_app/immutable/chunks/index.BBVKhZEK.js","_app/immutable/entry/app.CgGoZAXp.js","_app/immutable/chunks/scheduler.DvnNe4Kd.js","_app/immutable/chunks/index.DaSRCPX4.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/components",
				pattern: /^\/components\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/components/_server.js'))
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

export const prerendered = new Set(["/"]);

export const base = "";