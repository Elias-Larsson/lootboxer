<script lang="ts">
    import Icon from './iconbutton.svelte';
	import Button from '$lib/components/button.svelte'
	import { fly } from 'svelte/transition';
	import { User, ArrowLeftRight} from '@lucide/svelte'

	type Props = {
		href: string;
	}
	let { href }: Props = $props();
</script>
<nav class="bg-slate-700 rounded-2xl" out:fly={{ y: 200 }} >
	<ul class="flex flex-row items-center justify-center px-5 py-4 gap-6">
		<li>
			<Icon href="/#" icon={ArrowLeftRight}/>
		</li>
		<Button {href} --parent-color="var(--color-slate-700)">Open Lootbox</Button>
		<li>
			<Icon href="/profile" icon={User}/>
		</li>
	</ul>
</nav>