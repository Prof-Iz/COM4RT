<script>
	import '../../tailwind.css';
</script>

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
					<li><a href="google.com">Help</a></li>
					<li><a href="/login">Logout</a></li>
				</ul>
			</div>
		</div>
	</div>

	<slot />
</div>
