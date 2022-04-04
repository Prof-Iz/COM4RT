import supabase from "$lib/db"

// Log data when sent by an Arduino POST REQ

export async function post(request) {

    let json = request.body;


    const { error } = await supabase
        .from('test_log')
        .insert([
            {
                device_id: json['device_id'],
                temp: json.temp,
                humidity: json.humidity,
                owner_email: json.email
            }
        ],
            { returning: 'minimal' })



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

        }
    }
}