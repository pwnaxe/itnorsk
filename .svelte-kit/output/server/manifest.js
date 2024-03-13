export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.steLW0YX.js","app":"_app/immutable/entry/app.9P18Pj4t.js","imports":["_app/immutable/entry/start.steLW0YX.js","_app/immutable/chunks/entry.015qCRD0.js","_app/immutable/chunks/scheduler.r29ZSyza.js","_app/immutable/chunks/index.bqecsoYB.js","_app/immutable/entry/app.9P18Pj4t.js","_app/immutable/chunks/scheduler.r29ZSyza.js","_app/immutable/chunks/index.vAmFYpgg.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
