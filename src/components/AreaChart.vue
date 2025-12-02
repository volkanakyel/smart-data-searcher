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
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const chartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Revenue",
      borderColor: "#111",
      backgroundColor: "rgba(0, 0, 0, 0.03)",
      borderWidth: 1.5,
      pointRadius: 0,
      pointHoverRadius: 3,
      pointBackgroundColor: "#111",
      fill: true,
      tension: 0.4,
      data: [40, 39, 10, 40, 39, 80, 40],
    },
    {
      label: "Expenses",
      borderColor: "#bbb",
      backgroundColor: "transparent",
      borderWidth: 1.5,
      pointRadius: 0,
      pointHoverRadius: 3,
      pointBackgroundColor: "#bbb",
      fill: false,
      tension: 0.4,
      data: [60, 55, 32, 10, 2, 12, 53],
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
      display: true,
      position: "top",
      align: "end",
      labels: {
        color: "#999",
        usePointStyle: true,
        pointStyle: "line",
        padding: 16,
        font: {
          size: 10,
          family: "Inter",
        },
      },
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
  height: 200px;
}
</style>
