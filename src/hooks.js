import cookie from 'cookie';
import supabase from '$lib/db';

export const handle = async ({ request, resolve }) => {
    let cookies = cookie.parse(request.headers.cookie || '')
    if (cookies.access_token) {
        supabase.auth.setAuth(cookies.access_token);
        let { user } = await supabase.auth.api.getUser(cookies.access_token)
        request.locals.user = user || false;
    }

    let response = await resolve(request)
    return response
}

export const getSession = async (request) => {
    return request.locals
}