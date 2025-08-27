<script lang="ts">
	import { scale } from 'svelte/transition';

	type Props = {
		rarity: string;
		name: string;
		value: number;
		selected?: boolean;
		preview?: boolean;
	};

	let { rarity, name, value, preview, selected }: Props = $props();

	let previewProperties = preview ? 'absolute inset-0 flex items-center justify-center' : '';
	let selectedProperties = selected ? 'border border-red-500 border-7' : '';
</script>

<section class="{previewProperties} {preview ? 'popout' : ''}">
	<div
		class="flex h-36 w-44 flex-col items-center justify-center rounded-xl bg-slate-700 text-slate-50 {selectedProperties}"
	>
		<p class="text-xl">{name}</p>
		<div class="flex flex-row">
			<p class="text-slate-300">{value}</p>
			<img src="coinicon.svg" alt="coin" />
		</div>
	</div>
</section>

<style>
	@keyframes popOut {
		to {
			transform: scale(1) translateY(-56px);
		}
	}

	.popout {
		animation: popOut 1500ms ease-in-out 1000ms forwards;
        transform: scale(0) translateY(300px);
	}
</style>
