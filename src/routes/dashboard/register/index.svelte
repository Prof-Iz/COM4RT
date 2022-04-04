<script>
	export let name, location, type;
	import { browser } from '$app/env';
	import { goto } from '$app/navigation';
	let user = browser ? window.localStorage.getItem('user') ?? '' : '';
	let latest_UID;

	let email = JSON.parse(user);
	async function register() {
		const submit = await fetch('/dashboard/register.json', {
			method: 'POST',
			body: JSON.stringify({ name, location, type, email }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const submitData = await submit.json();

		if (submitData.status == 400) {
			alert('Unable to Register a new buddy');
			return;
		}

		console.log(submitData);
		latest_UID = submitData.data[0].device_id;
	}

	function redirect(url) {
		if (browser) {
			goto(url);
		}
	}
</script>

<div class="container mx-auto w-full mt-0 sm:mt-5">
	<h3 class="text-3xl mb-5 ">Enter the Details of your new Buddy</h3>
	<div class="form-control gap-4 mb-5">
		<label class="input-group">
			<span>Buddy Name</span>
			<input
				type="text"
				bind:value={name}
				placeholder="ex: Office Buddy"
				class="input input-bordered"
			/>
		</label>
		<label class="input-group">
			<span>Buddy Location</span>
			<input
				type="text"
				bind:value={location}
				placeholder="ex: My House or Office"
				class="input input-bordered"
			/>
		</label>
		<label class="input-group">
			<span>Buddy Version</span>
			<select bind:value={type} class="select select-bordered">
				<option disabled selected />
				<option>0</option>
				<option>1</option>
			</select>
		</label>
	</div>
	<!-- The button to open modal -->
	<label for="my-modal" class="btn modal-button btn-primary" on:click={register}>Submit</label>

	<!-- Put this part before </body> tag -->
	<input type="checkbox" id="my-modal" class="modal-toggle" />
	<div class="modal">
		<div class="modal-box">
			<h3 class="font-bold text-lg mb-2">Device Registered with ID</h3>
			<h2 class="font-bold text-5xl mb-2">{latest_UID}</h2>
			<p>Please use the code while setting up your Buddy</p>
			<div class="modal-action">
				<label
					for="my-modal"
					class="btn btn-secondary"
					on:click={() => {
						redirect('/dashboard/view');
					}}>Go Setup</label
				>
			</div>
		</div>
	</div>
</div>
