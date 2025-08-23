<script lang="ts">
	type Props = {
		money?: number;
	};
	let { money }: Props = $props();
</script>

<div class="flex flex-row text-slate-400 text-xl absolute top-0 p-8">
    <img alt="balance" src="coinicon.svg"/>
    <p>{money ? money : 0}</p>
</div>
