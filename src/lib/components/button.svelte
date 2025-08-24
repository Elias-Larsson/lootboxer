<script lang="ts">
	import type { Snippet } from 'svelte';
	type Button = {
		onclick: () => void;
		href?: never;
	};
	type Link = {
		href: string;
		onclick?: never;
	};
	type Props = {
		children: Snippet;
	} & (Button | Link);
	let { onclick, href, children }: Props = $props();
</script>

{#if onclick}
	<button {onclick} class="button">
		<span>
			{@render children()}
		</span>
	</button>
{:else}
	<a {href} class="button">
		<span>
			{@render children()}
		</span>
	</a>
{/if}

<style>
	.button {
		position: relative;
		overflow: hidden;
		border: 2px solid var(--mint-400);
		background: var(--mint-400);
		padding: 0.5rem 2.5rem;
		border-radius: 0.75rem;
		font-size: 20px;
		cursor: pointer;
	}

	.button:hover {
		transition: 300ms ease-in-out;

		color: var(--mint-400);
	}

	.button::before {
		content: '';
		position: absolute;
		inset: 0;
		background-color: var(--parent-color, #1e293b);
		transform: scale(0);
		transform-origin: 50% 50%;
		transition: transform 150ms cubic-bezier(0, 0, 0, 0.8);
		z-index: 1;
		border-radius: 0.5rem;
	}
	span {
		position: relative;
		z-index: 2;
	}
	.button:hover::before {
		transform: scale(1);
	}
</style>
