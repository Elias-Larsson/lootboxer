<script lang="ts">
    let {value = $bindable(), ...props } = $props();
</script>

<div class="rounded-2xl bg-slate-700 px-4 py-2 text-slate-300">
	<input bind:value={value} {...props} />
</div>
