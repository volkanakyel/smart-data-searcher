# Smart Dashboard

A minimal data visualization dashboard built with Vue 3 and Chart.js.

![Vue](https://img.shields.io/badge/Vue-3.5-42b883) ![Vite](https://img.shields.io/badge/Vite-6-646cff) ![Chart.js](https://img.shields.io/badge/Chart.js-4-ff6384)

## What it does

Displays data through three chart types:
- **Pie chart** — category distribution
- **Area chart** — trend comparison over time
- **Line chart** — performance tracking

Data is fetched from an external API and managed with Pinia.

## Stack

- **Vue 3** — composition API with `<script setup>`
- **Vite** — fast dev server and builds
- **Chart.js + vue-chartjs** — responsive charts
- **Pinia** — state management
- **Axios** — API requests

## Getting started

```bash
npm install
npm run dev
```

Opens at `http://localhost:8080`

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Lint and fix files |

## Project structure

```
src/
├── components/
│   ├── AreaChart.vue
│   ├── LineChart.vue
│   └── PieChart.vue
├── services/
│   └── EventServices.js    # API client
├── store/
│   └── index.js            # Pinia store
├── App.vue
└── main.js
```
