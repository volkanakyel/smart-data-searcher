<template>
  <div class="chart-container">
    <Pie :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { Pie } from "vue-chartjs";
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from "chart.js";
import { useUserStore } from "@/store";

ChartJS.register(ArcElement, Title, Tooltip, Legend);

const userStore = useUserStore();

const chartData = computed(() => ({
  labels: ["Magazines", "Books", "Newspapers"],
  datasets: [
    {
      backgroundColor: ["#111", "#888", "#ddd"],
      borderWidth: 0,
      data: [60, 100, 20],
    },
  ],
}));

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        color: "#666",
        padding: 16,
        usePointStyle: true,
        pointStyle: "circle",
        font: {
          size: 10,
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
