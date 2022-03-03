<!-- CHART COMPONENT TO BE INSERTED WHERE NEEDED -->
<script>
	import { onMount } from 'svelte';

	// import {
	// 	Chart,
	// 	ArcElement,
	// 	LineElement,
	// 	BarElement,
	// 	PointElement,
	// 	BarController,
	// 	BubbleController,
	// 	DoughnutController,
	// 	LineController,
	// 	PieController,
	// 	PolarAreaController,
	// 	RadarController,
	// 	ScatterController,
	// 	CategoryScale,
	// 	LinearScale,
	// 	LogarithmicScale,
	// 	RadialLinearScale,
	// 	TimeScale,
	// 	TimeSeriesScale,
	// 	Decimation,
	// 	Filler,
	// 	Legend,
	// 	Title,
	// 	Tooltip,
	// 	SubTitle
	// } from 'chart.js';
	import pkg from 'chart.js';
	const {
		Chart,
		ArcElement,
		LineElement,
		BarElement,
		PointElement,
		BarController,
		BubbleController,
		DoughnutController,
		LineController,
		PieController,
		PolarAreaController,
		RadarController,
		ScatterController,
		CategoryScale,
		LinearScale,
		LogarithmicScale,
		RadialLinearScale,
		TimeScale,
		TimeSeriesScale,
		Decimation,
		Filler,
		Legend,
		Title,
		Tooltip,
		SubTitle
	} = pkg;

	Chart.register(
		ArcElement,
		LineElement,
		BarElement,
		PointElement,
		BarController,
		BubbleController,
		DoughnutController,
		LineController,
		PieController,
		PolarAreaController,
		RadarController,
		ScatterController,
		CategoryScale,
		LinearScale,
		LogarithmicScale,
		RadialLinearScale,
		TimeScale,
		TimeSeriesScale,
		Decimation,
		Filler,
		Legend,
		Title,
		Tooltip,
		SubTitle
	);

	export let labels;
	export let temp_data;
	export let humidity_data;

	function makeGraph() {
		const ctx = document.getElementById('myChart');
		const myChart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: labels,
				datasets: [
					{
						label: 'Temperature',
						data: temp_data,
						fill: false,
						borderColor: 'rgb(200, 192, 192)',
						tension: 0.1
					},
					{
						label: 'Humidity',
						data: humidity_data,
						fill: false,
						borderColor: 'rgb(75, 192, 192)',
						tension: 0.1
					}
				]
			}
		});
	}

	onMount(makeGraph);
</script>

<canvas id="myChart" height="100" />
