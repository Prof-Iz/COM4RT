import supabase from '$lib/db';





export async function post(request) {

    try {

        let body = request.body;


        const { data, error } = await supabase
            .from('device_detail')
            .insert([
                {
                    "name": body.name,
                    "location": body.location,
                    "version": body.type,
                    "owner_email": body.email,
                },
            ])




        if (error) {
            return {
                status: 403,
                body: {
                    error
                },
            }
        } else {
            return {
                status: 200,
                body: {
                    data
                }
            }
        }
    } catch (err) {
        return {
            status: 500,
            body: {
                err
            }
        }
    }
}