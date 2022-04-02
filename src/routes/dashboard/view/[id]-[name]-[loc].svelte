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
	import supabase from '$lib/db';

	export let data;
	export let params;

	const subscription = supabase
		.from(`test_log:device_id=eq.${params.id}`)
		.on('INSERT', (payload) => {
			console.log('Change received!', payload);
		})
		.subscribe();

	console.log(subscription);

	function formatDate(date) {
		let d = new Date(date);
		// let utc = d.getTime() + d.getTimezoneOffset() * 60000;
		// let nd = new Date(utc + 3600000 * 8);
		return d.toLocaleString();
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

	let options = {
		chart: {
			type: 'line',
			background: 'bg-base-200'
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
		<div>
			<div class="stats shadow stats-vertical mb-5 mx-auto">
				<div class="stat">
					<div class="stat-title">💧 Avg</div>
					<div class="stat-value">
						{calculateAverageOfArray($humidity_array)} <small>%</small>
					</div>
					<div class="stat-desc">Average Humidity</div>
				</div>

				<div class="stat ">
					<div class="stat-title">💧 Min</div>
					<div class="stat-value">{Math.min(...$humidity_array)} <small>%</small></div>
					<div class="stat-desc">Lowest Recorded</div>
				</div>

				<div class="stat ">
					<div class="stat-title">💧 Max</div>
					<div class="stat-value">{Math.max(...$humidity_array)} <small>%</small></div>
					<div class="stat-desc">Highest Recorded</div>
				</div>
			</div>
			<div class="stats shadow stats-vertical">
				<div class="stat">
					<div class="stat-title">🌡Avg</div>
					<div class="stat-value">
						{calculateAverageOfArray($temperature_array)} <small>°C</small>
					</div>
					<div class="stat-desc">Average Temperature</div>
				</div>

				<div class="stat ">
					<div class="stat-title">🌡Min</div>
					<div class="stat-value">{Math.min(...$temperature_array)} <small>°C</small></div>
					<div class="stat-desc">Lowest Recorded</div>
				</div>

				<div class="stat ">
					<div class="stat-title">🌡Max</div>
					<div class="stat-value">{Math.max(...$temperature_array)} <small>°C</small></div>
					<div class="stat-desc">Highest Recorded</div>
				</div>
			</div>
		</div>
	</div>
</div>
