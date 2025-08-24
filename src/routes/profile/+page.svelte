<script lang="ts">
    import Button from "$lib/components/button.svelte"

    function fn() {
        console.log("HEY")
    }
</script>
<main class="flex justify-center items-center h-screen">
    <Button onclick={fn}>Profile</Button>
</main>