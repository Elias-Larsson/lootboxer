<script lang="ts">
	import Balance from "$lib/components/balance.svelte";
    import Button from "$lib/components/button.svelte"
	import Item from "$lib/components/item.svelte"
	import Profilenavbar from "$lib/components/profilenavbar.svelte";
    function fn() {
        console.log("HEY")
    }
</script>
<main class="flex flex-col justify-center items-center h-screen gap-10">
    <Balance/>
    <Profilenavbar />
    <Item name="sword" value={2300}></Item>
</main>