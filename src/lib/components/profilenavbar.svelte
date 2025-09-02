<script lang="ts">
	import { Settings, DollarSign, Archive } from '@lucide/svelte';
    import Icon from './iconbutton.svelte';
</script>
<nav class="bg-slate-700 rounded-2xl">
	<ul class="flex flex-row items-center justify-center px-5 py-4 gap-6">
		<li>
			<Icon href="/#" icon={DollarSign}/>
		</li>
		<li>
			<Icon href="/profile" icon={Archive}/>
		</li>
        <li>
			<Icon href="/profile" icon={Settings}/>
		</li>
	</ul>
</nav>