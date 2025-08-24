<script>
	import Navbar from '$lib/components/navbar.svelte';
	import Balance from '$lib/components/balance.svelte';
	import { fade, fly } from 'svelte/transition';
	import Lootbox from '$lib/components/lootbox.svelte'
</script>
<main class="flex flex-col justify-center items-center h-screen p-8 overflow-hidden">
	<Balance></Balance>
	<div class="flex w-full flex-col items-center justify-center gap-10 overflow-hidden" in:fly={{ y: 200 }}>
		<h1 class="font-bold text-slate-50" out:fly={{ x: -500 }}>lootboxer</h1>
		<Lootbox/>
		<Navbar href="/open-lootbox" ></Navbar>
	</div>
	
</main>
