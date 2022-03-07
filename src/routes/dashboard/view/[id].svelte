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
			type: 'line',
			background: 'bg-base-200'
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
			mode: 'dark'
		}
	};
</script>

<div class="container mt-8 px-2 md:px-0 sm:mt-0 mx-auto h-max">
	<h1 class="text-bold text-4xl sm:text-4xl mb-2">Office Buddy</h1>
	<p class="text-bold text-lg mb-3">Block E lvl 4</p>
	<div class="grid sm:grid-cols-2 grid-cols-1 justify-start">
		<div class="flex justify-center">
			<div class="w-full">
				<Chart {options} />
			</div>
		</div>
	</div>
</div>
