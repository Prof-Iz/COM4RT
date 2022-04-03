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
	import { writable } from 'svelte/store';
	import { navigating } from '$app/stores';

	export let data;
	export let params;

	let options;

	function formatDate(date) {
		let d = new Date(date);
		// let utc = d.getTime() + d.getTimezoneOffset() * 60000;
		// let nd = new Date(utc + 3600000 * 8);
		return d.toLocaleString();
	}

	async function refetchData() {
		const res = await fetch(`/api/view/update-${params.id}.json`);
		const data = await res.json();
		if (data.points.length > 0) {
			let temp_dic = {
				y: data.points[0].temp,
				x: formatDate(data.points[0].logged_at)
			};

			if (temp_dic.x != $data_temp[$data_temp.length - 1].x) {
				temperature_array.update((n) => {
					n.push(data.points[0].temp);
					return n;
				});

				data_temp.update((n) => {
					n.push(temp_dic);
					return n;
				});

				temp_dic = {
					y: data.points[0].humidity,
					x: formatDate(data.points[0].logged_at)
				};

				humidity_array.update((n) => {
					n.push(data.points[0].humidity);
					return n;
				});

				data_humidity.update((n) => {
					n.push(temp_dic);
					return n;
				});
			}
		}
	}

	let update_data = setInterval(refetchData, 10000);

	$: if ($navigating) {
		clearInterval(update_data);
	}

	// Function to calculate average of array temperature and humidity
	function calculateAverageOfArray(array) {
		var total = 0;
		var count = 0;

		array.forEach(function (item, index) {
			total += item;
			count++;
		});

		return (total / count).toPrecision(3);
	}

	import Chart from '$lib/chart.svelte';

	let data_temp = writable([]);

	let data_humidity = writable([]);

	let temperature_array = writable([]),
		humidity_array = writable([]);

	for (let i = 0; i < data.points.length; i++) {
		let temp_dic = {
			y: data.points[i].temp,
			x: formatDate(data.points[i].logged_at)
		};

		temperature_array.update((n) => {
			n.push(data.points[i].temp);
			return n;
		});

		data_temp.update((n) => {
			n.push(temp_dic);
			return n;
		});

		temp_dic = {
			y: data.points[i].humidity,
			x: formatDate(data.points[i].logged_at)
		};

		humidity_array.update((n) => {
			n.push(data.points[i].humidity);
			return n;
		});

		data_humidity.update((n) => {
			n.push(temp_dic);
			return n;
		});
	}

	$: options = {
		chart: {
			type: 'line',
			background: 'bg-base-200'
		},
		colors: ['#FF8080', '#00E6E6'],
		stroke: {
			curve: 'smooth'
		},
		series: [
			{
				name: 'Temperature',
				data: $data_temp
			},
			{
				name: 'Humidity',
				data: $data_humidity
			}
		],
		xaxis: {
			type: 'datetime',
			labels: {
				datetimeUTC: false
			}
		},
		yaxis: [
			{
				title: {
					text: 'Temperature °C'
				},
				min: Math.min(...$temperature_array) - 3,
				max: Math.max(...$temperature_array) + 3
			},
			{
				opposite: true,
				title: {
					text: 'Humidity %'
				},
				min: Math.min(...$humidity_array) - 3,
				max: Math.max(...$humidity_array) + 3
			}
		],
		theme: {
			mode: 'dark'
		}
	};
</script>

<div class="container mt-8 px-2 md:px-0 sm:mt-0 mx-auto h-max">
	<h1 class="text-bold text-4xl sm:text-4xl mb-2">{params.name}</h1>
	<p class="text-bold text-lg mb-3">{params.loc}</p>
	<div class="grid sm:grid-cols-2 grid-cols-1 justify-start gap-x-5">
		<div class="flex justify-center">
			<div class="w-full">
				<Chart {options} />
			</div>
		</div>

		<div class="overflow-x-auto">
			<table class="table w-full">
				<!-- head -->
				<thead>
					<tr>
						<th />
						<th>Stat</th>
						<th>Latest</th>
						<th>Max</th>
						<th>Min</th>
						<th>Average</th>
					</tr>
				</thead>
				<tbody>
					<tr class="hover">
						<th>🌡</th>
						<td>Temperature</td>
						<td>{$temperature_array[$temperature_array.length - 1]} °C</td>
						<td>{Math.max(...$temperature_array)} °C</td>
						<td>{Math.min(...$temperature_array)} °C</td>
						<td>{calculateAverageOfArray($temperature_array)} °C</td>
					</tr>
					<tr class="hover">
						<th>💧</th>
						<td>Humidity</td>
						<td>{$humidity_array[$humidity_array.length - 1]} %</td>
						<td>{Math.max(...$humidity_array)} %</td>
						<td>{Math.min(...$humidity_array)} %</td>
						<td>{calculateAverageOfArray($humidity_array)} %</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>
