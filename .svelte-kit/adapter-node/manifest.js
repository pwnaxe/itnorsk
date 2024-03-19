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
		client: {"start":"_app/immutable/entry/start.Cwsn7IcS.js","app":"_app/immutable/entry/app.C82O4fUX.js","imports":["_app/immutable/entry/start.Cwsn7IcS.js","_app/immutable/chunks/entry.CGsACfod.js","_app/immutable/chunks/scheduler.CSyhv48i.js","_app/immutable/chunks/index.CfQLiwE_.js","_app/immutable/entry/app.C82O4fUX.js","_app/immutable/chunks/scheduler.CSyhv48i.js","_app/immutable/chunks/index.DODHiEkR.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			{
				id: "/components",
				pattern: /^\/components\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/components/_server.js'))
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