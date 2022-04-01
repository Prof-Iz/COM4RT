import supabase from '$lib/db'
import cookie from 'cookie';
// Fetch data given device ID


export const get = async (request) => {
    let cookies = cookie.parse(request.headers.cookie || '');

    const { error } = await supabase.auth.api.signOut(cookies.access_token);

    return {
        headers: {
            'set-cookie': 'access_token=deleted; path=/login; expires=Thu, 01 Jan 1970 00:00:00 GMT'
        },
        body: {
            error
        }
    }
};