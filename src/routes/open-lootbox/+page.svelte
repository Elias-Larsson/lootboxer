<script lang="ts">
	import Lootbox from '$lib/components/lootbox.svelte';
	import Item from '$lib/components/item.svelte'
	import Button from '$lib/components/button.svelte';
	import { fly, fade } from 'svelte/transition';
</script>

<main class="flex flex-col h-screen items-center justify-around">
	<div class="flex flex-col items-center" out:fade>
		<Item name="sword" value={120} rarity="cool" preview={true}/>
		<Lootbox preview={true}/>
	</div>
	<div class="pt-104 absolute" out:fly={{y: 200}}>
		<Button href="/">Claim Item</Button>
	</div>
</main>

