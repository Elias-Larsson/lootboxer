<script lang="ts">
	import Inputfield from '$lib/components/inputfield.svelte';
	import { login } from '../../hooks.client';

	let email: string = $state("");
	let password: string = $state("");
	let error = $state("");
  let token = $state("");
</script>

<main class="flex h-screen flex-col items-center justify-center">
	<form onsubmit={() => login(email, password)} class="flex flex-col gap-8">
		<Inputfield
			type="email"
			name="email"
			placeholder="email"
			required={true}
			bind:value={email}
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
		<button type="submit">Login</button>
	</form>
	{#if error}
		<p style="color: red">{error}</p>
	{/if}

	{#if token}
		<p style="color: green">You are logged in!</p>
	{/if}
</main>
