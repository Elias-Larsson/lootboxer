<script>
	import Navbar from '$lib/components/navbar.svelte';
	import Balance from '$lib/components/balance.svelte';
	import { fly } from 'svelte/transition';
	import Lootbox from '$lib/components/lootbox.svelte'
</script>
<main class="flex flex-col justify-center items-center h-screen p-8">
	<Balance></Balance>
	<div class="flex w-full flex-col items-center justify-center gap-10">
		<div class="flex flex-col items-center gap-10"in:fly={{ y: 200 }} out:fly={{ y: -200 }}>
			<h1 class="font-bold text-slate-50">lootboxer</h1>
			<Lootbox/>
		</div>
		<Navbar href="/open-lootbox" ></Navbar>
	</div>
	
</main>