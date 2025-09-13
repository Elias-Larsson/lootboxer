import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (event) => {
    if (!event.locals.accessToken) {
        throw redirect(302, '/login');
    }
}