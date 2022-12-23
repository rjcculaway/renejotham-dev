import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	ssr: {
		noExternal: ['three', 'troika-three-text']
	},
	resolve: {
		alias: {
			components: './src/components'
		}
	}
};

export default config;
