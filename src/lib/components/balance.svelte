<script lang="ts">
	import { fly } from 'svelte/transition';
	type Props = {
		money?: number;
	};
	let { money }: Props = $props();
</script>

<div class="flex flex-row text-slate-400 text-xl absolute top-0 p-8"  out:fly={{ y: -200 }}  in:fly={{ y: -200 }}>
    <img alt="balance" src="/coinicon.svg"/>
    <p>{money ? money : 0}</p>
</div>
