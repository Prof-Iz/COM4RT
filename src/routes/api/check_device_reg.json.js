import supabase from "$lib/db"

export async function post(request) {
    let json = request.body;

    let { data: device_detail, error } = await supabase
        .from('device_detail')
        .select('buddy_uuid')
        .eq('buddy_uuid', json.generated);

    if (error) {
        return {
            body: {
                error: error
            }
        }
    } else {
        return {
            body: { status: device_detail }
        }
    }



}