<script lang="ts">
	import { Settings, DollarSign, Archive } from '@lucide/svelte';
    import Icon from './iconbutton.svelte';
</script>
<nav class="bg-slate-700 rounded-2xl">
	<ul class="flex flex-row items-center justify-center px-5 py-4 gap-6">
		<li>
			<Icon href="/profile/sell" icon={DollarSign}/>
		</li>
		<li>
			<Icon href="/profile/inventory" icon={Archive}/>
		</li>
        <li>
			<Icon href="/profile/settings" icon={Settings}/>
		</li>
	</ul>
</nav>