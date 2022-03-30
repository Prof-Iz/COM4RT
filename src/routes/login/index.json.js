import supabase from "$lib/db";

const constructCookies = (session) => {
    let cookieOptions = `Path=/;HttpOnly;Secure;SameSite=Strict;Expires=${new Date(session.expires_at * 1000).toUTCString()};`

    return {
        refresh_token: `refresh_token=${session.refresh_token};${cookieOptions}`,
        access_token: `access_token=${session.access_token};${cookieOptions}`,
        expires_at: `expires_at=${session.expires_at};${cookieOptions}`
    }
}

export async function post(request) {

    let body = request.body;

    let { session, error } = await supabase.auth.signIn({
        email: body.email,
        password: body.password
    })

    let {
        refresh_token,
        access_token,
        expires_at
    } = constructCookies(session)

    if (error) {
        return {
            body: {
                status: "error"
            },
        }
    } else {
        return {
            body: {
                status: "success",
                user: session.user,
                session
            },
            headers: {
                'set-cookie': [
                    refresh_token,
                    access_token,
                    expires_at
                ],
                location: '/dashboard'
            }
        }
    }
}