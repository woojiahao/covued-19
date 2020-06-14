import {Bar} from "vue-chartjs"
import Category from "@/classes/constants/category"
import {GeneralInformation} from "@/classes/general-information"
import {Vue} from "vue-property-decorator"

// @ts-ignore
const TopCountriesChart = Vue.extend({
  extends: Bar,
  props: {
    chartData: {
      type: Object as () => GeneralInformation[]
    },
    category: Category
  },
  mounted() {
    const labels = this.chartData.map((data: GeneralInformation) => data.country)
    let data = []
    switch (this.category) {
      case Category.Confirmed:
        data = this.chartData.map((data: GeneralInformation) => data.confirmed)
        break
      case Category.Recovered:
        data = this.chartData.map((data: GeneralInformation) => data.recovered)
        break
      case Category.Deaths:
        data = this.chartData.map((data: GeneralInformation) => data.deaths)
        break
      default:
        console.log(this.category)
        throw new Error("invalid category")
    }

    console.log(typeof data)
    this.renderChart(
      {
        labels,
        datasets: [
          {
            label: this.category,
            backgroundColor: "#f87979",
            data: data
          },
        ]
      },
      {responsive: true, maintainAspectRatio: false,}
    )
  }
})

export default TopCountriesChart
