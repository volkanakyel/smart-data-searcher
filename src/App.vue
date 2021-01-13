<template>
  <div id="app" class="container">
    <pie-chart />
    <br />
    <AreaChart />
    <br />
    <LineChart />
  </div>
</template>

<script>
import AreaChart from "./components/AreaChart.vue";
import LineChart from "./components/LineChart.vue";
import PieChart from "./components/PieChart.vue";

export default {
  name: "App",
  components: {
    AreaChart,
    LineChart,
    PieChart,
  },
  data() {
    return {
      chartData: {
        Books: 24,
        Magazine: 30,
        Newspapers: 10,
      },
    };
  },
  created() {
    this.$store.dispatch("fetchUser");
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
