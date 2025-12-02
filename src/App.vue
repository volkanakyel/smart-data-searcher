<template>
  <div id="app">
    <header>
      <span class="logo">dashboard</span>
      <span class="date">{{ currentDate }}</span>
    </header>

    <main>
      <div class="card">
        <span class="label">distribution</span>
        <PieChart />
      </div>

      <div class="card">
        <span class="label">trends</span>
        <AreaChart />
      </div>

      <div class="card full">
        <span class="label">performance</span>
        <LineChart />
      </div>
    </main>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useUserStore } from "./store";
import AreaChart from "./components/AreaChart.vue";
import LineChart from "./components/LineChart.vue";
import PieChart from "./components/PieChart.vue";

const userStore = useUserStore();

const currentDate = computed(() => {
  return new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
});

onMounted(() => {
  userStore.fetchUsers();
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #fafafa;
  font-family: 'Inter', -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
}

#app {
  min-height: 100vh;
  padding: 24px 32px;
  max-width: 1200px;
  margin: 0 auto;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  padding-bottom: 16px;
  border-bottom: 1px solid #eee;
}

.logo {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #111;
}

.date {
  font-size: 11px;
  color: #999;
}

main {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.card {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 20px;
}

.card.full {
  grid-column: 1 / -1;
}

.label {
  display: block;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: #999;
  margin-bottom: 16px;
}

@media (max-width: 768px) {
  #app {
    padding: 16px;
  }

  main {
    grid-template-columns: 1fr;
  }

  .card.full {
    grid-column: 1;
  }
}
</style>
