<script>
    import Icon from './iconbutton.svelte';
</script>
<nav class="bg-slate-700 rounded-2xl">
	<ul class="flex flex-row items-center justify-center px-5 py-4 gap-6">
		<li>
			<Icon alt="trade icon" src="/tradeicon.svg" href="/#"/>
		</li>
        <!--Button for lootbox animation-->
		<button><li class="text-xl px-10 py-2 mint-400 rounded-xl">Open Lootbox</li></button>
		<li>
			<Icon alt="hello" src="/profileicon.svg" href="/profile"/>
		</li>
	</ul>
</nav>
