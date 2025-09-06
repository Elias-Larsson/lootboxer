const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL!;

export const login = async (email: string, password: string) => {
	try {
		const res = await fetch(`${VITE_BACKEND_URL}/api/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email, password })
		});

		if (!res.ok) {
			throw new Error('Login failed');
		}
		const data = await res.json();
        console.log(data)
		const token = data.accessToken;
		console.log('Logged in! Token:', token);

		// Save token to localStorage so it persists
		localStorage.setItem('accessToken', token);
	} catch (err: unknown) {
		console.error('fetch failed:', err);
	}
};
