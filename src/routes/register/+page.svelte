<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$lib/components/button.svelte';
	import Inputfield from '$lib/components/inputfield.svelte';
	import type { PageProps } from './$types';

	let { form }: PageProps = $props();

	let email: string = $state("");
	let password: string = $state("");
	let name: string = $state("");
</script>

<main class="flex h-screen flex-col items-center justify-center">
	<form method="POST" use:enhance class="flex flex-col gap-8">
		<Inputfield
			type="email"
			name="email"
			placeholder="email"
			required={true}
			bind:value={email}
			class="outline-none"
		/>
		<Inputfield
			type="name"
			name="name"
			placeholder="name"
			required={true}
			bind:value={name}
			class="outline-none"
		/>
		<Inputfield
			type="password"
			name="password"
			placeholder="password"
			required={true}
			bind:value={password}
			class="outline-none"
		/>
		<Button onclick={() => null}>register</Button>
	</form>
	<a href="/login" class="underline text-slate-50 mt-8">Already have an account?</a>
	{#if form?.error}
		<p class="bg-red-400 rounded-xl py-4 px-6 mt-12">{form.error}</p>
	{/if}

</main>
