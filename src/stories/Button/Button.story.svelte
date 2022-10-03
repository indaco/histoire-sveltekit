<script lang="ts">
	// the alias fixes lint error 'Hst' is already defined
	import type { Hst as Histoire } from '@histoire/plugin-svelte';
	import { logEvent } from 'histoire/client';
	import { Button } from '$components/Button/index.js';

	export let Hst: Histoire;
	let size = 'medium';
	let mode = 'primary';
	$: primary = mode === 'primary' ? true : false;
</script>

<Hst.Story title="Example/Button">
	<Button label="Button" {size} {primary} on:click={(event) => logEvent('click', event)} />

	<svelte:fragment slot="controls">
		<Hst.Select bind:value={mode} options={['primary', 'secondary']} title="Mode" />
		<Hst.Select bind:value={size} options={['small', 'medium', 'large']} title="Size" />
		<pre>{JSON.stringify({ primary, size }, null, 2)}</pre>
	</svelte:fragment>
</Hst.Story>
