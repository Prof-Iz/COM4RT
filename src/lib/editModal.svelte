<script>
	import { page } from '$app/stores';

	export let device_id;
	export let name, loc, type;

	async function updateDevice() {
		const submit = await fetch('/dashboard/view/editDevice.json', {
			method: 'POST',
			body: JSON.stringify({ name, loc, type, device_id }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const submitData = await submit.json();

		if (submitData.status == 400) {
			alert('Unable to Update Details of Buddy');
			return;
		}

		console.log(submitData);
		return submit;
	}

	async function deleteDevice() {
		const submit = await fetch('/dashboard/view/deleteDevice.json', {
			method: 'POST',
			body: JSON.stringify({ device_id }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const submitData = await submit.json();

		if (submitData.status == 400) {
			alert('Unable to Update Details of Buddy');
			return;
		}

		console.log(submitData);
		return submit;
	}
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
					<input type="text" placeholder={name} bind:value={name} class="input input-bordered" />
				</label>
				<label class="input-group">
					<span>Buddy Location</span>
					<input type="text" placeholder={loc} bind:value={loc} class="input input-bordered" />
				</label>
				<label class="input-group">
					<span>Buddy Version</span>
					<select class="select select-bordered" bind:value={type}>
						<option disabled selected>{type}</option>
						<option>0</option>
						<option>1</option>
					</select>
				</label>
			</div>

			<div class="modal-action">
				<label for="modal-{device_id}" class="btn btn-secondary" on:click={updateDevice}>
					UPDATE
				</label>
				<label for="modal-{device_id}" class="btn btn-warning" on:click={deleteDevice}>
					DELETE
				</label>
			</div>
		</div>
	</div>
</div>
