export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["contact/+page.svelte","contact/+server.js","favicon.png","robots.txt"]),
	mimeTypes: {".js":"text/javascript",".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.D2ApCSHq.js","app":"_app/immutable/entry/app.BU0BDjPV.js","imports":["_app/immutable/entry/start.D2ApCSHq.js","_app/immutable/chunks/entry.C8LqNKTe.js","_app/immutable/chunks/scheduler.DEUgoPay.js","_app/immutable/chunks/index.CJdUHvjF.js","_app/immutable/entry/app.BU0BDjPV.js","_app/immutable/chunks/scheduler.DEUgoPay.js","_app/immutable/chunks/index.eqSPwC_h.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		routes: [
			{
				id: "/prices",
				pattern: /^\/prices\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/technology",
				pattern: /^\/technology\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
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