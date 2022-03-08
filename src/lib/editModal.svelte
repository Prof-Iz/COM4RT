<script>
	import { page } from '$app/stores';
	let { params } = page;

	export let device_id;
	export let name, loc, type;
</script>

<!-- The button to open modal -->
<label for="modal-{device_id}" class="btn modal-button btn-ghost btn-xs">Edit</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="modal-{device_id}" class="modal-toggle" />
<div class="modal">
	<div class="modal-box ">
		<div class="container overflow-y-auto">
			<h3 class="text-3xl mb-5">Edit the details of your Buddy</h3>
			<div class="form-control gap-4">
				<label class="input-group">
					<span>Buddy Name</span>
					<input type="text" placeholder={name} class="input input-bordered" />
				</label>
				<label class="input-group">
					<span>Buddy Location</span>
					<input type="text" placeholder={loc} class="input input-bordered" />
				</label>
				<label class="input-group">
					<span>Buddy Version</span>
					<select class="select select-bordered">
						<option disabled selected>{type}</option>
						<option>MVP</option>
						<option>V1</option>
					</select>
				</label>
			</div>

			<div class="modal-action">
				<label for="modal-{device_id}" class="btn ">Confirm</label>
			</div>
		</div>
	</div>
</div>
