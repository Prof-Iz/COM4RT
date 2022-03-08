<script>
	let email = '',
		password = '',
		repeatpassword = '';
</script>

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
