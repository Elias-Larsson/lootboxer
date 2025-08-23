<script>
	import Navbar from '$lib/components/navbar.svelte';
	import Balance from '$lib/components/balance.svelte'
</script>
<main class="flex flex-col justify-center items-center h-screen p-8">
	<Balance></Balance>
	<div class="flex w-full flex-col items-center justify-center gap-10 ">
		<h1 class="font-bold text-slate-50">lootboxer</h1>
		<img alt="Lootbox" src="/lootbox.svg"/>
		<Navbar></Navbar>
	</div>
</main>
