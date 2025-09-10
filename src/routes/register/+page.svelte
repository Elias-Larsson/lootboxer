<script lang="ts">
	import { enhance } from '$app/forms';
	import Inputfield from '$lib/components/inputfield.svelte';
	import type { PageProps } from './$types';

	let { form }: PageProps = $props();

	let email: string = $state("");
	let password: string = $state("");
	let name: string = $state("");
	let error = $state("");
  let token = $state("");
</script>

<main class="flex h-screen flex-col items-center justify-center">
	<form method="POST" use:enhance class="flex flex-col gap-8">
			{#if form?.missing}
			<p style="color: red">{error}</p>
		{/if}
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
		<button>Login</button>
	</form>
	{#if error}
		<p style="color: red">{error}</p>
	{/if}

	{#if token}
		<p style="color: green">You are logged in!</p>
	{/if}
</main>
