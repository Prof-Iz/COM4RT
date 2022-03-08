<script>
	import EditModal from '$lib/editModal.svelte';
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
				<!-- row 1 -->
				<tr>
					<td>
						<div class="flex items-start space-x-3">
							<div>
								<div class="font-bold">Office Buddy</div>
								<div class="text-sm opacity-50">UCSI</div>
							</div>
						</div>
					</td>
					<td>
						<span class="badge badge-secondary bkg-color-green badge-sm">V1</span>
					</td>
					<td>
						<span class="badge badge-primary badge-sm">QWERTY</span>
					</td>
					<th>
						<a href="/dashboard/view/QWERTY" class="btn btn-ghost btn-xs">details</a>
						<EditModal device_id={'QWERTY'} name={'Office Buddy'} loc={'UCSI'} type={'V1'} />
					</th>
				</tr>
				<!-- row 1 -->
				<tr>
					<td>
						<div class="flex items-start space-x-3">
							<div>
								<div class="font-bold">HOMIE at Home</div>
								<div class="text-sm opacity-50">Angkasa</div>
							</div>
						</div>
					</td>
					<td>
						<span class="badge badge-secondary bkg-color-green badge-sm">V1</span>
					</td>
					<td>
						<span class="badge badge-primary badge-sm">ZXCVBN</span>
					</td>
					<th>
						<a href="/dashboard/view/ZXCVBN" class="btn btn-ghost btn-xs">details</a>
						<EditModal device_id={'ZXCVBN'} name={'HOMIE at Home'} loc={'Angkasa'} type={'V1'} />
					</th>
				</tr>
			</tbody>
		</table>
	</div>
</div>
