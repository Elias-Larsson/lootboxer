// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
			accessToken: string | null;
			user?: { id: string; email: string, name: string }; 
		}
	}
}

export {};
