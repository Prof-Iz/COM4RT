<!-- CHART COMPONENT TO BE INSERTED WHERE NEEDED -->
<script>
	import { onMount } from 'svelte';

	import {
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
	} from 'chart.js';

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

	const labels = [1, 2, 3, 4, 5, 6, 7];
	const x_data = [65, 59, 80, 81, 56, 55, 40];

	function makeGraph() {
		const ctx = document.getElementById('myChart');
		const myChart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: labels,
				datasets: [
					{
						label: 'My First Dataset',
						data: x_data,
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
