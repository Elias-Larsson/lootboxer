import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL!;
export const actions = {
	default: async (event) => {
		try {
			const formData = await event.request.formData();
			const email = formData.get('email') as string;
			const password = formData.get('password') as string;
			const name = formData.get('name') as string;
			if (!email || !password || !name) {
				return fail(400, { error: 'All fields are required' });
			}
			const res = await fetch(`${VITE_BACKEND_URL}/api/profile`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ email, password, name })
			});
			let data;
			try {
				data = await res.json();
			} catch {
				data = { message: await res.text() };
			}
			if (typeof data === 'string') {
				data = { message: data };
			}
			if (!res.ok) {
				return fail(400, {
					error: data.message || 'Failed to create profile'
				});
			}
		} catch (err: unknown) {
			return fail(500, {
				error: 'Something went wrong. Please try again.'
			});
		}
		redirect(303, '/login');
	}
} satisfies Actions;
