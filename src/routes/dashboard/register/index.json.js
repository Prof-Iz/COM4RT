import supabase from '$lib/db';

export async function post(request) {

    let body = request.body;


    const { data, error } = await supabase
        .from('device_detail')
        .insert([
            {
                "name": body.name,
                "location": body.location,
                "version": body.version
            },
        ])




    if (error) {
        return {
            body: {
                status: error
            },
        }
    } else {
        return {
            body: {
                status: "success",
                data
            }
        }
    }
}