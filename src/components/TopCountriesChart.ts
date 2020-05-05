import {Component, Prop, Vue} from "vue-property-decorator"
import {HorizontalBar, mixins} from "vue-chartjs"
import Data from "../data"

// @ts-ignore
@Component({
  extends: HorizontalBar,
  mixins: [mixins.reactiveProp]
})
export default class TopCountriesChart extends Vue<HorizontalBar> {
  @Prop({default: new Data()})
  chartData: Data = new Data()

  @Prop({default: {}})
  options: any = {}
  // private options: any = {
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   scales: {
  //     yAxes: [
  //       {
  //         ticks: {
  //           beginAtZero: true,
  //         }
  //       }
  //     ]
  //   }
  // }

  mounted() {
    // const data = new Data(
    //   ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    //   [
    //     {
    //       label: "Top countries affected by Covid-19",
    //       backgroundColor: '#f87979',
    //       maxBarThickness: 30,
    //       data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
    //     }
    //   ],
    // )
    this.renderChart(this.chartData, this.options)
  }
}
