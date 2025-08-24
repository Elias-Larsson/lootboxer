<script lang="ts">
    import Icon from './iconbutton.svelte';
	import Button from '$lib/components/button.svelte'
	import { fly } from 'svelte/transition';
	type Props = {
		href: string;
	}
	let { href }: Props = $props();
</script>
<nav class="bg-slate-700 rounded-2xl" out:fly={{ x: 500 }}>
	<ul class="flex flex-row items-center justify-center px-5 py-4 gap-6">
		<li>
			<Icon alt="trade icon" src="/tradeicon.svg" href="/#"/>
		</li>
        <!--Button for lootbox animation-->
		<Button {href} --parent-color="var(--color-slate-700)">Open Lootbox</Button>
		<li>
			<Icon alt="hello" src="/profileicon.svg" href="/profile"/>
		</li>
	</ul>
</nav>