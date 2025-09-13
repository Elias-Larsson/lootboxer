import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL!;

export const actions = {
	default: async (event) => {
		try {
			const formData = await event.request.formData();
			const email = formData.get('email') as string;
			const password = formData.get('password') as string;

			if (!email || !password) {
				return fail(400, { error: 'Email and password are required' });
			}

			const res = await fetch(`${VITE_BACKEND_URL}/api/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ email, password })
			}); 

			const data = await res.json();

			if (!res.ok) {
				console.error('Backend error:', data.message);
				return fail(400, {
					error: data.message || 'Invalid email or password'
				});
			}

			event.cookies.set('accessToken', data.accessToken, {
				path: '/',
				httpOnly: true,
				secure: import.meta.env.NODE_ENV === 'production',
				sameSite: 'strict',
				maxAge: 60 * 60 * 24 * 7
			});
		} catch (err: unknown) {
			console.error('Exception during fetch/JSON parse:', err);
			return fail(500, { error: 'Something went wrong. Please try again.' });
		}
		redirect(303, '/');
	}
} satisfies Actions;
