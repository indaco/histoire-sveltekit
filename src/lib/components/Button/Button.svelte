<script lang="ts">
	import './button.css';
	import { createEventDispatcher } from 'svelte';
	/**
	 * Is this the principal call to action on the page?
	 */
	export let primary = false;

	/**
	 * What background color to use
	 */
	export let backgroundColor = '';
	/**
	 * How large should the button be?
	 */
	export let size = 'medium';
	/**
	 * Button contents
	 */
	export let label = '';

	$: mode = primary ? 'historie-button--primary' : 'historie-button--secondary';

	let style = backgroundColor ? `background-color: ${backgroundColor}` : '';

	const dispatch = createEventDispatcher();

	/**
	 * Optional click handler
	 */
	function onClick(event: MouseEvent) {
		dispatch('click', event);
	}
</script>

<button
	type="button"
	class={['historie-button', `historie-button--${size}`, mode].join(' ')}
	{style}
	on:click={onClick}
>
	{label}
</button>
