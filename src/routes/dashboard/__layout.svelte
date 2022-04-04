<script context="module">
	// export const load = async ({ fetch }) => {
	// 	const res = await fetch('/dashboard/view.json');
	// 	const data = await res.json();

	// 	return {
	// 		props: {
	// 			data
	// 		}
	// 	};
	// };
</script>

<script>
	import '../../tailwind.css';
	import { goto } from '$app/navigation';
	import { browser } from '$app/env';

	let user = browser ? window.localStorage.getItem('user') ?? '' : '';
	let is_browser = false;

	$: if (browser) {
		is_browser = true;
	} else {
		is_browser = false;
	}

	function redirect(url) {
		if (is_browser) {
			goto(url);
		}
	}

	async function logOut() {
		const error = await fetch('/api/logout.json', {
			method: 'GET'
		});

		if (error) console.log(error);

		if (is_browser) {
			window.localStorage.clear();
			goto('/login');
		}
	}
</script>

{#if user}
	<div class="mx-auto pt-3 md:pt-5 md:px-10 px-3 justify-center bg-base-300 min-h-screen h-max">
		<div class="navbar bg-base-100 sm:mb-10 shadow-xl rounded-box ">
			<div class="flex-1">
				<a href="/dashboard" class="btn btn-ghost normal-case text-xl">COM4RT PORTAL</a>
			</div>
			<div class="flex-none">
				<p class="md:visible invisible pr-2">{JSON.parse(user)}</p>
				<div class="dropdown dropdown-end">
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label tabindex="0" class="btn btn-ghost btn-circle avatar placeholder bg-[#f87ad2]">
						<div class="md:w-10 w-5 rounded-full ">
							<i class="fas fa-user" />
						</div>
					</label>
					<ul
						tabindex="0"
						class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<a class="btn btn-secondary mb-3" href="https://com4rtbuddy.wixsite.com/com4rt"
								>Help</a
							>
						</li>
						<li><btn class="btn btn-error" on:click|preventDefault={logOut}>Logout</btn></li>
					</ul>
				</div>
			</div>
		</div>

		<slot />
	</div>
{:else}
	{redirect('/login')}
{/if}
