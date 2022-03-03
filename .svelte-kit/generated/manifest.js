const c = [
	() => import("..\\runtime\\components\\layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\dashboard\\__layout.svelte"),
	() => import("..\\..\\src\\routes\\dashboard\\index.svelte"),
	() => import("..\\..\\src\\routes\\dashboard\\view\\[id].svelte"),
	() => import("..\\..\\src\\routes\\logout\\__layout.svelte"),
	() => import("..\\..\\src\\routes\\logout\\index.svelte"),
	() => import("..\\..\\src\\routes\\signup\\__layout.svelte"),
	() => import("..\\..\\src\\routes\\signup\\index.svelte"),
	() => import("..\\..\\src\\routes\\login\\__layout.svelte"),
	() => import("..\\..\\src\\routes\\login\\index.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/dashboard/index.svelte
	[/^\/dashboard\/?$/, [c[0], c[3], c[4]], [c[1]]],

	// src/routes/dashboard/view/[id].svelte
	[/^\/dashboard\/view\/([^/]+?)\/?$/, [c[0], c[3], c[5]], [c[1]], (m) => ({ id: d(m[1])})],

	// src/routes/logout/index.svelte
	[/^\/logout\/?$/, [c[0], c[6], c[7]], [c[1]]],

	// src/routes/signup/index.svelte
	[/^\/signup\/?$/, [c[0], c[8], c[9]], [c[1]]],

	// src/routes/login/index.svelte
	[/^\/login\/?$/, [c[0], c[10], c[11]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];