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
		return new Date(date).toUTCString();
	}
	import Chart from '$lib/chart.svelte';
	export let data;
	export let params;
	let x_data = [35, 36, 40, 36, 37];
	let labels = [1300, 1315, 1330, 1345, 1400];
</script>

<h2>Data collected in DB for Device {params.id}</h2>
<br />
<div class="overflow-x-auto">
	<div id="myDiv" />
	<Chart {x_data} {labels} />
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
