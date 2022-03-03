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

	import '@carbon/charts/styles.min.css';
	import 'carbon-components/css/carbon-components.min.css';
	import { LineChart } from '@carbon/charts-svelte';

	export let data;
	export let params;

	let chart_data = [];

	for (let i = 0; i < data['status'].length; i++) {
		let temp_dic = {
			group: 'Temperature',
			date: data['status'][i].logged_at,
			temp_value: data['status'][i].temp
		};

		let humidity_dic = {
			group: 'Humidity',
			date: data['status'][i].logged_at,
			humidity_value: data['status'][i].humidity
		};

		chart_data.push(temp_dic);
		chart_data.push(humidity_dic);
	}
</script>

<h2>Data collected in DB for Device {params.id}</h2>
<br />
<div class="overflow-x-auto">
	<div id="myDiv" />

	<LineChart
		data={chart_data}
		options={{
			title: 'Historical Data',
			axes: {
				bottom: {
					title: 'Temperature vs Humidity',
					mapsTo: 'date',
					scaleType: 'time'
				},
				left: {
					mapsTo: 'temp_value',
					title: '°C'
				},
				right: {
					mapsTo: 'humidity_value',
					title: '%',
					correspondingDatasets: ['Humidity']
				}
			},
			curve: 'curveMonotoneX',
			toolbar: {
				enabled: true,
				numberOfIcons: 2,
				controls: [
					{
						type: 'Reset zoom'
					},
					{
						type: 'Zoom in'
					},
					{
						type: 'Zoom out'
					}
				]
			},
			zoomBar: {
				top: {
					enabled: true
				}
			},
			height: '400px'
		}}
	/>

	<!-- <table class="table w-full">
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
	</table> -->
</div>
