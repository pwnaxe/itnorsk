const manifest = (() => {
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
		client: {"start":"_app/immutable/entry/start.uzp4yS2s.js","app":"_app/immutable/entry/app.i7fSbOZ9.js","imports":["_app/immutable/entry/start.uzp4yS2s.js","_app/immutable/chunks/entry.QnR8RkBp.js","_app/immutable/chunks/scheduler.r29ZSyza.js","_app/immutable/chunks/index.bqecsoYB.js","_app/immutable/entry/app.i7fSbOZ9.js","_app/immutable/chunks/scheduler.r29ZSyza.js","_app/immutable/chunks/index.9vqZ6Hws.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-xyxWQQWo.js')),
			__memo(() => import('./chunks/1-X3C2sAuN.js'))
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

const prerendered = new Set(["/"]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
