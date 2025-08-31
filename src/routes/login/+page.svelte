<script lang=ts>
	import Button from "$lib/components/button.svelte";
	import Inputfield from "$lib/components/inputfield.svelte";

</script>

<main class="flex flex-col justify-center items-center h-screen">
    <form method="POST" action="?/login">
        <Inputfield type="text" id="username" name="username" value="username"/>
    </form >
</main>


