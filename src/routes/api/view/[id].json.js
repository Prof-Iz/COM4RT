import supabase from "$lib/db"


// Fetch data given device ID

export async function get({ params }) {

    let device_id = params.id;

    let { data: test_log, error } = await supabase
        .from('test_log')
        .select('logged_at,temp,humidity')
        .eq('device_id', device_id)


    if (error) {
        return {
            status: 400,
        }
    } else {
        return {
            status: 200,
            body: {
                points: test_log,
            }
        }
    }
}