import { defineConfig } from 'histoire';
import { HstSvelte } from '@histoire/plugin-svelte';

export default defineConfig({
	plugins: [HstSvelte()],
	tree: {
		groups: [
			{
				id: 'top',
				title: ''
			}
		]
	}
});
