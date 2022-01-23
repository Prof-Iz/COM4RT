<!--  src/routes/$layout.svelte -->
<script>
	import '../tailwind.css';
</script>

<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>

<div class="m-6">
	<div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
		<div class="flex-1 px-2 mx-2">
			<span class="text-lg font-bold"> COM4RT BUDDY </span>
		</div>
		<div class="flex-none hidden px-2 mx-2 lg:flex">
			<div class="flex items-stretch">
				<a class="btn btn-ghost btn-sm rounded-btn">
					<i class="fa fa-info-circle px-2" aria-hidden="true" />
					Info
				</a>
				<a class="btn btn-ghost btn-sm rounded-btn">
					<i class="fa fa-user-circle-o px-2" aria-hidden="true" />
					Logout
				</a>
			</div>
		</div>
		<!-- DROP down button logic -->
		<div class="flex-none lg:hidden">
			<div class="dropdown dropdown-end">
				<div tabindex="0" class="btn btn-ghost rounded-btn">
					<i class="fa fa-chevron-circle-down" aria-hidden="true" />
				</div>
				<ul
					tabindex="0"
					class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 items-start"
				>
					<li class="w-full">
						<a class="btn btn-ghost btn-sm rounded-btn">
							<i class="fa fa-info-circle px-2" aria-hidden="true" />
							Info
						</a>
					</li>
					<li class="w-full">
						<a class="btn btn-ghost btn-sm rounded-btn">
							<i class="fa fa-user-circle-o px-2" aria-hidden="true" />
							Logout
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>

	<slot />
</div>
