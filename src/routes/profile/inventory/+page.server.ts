import type { PageData } from '../$types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, cookies }): Promise<PageData> => {
  const accessToken = cookies.get('accessToken');
  const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL!;

  try {
    const response = await fetch(`${VITE_BACKEND_URL}/api/user`, {
      headers: {
        'authorization': `Bearer ${accessToken}`
      }
    });

    if (!response.ok) {
      console.log(accessToken, response)
      throw new Error('Failed to fetch user: ' + response.statusText);
    }

    const user = await response.json();
    return { user };
  } catch (error) {
    return { error: error instanceof Error ? error.message : 'Unknown error' };
  }
};