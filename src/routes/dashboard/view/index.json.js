import supabase from "$lib/db"

// Fetch data given device ID

export async function get() {

    let { data: device_detail, error } = await supabase
        .from('device_detail')
        .select("*")



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
                status: device_detail
            }
        }
    }
}