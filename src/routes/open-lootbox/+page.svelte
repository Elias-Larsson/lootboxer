<script lang="ts">
	import Lootbox from '$lib/components/lootbox.svelte';
	import Item from '$lib/components/item.svelte'
</script>

<main class="flex h-screen items-center justify-center">
	<Item name="sword" value={120} rarity="cool" preview={true} selected={true}/>
	<Lootbox preview={true}/>
</main>

