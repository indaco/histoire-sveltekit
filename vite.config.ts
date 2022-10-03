/// <reference types="histoire" />
/// <reference types="vitest" />

import type { UserConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

const config: UserConfig = {
	server: {
		port: process.env.HISTOIRE ? 6006 : 5173
	},
	plugins: [sveltekit()],
	histoire: {
		// Histoire config can also go here
	},
	resolve: {
		alias: {
			$components: path.resolve('./src/lib/components')
		}
	},
	test: {
		// ...
		globals: true,
		reporters: ['dot'],
		silent: true,
		environment: 'jsdom'
	}
};

export default config;
