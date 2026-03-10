export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".gitignore","blob.svg","favicon.png","global.css","layer.svg","links.txt","logo.png","pointer.svg","projects.txt","public.txt","resume.pdf","robots.txt","tech.txt","wave.svg"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".css":"text/css",".txt":"text/plain",".pdf":"application/pdf"},
	_: {
		client: {start:"_app/immutable/entry/start.CRLzdu21.js",app:"_app/immutable/entry/app.BoQJsvJC.js",imports:["_app/immutable/entry/start.CRLzdu21.js","_app/immutable/chunks/BVYRuaiR.js","_app/immutable/chunks/CSPQ9qK_.js","_app/immutable/entry/app.BoQJsvJC.js","_app/immutable/chunks/CSPQ9qK_.js","_app/immutable/chunks/DTfm9XCx.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/contact",
				pattern: /^\/api\/contact\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/contact/_server.js'))
			},
			{
				id: "/links",
				pattern: /^\/links\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
