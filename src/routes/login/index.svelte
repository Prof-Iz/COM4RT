<script>
	let email = '',
		password = '',
		is_browser = false;

	import { goto } from '$app/navigation';
	import { browser } from '$app/env';
	import { user_auth } from '$lib/stores/auth';

	let user = browser ? window.sessionStorage.getItem('user') ?? '' : '';

	$: if (browser) {
		is_browser = true;
	} else {
		is_browser = false;
	}

	async function logIn() {
		const submit = await fetch('./login.json', {
			method: 'POST',
			body: JSON.stringify({ email, password }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const submitData = await submit.json();

		if (submitData.status == 'error') {
			alert('Wrong Email or Password! Try again.');
			return;
		}
		console.log(submitData);
		user_auth.set(submitData.user);

		if (is_browser) {
			window.sessionStorage.setItem('user', submitData);
			user = browser ? window.sessionStorage.getItem('user') ?? '' : '';
		}
	}

	function redirect(url) {
		if (is_browser) {
			goto(url);
		}
	}
</script>

{#if user}
	{redirect('/dashboard')}
{:else}
	<div class="m-10 flex flex-col items-center">
		<!-- 1st value chg txt size, second value chg height -->
		<h1 class="text-5xl text-cyan mb-3 sm:mb-5 text-bold">Log In</h1>
		<!-- position, background, width, purple is set at tailwind.config.cjs file -->
		<form
			on:submit|preventDefault={logIn}
			class="p-12 card bg-purple lg:l max-w-lg md:w-full max-w-lg sm:w-full max-w-lg"
		>
			<div class="form-control" w-full max-w-lg>
				<label class="label">
					<!-- text-xl, set it to large size -->
					<span class="label-text text-xl">Email</span>
				</label>
				<input
					bind:value={email}
					type="email"
					placeholder="Enter your email here"
					class="input input-bordered input-primary input-md w-full max-w-lg"
				/>
				<label class="label">
					<span class="label-text text-xl">Password</span>
				</label>
				<!-- type is password so that it will hide the text -->
				<input
					bind:value={password}
					type="password"
					placeholder="Enter your password here"
					class="input input-bordered input-primary input-md w-full max-w-lg"
				/>

				<a class="link link-primary ml-1 text-xs">Forgot Password</a>

				<div class="flex w-full">
					<input type="checkbox" checked="checked" class="checkbox checkbox-sm mt-2 ml-1" />
					<div class="divider divider-horizontal" />
					<a class="text mt-1 ml-1">Remember me</a>
				</div>

				<div class="flex w-full justify-center">
					<!-- CHANGE TO FORM -->
					<button
						type="submit"
						on:click|preventDefault={logIn}
						class="btn btn-primary mb-5 xs:btn-xs w-15 sm:btn-md w-15 md:btn-md w-15 lg:btn-md w-60"
						>Submit
					</button>
				</div>
				<div class="flex w-full justify-center">
					<a class="text">Does not have account?</a>
					<div class="divider divider-horizontal" />
					<a href="/signup" class="link link-primary ml-1">Sign-Up</a>
				</div>
			</div>
		</form>
	</div>
{/if}
