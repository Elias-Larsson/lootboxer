import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL!;

export const actions = {
	default: async (event) => {
		try {
            const formData = await event.request.formData()
            const email = formData.get("email")
            const password = formData.get("password")
            const name = formData.get("name")
			const res = await fetch(`${VITE_BACKEND_URL}/api/profile`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ email, password, name })
			});
			const data = await res.json();

            console.log(data.message);
			if (!res.ok) {
				return fail(404, { missing: true })
			}
		} catch (err: unknown) {
            console.error('fetch failed:', err);
		}
        redirect(303, '/login');   
	}
} satisfies Actions;
