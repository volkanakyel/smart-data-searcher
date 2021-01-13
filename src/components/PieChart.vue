<script>
import { Pie } from "vue-chartjs";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["users"]),
  },
  extends: Pie,
  mounted() {
    this.gradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
    this.gradient2 = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
    this.gradient.addColorStop(0, "rgba(255, 0,0, 0.5)");
    this.gradient.addColorStop(0.5, "rgba(255, 0, 0, 0.25)");
    this.gradient.addColorStop(1, "rgba(255, 0, 0, 0)");
    this.gradient2.addColorStop(0, "rgba(0, 231, 255, 0.9)");
    this.gradient2.addColorStop(0.5, "rgba(0, 231, 255, 0.25)");
    this.gradient2.addColorStop(1, "rgba(0, 231, 255, 0)");
    this.renderChart(
      {
        labels: ["Magazines", "Books", "Newspapers"],
        datasets: [
          {
            backgroundColor: [this.gradient, this.gradient2, "#00D8FF"],
            data: [60, 100, 20], //Data
          },
        ],
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "User data",
        },
      }
    );
  },
};
</script>
