<script>
	import Str from '@supercharge/strings';

	let generated = '';
	let success = false;
	let visibility = 'hidden';

	async function generate_UUID() {
		if (generated.length == 0) {
			generated = Str.uuid().slice(0, 6);
			// TODO: while UUID is in db; loop
			while (!success) {
				console.log(device_detail);
				success = true;
			}
			console.log(generated);
		}
	}
</script>

<div class="container mx-auto w-full mt-0 sm:mt-5">
	<h3 class="text-3xl mb-5 ">Enter the Details of your new Buddy</h3>
	<div class="form-control gap-4 mb-5">
		<label class="input-group">
			<span>Buddy Name</span>
			<input type="text" placeholder="Office Buddy" class="input input-bordered" />
		</label>
		<label class="input-group">
			<span>Buddy Location</span>
			<input type="text" placeholder="UCSI" class="input input-bordered" />
		</label>
		<label class="input-group">
			<span>Buddy Version</span>
			<select class="select select-bordered">
				<option disabled selected />
				<option>MVP</option>
				<option>V1</option>
			</select>
		</label>
	</div>
	<!-- The button to open modal -->
	<label for="my-modal" class="btn modal-button btn-primary" on:click={generate_UUID}>Submit</label>

	<!-- Put this part before </body> tag -->
	<input type="checkbox" id="my-modal" class="modal-toggle" />
	<div class="modal">
		<div class="modal-box">
			<h3 class="font-bold text-lg mb-2">Device Registered with</h3>
			<p class="text-4xl">{generated}</p>
			<p>Please use the code while setting up your Buddy</p>
			<div class="modal-action">
				<label for="my-modal" class="btn btn-secondary">Go Setup</label>
			</div>
		</div>
	</div>
</div>
