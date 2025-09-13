<script lang="ts">
    let {value = $bindable(), ...props } = $props();
</script>

<div class="rounded-2xl bg-slate-700 px-4 py-2 text-slate-300">
	<input bind:value={value} {...props} />
</div>

<style>
    input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px var(--color-slate-700) inset !important;
}
</style>
