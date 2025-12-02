<template>
  <div class="chart-container">
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const chartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Performance",
      data: [2, 10, 5, 9, 0, 6, 20],
      borderColor: "#111",
      backgroundColor: "#111",
      pointRadius: 2,
      pointHoverRadius: 4,
      borderWidth: 1.5,
      tension: 0.3,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    intersect: false,
    mode: "index",
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
      ticks: {
        color: "#bbb",
        font: {
          size: 9,
          family: "Inter",
        },
      },
    },
    y: {
      grid: {
        color: "#f5f5f5",
      },
      border: {
        display: false,
      },
      ticks: {
        color: "#bbb",
        font: {
          size: 9,
          family: "Inter",
        },
      },
    },
  },
};
</script>

<style scoped>
.chart-container {
  height: 180px;
}
</style>
