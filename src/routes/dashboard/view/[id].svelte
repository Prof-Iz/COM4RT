<script context="module">
	export const load = async ({ fetch, params }) => {
		const res = await fetch(`/api/view/${params.id}.json`);
		const data = await res.json();

		return {
			props: {
				data,
				params
			}
		};
	};
</script>

<script>
	function formatDate(date) {
		let d = new Date(date);
		let utc = d.getTime() + d.getTimezoneOffset() * 60000;
		let nd = new Date(utc + 3600000 * 8);
		return nd.toLocaleString();
	}

	import Chart from '$lib/chart.svelte';
	export let data;
	export let params;

	let temp_data = [];
	let labels = [];
	let humidity_data = [];

	for (let i = 0; i < data['status'].length; i++) {
		temp_data.push(data['status'][i].temp);
		humidity_data.push(data['status'][i].humidity);
		labels.push(formatDate(data['status'][i].logged_at));
	}

	console.log(temp_data, labels);
</script>

<h2>Data collected in DB for Device {params.id}</h2>
<br />
<div class="overflow-x-auto">
	<div id="myDiv" />
	<Chart {temp_data} {labels} {humidity_data} />
	<table class="table w-full">
		<thead>
			<tr>
				<th />
				<th>Logged at</th>
				<th>Temperature</th>
				<th>Humidity</th>
			</tr>
		</thead>
		{#each data['status'] as data_row}
			<tr>
				<th />
				<td>{formatDate(data_row.logged_at)}</td>
				<td>{data_row.temp}</td>
				<td>{data_row.humidity}</td>
			</tr>
		{/each}
	</table>
</div>
