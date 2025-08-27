<script lang="ts">
    import Button from "$lib/components/button.svelte"
	import Item from "$lib/components/item.svelte"
    function fn() {
        console.log("HEY")
    }
</script>
<main class="flex justify-center items-center h-screen">
    <Button onclick={fn}>Profile</Button>
    <Item rarity="lol" name="sword" value={2300}></Item>
</main>