<script>
	import '../../tailwind.css';
	import is_authenticated from '$lib/stores/stores';
	import { goto } from '$app/navigation';
	import { browser } from '$app/env';

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

	function logOut() {
		console.log(is_browser);
		if (is_browser) {
			is_authenticated.set(false);
			goto('/login');
		}
	}
</script>

{#if !$is_authenticated}
	{redirect('/login')}
{/if}

{#if $is_authenticated}
	<div class="mx-auto pt-3 md:pt-5 md:px-10 px-3 justify-center bg-base-300 min-h-screen h-max">
		<div class="navbar bg-base-100 sm:mb-10 shadow-xl rounded-box ">
			<div class="flex-1">
				<a href="/dashboard" class="btn btn-ghost normal-case text-xl">COM4RT PORTAL</a>
			</div>
			<div class="flex-none">
				<div class="dropdown dropdown-end">
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label tabindex="0" class="btn btn-ghost btn-circle avatar placeholder bg-[#f87ad2]">
						<div class="w-10 rounded-full ">
							<p class="text-[#000000]">USR</p>
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
{/if}
