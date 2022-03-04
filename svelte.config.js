import adapter from '@sveltejs/adapter-auto';

const production = process.env.NODE_ENV === 'production';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			optimizeDeps: {
				include: ['svelte-apexcharts', 'apexcharts'],
			},
			// ssr: {
			// 	noExternal: [production && '@svelte-apexcharts'].filter(Boolean),
			// },
		},
	}
};

export default config;
