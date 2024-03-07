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
		client: {"start":"_app/immutable/entry/start.c1vp6jFp.js","app":"_app/immutable/entry/app.nOMZ76mH.js","imports":["_app/immutable/entry/start.c1vp6jFp.js","_app/immutable/chunks/entry.6XKDhHPf.js","_app/immutable/chunks/scheduler.r29ZSyza.js","_app/immutable/chunks/index.bqecsoYB.js","_app/immutable/entry/app.nOMZ76mH.js","_app/immutable/chunks/scheduler.r29ZSyza.js","_app/immutable/chunks/index.9vqZ6Hws.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
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
