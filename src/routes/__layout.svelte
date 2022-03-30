<script>
	import supabase from '$lib/db';
	import { onMount } from 'svelte';
	import { session } from '$app/stores';

	onMount(() => {
		const { data: authListener } = supabase.auth.onAuthStateChange(async (event, sess) => {
			const res = await fetch('/auth.json', {
				method: 'POST',
				headers: new Headers({ 'Content-Type': 'application/json' }),
				credentials: 'same-origin',
				body: JSON.stringify({ event, session: sess })
			});
			if (res.ok) {
				const json = await res.json();
				$session = json;
				goto('/login');
			}
		});
		return () => {
			authListener.unsubscribe();
		};
	});
</script>

<slot />
