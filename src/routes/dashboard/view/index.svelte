<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/dashboard/view.json');
		const data = await res.json();

		return {
			props: {
				data
			}
		};
	};
</script>

<script>
	import EditModal from '$lib/editModal.svelte';
	export let data;
</script>

<div class="container mx-auto mt-5 sm:mt-20 h-2/3">
	<div class="overflow-auto w-full rounded-none">
		<table class="table w-full ">
			<!-- head -->
			<thead class="bg-base-300 mb-3">
				<tr>
					<th>Name & Loc</th>
					<th>Type of Buddy</th>
					<th>Device ID</th>
					<th />
				</tr>
			</thead>
			<tbody class="bg-base-200">
				{#each data.status as buddy}
					<tr>
						<td>
							<div class="flex items-start space-x-3">
								<div>
									<div class="font-bold">{buddy.name}</div>
									<div class="text-sm opacity-50">{buddy.location}</div>
								</div>
							</div>
						</td>
						<td>
							<span class="badge badge-secondary bkg-color-green badge-sm">V{buddy.version}</span>
						</td>
						<td>
							<span class="badge badge-primary badge-sm">{buddy.device_id}</span>
						</td>
						<th>
							<a
								href={`/dashboard/view/${buddy.device_id}-${buddy.name}-${buddy.location}`}
								class="btn btn-ghost btn-xs">details</a
							>
							<EditModal
								device_id={buddy.device_id}
								name={buddy.name}
								loc={buddy.location}
								type={'V1'}
							/>
						</th>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
