<script lang=ts>
	import Balance from '$lib/components/balance.svelte';
import Profilenavbar from '$lib/components/profilenavbar.svelte';

    let { children } = $props();
</script>

<main class="flex flex-col justify-center items-center h-screen gap-10">
    <Balance/>
    <div class="p-16 bg-green-300 rounded-full">
        <img src="/profileicon.svg" alt="profile"/>
    </div>
    <Profilenavbar />
{@render children?.()}
</main>