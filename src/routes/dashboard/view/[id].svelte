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

	export let data;
	export let params;

	// let chart_data = [];

	// for (let i = 0; i < data['status'].length; i++) {
	// 	let temp_dic = {
	// 		group: 'Temperature',
	// 		date: data['status'][i].logged_at,
	// 		temp_value: data['status'][i].temp
	// 	};

	// 	let humidity_dic = {
	// 		group: 'Humidity',
	// 		date: data['status'][i].logged_at,
	// 		humidity_value: data['status'][i].humidity
	// 	};

	// 	chart_data.push(temp_dic);
	// 	chart_data.push(humidity_dic);
	// }

	import Chart from '$lib/chart.svelte';

	let data_temp = [];
	let data_humidity = [];

	for (let i = 0; i < data['status'].length; i++) {
		let temp_dic = {
			y: data['status'][i].temp,
			x: formatDate(data['status'][i].logged_at)
		};
		data_temp.push(temp_dic);
		temp_dic = {
			y: data['status'][i].humidity,
			x: formatDate(data['status'][i].logged_at)
		};
		data_humidity.push(temp_dic);
	}

	let options = {
		chart: {
			type: 'line'
		},
		series: [
			{
				name: 'Temperature',
				data: data_temp
			},
			{
				name: 'Humidity',
				data: data_humidity
			}
		],
		xaxis: {
			type: 'datetime'
		},
		yaxis: [
			{
				title: {
					text: 'Temperature °C'
				}
			},
			{
				opposite: true,
				title: {
					text: 'Humidity %'
				}
			}
		],
		theme: {
			mode: 'light'
		}
	};
</script>

<h1 class="md:text-5xl mx-5 mt-5 mb-6 text-xl">Data collected in DB for Device {params.id}</h1>
<div class="flex h-screen justify-center">
	<div class="md:w-2/3 w-full">
		<Chart {options} />
	</div>
</div>
<!-- <div class="flex w-100 px-5 justify-around">
	<div class="flex-auto w-2/3">
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
						title: 'Temperature °C'
					},
					right: {
						mapsTo: 'humidity_value',
						title: 'Humidity %',
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
	</div>
	<div class="flex-auto w-1/3">
		<h2>Some stuff</h2>
	</div>
</div> -->
<!-- <div class="overflow-x-auto ">
	<div id="myDiv" />

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
</div> -->
