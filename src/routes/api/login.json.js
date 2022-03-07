import supabase from '$lib/db'

async function SignUp() {
    let { user, error } = await supabase.auth.signUp({
        email: 'ibrahimizdhan@gmail.com',
        password: '12345678'
    });
}

export default SignUp;