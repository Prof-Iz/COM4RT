<script>
	let email = '',
		password = '',
		repeatpassword = '',
		is_browser = false;

	import { goto } from '$app/navigation';
	import { browser } from '$app/env';

	let user = browser ? window.sessionStorage.getItem('user') ?? '' : '';

	$: if (browser) {
		is_browser = true;
	} else {
		is_browser = false;
	}

	async function signUp() {
		if (repeatpassword != password && password.length < 8) {
			alert('Password not Correct');
			return;
		}

		const submit = await fetch('./signup.json', {
			method: 'POST',
			body: JSON.stringify({ email, password }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const submitData = await submit.json();
		if (submitData.status == 'error') {
			alert('Unable to Create an account');
			return;
		}

		alert(
			'Account Created Successfully, activate your account by clicking on the link sent to your email'
		);

		redirect('/login');
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
		<h1 class="text-5xl text-cyan mb-5">Sign Up</h1>
		<!-- position, background, width, purple is set at tailwind.config.cjs file -->
		<div class="p-12 card bg-purple lg:l max-w-lg md:w-full max-w-lg sm:w-full max-w-lg">
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
				<label class="label">
					<span class="label-text text-xl">Re-Password</span>
				</label>
				<input
					bind:value={repeatpassword}
					type="password"
					placeholder="Enter your password again here"
					class="input input-bordered input-primary input-md w-full max-w-lg"
				/>
				<div class="flex w-full justify-center">
					<button
						on:click={signUp}
						class="btn btn-primary mt-7 mb-5 xs:btn-xs w-15 sm:btn-md w-15 md:btn-md w-15 lg:btn-md w-60"
						>Create Account
					</button>
				</div>
				<div class="flex w-full justify-center">
					<a class="text">Already have account?</a>
					<div class="divider divider-horizontal" />
					<a href="/login" class="link link-primary">Sign-In</a>
				</div>
			</div>
		</div>
	</div>
{/if}
