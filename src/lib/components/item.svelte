<script lang="ts">
	import { scale } from 'svelte/transition';

	type Props = {
		name: string;
		value: number;
		selected?: boolean;
		preview?: boolean;
	};

	let { name, value, preview, selected }: Props = $props();
	let usePreview = $state(preview);
	let useSelected = $state(selected);
</script>

<div
	class={[
    	{"absolute": usePreview}, 
		{"border-red-500 border-7": useSelected}, 
		"flex h-36 w-44 flex-col items-center justify-center rounded-xl bg-slate-700 text-slate-50"
	]}
>
	<p class="text-xl">{name}</p>
	<div class="flex flex-row">
		<img src="/coinicon.svg" alt="" />
		<p class="text-slate-300">{value}</p>
	</div>
</div>

<style>
	@keyframes popOut {
		to {
			transform: scale(1) translateY(-56px);
            transform-origin: 50% 50%;

		}
	}

	.popout {
		animation: popOut 1000ms ease-in-out 1200ms forwards;
		transform: scale(0.3) translateY(156px);
        transform-origin: 50% 50%;
	}
</style>