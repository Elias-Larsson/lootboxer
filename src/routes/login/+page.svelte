<script lang="ts">
	import Inputfield from '$lib/components/inputfield.svelte';
	import { login } from '../../hooks.client';

	let email: string = $state("");
	let password: string = $state("");
	let error = $state("");
  let token = $state("");

	// async function login() {
	// 	try {
	// 		const res = await fetch('http://localhost:3001/api/login', {
	// 			method: 'POST',
	// 			headers: {
	// 				'Content-Type': 'application/json'
	// 			},
	// 			body: JSON.stringify({ email, password })
	// 		});

	// 		if (!res.ok) {
	// 			error = 'login failed';
	// 			throw new Error('Login failed');
	// 		}

	// 		const data = await res.json();
	// 		token = data.accessToken; // backend should send { accessToken: "..." }
	// 		console.log('Logged in! Token:', token);

	// 		// Save token to localStorage so it persists
	// 		localStorage.setItem('accessToken', token);
	// 	} catch (err: unknown) {
	// 		error = 'server error';
	// 		console.error('fetch failed:', err);
	// 	}
	// }
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
