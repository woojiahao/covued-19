import {Bar} from "vue-chartjs"

export default {
  extends: Bar,
  props: ['chartData'],
  mounted() {
    // @ts-ignore
    const labels = this.chartData.map(data => data.country)
    // @ts-ignore
    this.renderChart(
      {
        labels,
        datasets: [
          {
            label: "Confirmed",
            backgroundColor: "#f87979",
            // @ts-ignore
            data: this.chartData.map(data => data.confirmed)
          },
          {
            label: "Recovered",
            backgroundColor: "#ffffff",
            // @ts-ignore
            data: this.chartData.map(data => data.recovered)
          },
          {
            label: "Deaths",
            backgroundColor: "#f87979",
            // @ts-ignore
            data: this.chartData.map(data => data.deaths)
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
      }
    )
  }
}
