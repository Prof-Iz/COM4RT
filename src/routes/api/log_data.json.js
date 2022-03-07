import supabase from "$lib/db"

// Log data when sent by an Arduino PUT REQ

export async function post(request) {

    let json = request.body;

    const { data, error } = await supabase
        .from('test_log')
        .insert([
            {
                device_id: json['device_id'],
                temp: json.temp,
                humidity: json.humidity
            },
        ])


    if (error) {
        return {
            body: {
                status: "error"
            },
        }
    } else {
        return {
            body: {
                status: 200
            }
        }
    }
}