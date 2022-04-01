import supabase from '$lib/db';

export async function post(request) {

    try {

        let body = request.body;




        const { data, error } = await supabase
            .from('device_detail')
            .delete()
            .eq('device_id', body.device_id)





        if (error) {
            return {
                status: 400,
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