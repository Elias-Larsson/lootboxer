import { redirect } from '@sveltejs/kit';
import type { Handle } from '@sveltejs/kit';

const PROTECTED_PATHS = ['/profile', '/open-lootbox']; 

export const handle: Handle = async ({ event, resolve }) => {
    const token = event.cookies.get('accessToken');
    const isProtected = PROTECTED_PATHS.some(path => event.url.pathname.startsWith(path));
    if (isProtected && !token) {
        throw redirect(302, '/login');  
    }
    event.locals.accessToken = token || null;
    return resolve(event);
};
