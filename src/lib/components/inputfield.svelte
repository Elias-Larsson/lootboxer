<script lang="ts">
	import type { Snippet } from "svelte";
    type Props = {
        children: Snippet
    }

let { ...props } = $props()
</script>

<div class="bg-slate-700 rounded-xl">
    <input {...props}/>
</div>