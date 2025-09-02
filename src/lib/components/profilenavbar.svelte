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
			<Icon alt="" src="/sell_icon.svg" href="/profile/sell"/>
		</li>
		<li>
			<Icon alt="" src="/inventory_icon.svg" href="/profile/inventory"/>
		</li>
        <li>
			<Icon alt="" src="/settings_icon.svg" href="/profile/settings"/>
		</li>
	</ul>
</nav>