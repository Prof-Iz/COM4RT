import supabase from "$lib/db";

export async function post(request) {

    let body = request.body;

    let { user, error } = await supabase.auth.signUp({
        email: body.email,
        password: body.password
    })

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
                user
            }
        }
    }
}