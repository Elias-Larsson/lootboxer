<script lang="ts">
    import Icon from './iconbutton.svelte';
	import { fly } from 'svelte/transition';
	// type Props = {
	// 	href: string;
	// }
	// let { href }: Props = $props();
</script>
<nav class="bg-slate-700 rounded-2xl">
	<ul class="flex flex-row items-center justify-center px-5 py-4 gap-6">
		<li>
			<Icon alt="trade icon" src="/sell_icon.svg" href="/#"/>
		</li>
		<li>
			<Icon alt="hello" src="/inventory_icon.svg" href="/profile"/>
		</li>
        <li>
			<Icon alt="hello" src="/settings_icon.svg" href="/profile"/>
		</li>
	</ul>
</nav>