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
		client: {"start":"_app/immutable/entry/start.2bFkMT9P.js","app":"_app/immutable/entry/app.71Glk_IW.js","imports":["_app/immutable/entry/start.2bFkMT9P.js","_app/immutable/chunks/entry.s9M3vSDA.js","_app/immutable/chunks/scheduler.ka5iuBU8.js","_app/immutable/chunks/index.Ym7WIBZn.js","_app/immutable/entry/app.71Glk_IW.js","_app/immutable/chunks/scheduler.ka5iuBU8.js","_app/immutable/chunks/index.buAJKsWr.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
