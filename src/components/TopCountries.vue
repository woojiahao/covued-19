<template>
  <v-app>
    <h2>Top countries affected by Covid-19</h2>
    <v-container>
      <TopCountriesChart
        v-if="loaded"
        :chartData="test"
        :options="options"/>
    </v-container>
  </v-app>
</template>

<script>
  import Component from "vue-class-component"
  import Vue from "vue"
  import TopCountriesChart from "@/components/TopCountriesChart"
  import Data from "../classes/data"
  import {get} from "@/utils/apiUtils"

  @Component({
    components: {
      TopCountriesChart
    }
  })
  export default class TopCountries extends Vue {
    loaded = false
    options = []

    async mounted() {
      this.loaded = false
      try {
        const response = await get("all", {first: 5})
        const confirmedData = response.confirmed.map(confirmed => new Data(confirmed))
        console.log(`In ${confirmedData[0].country} ${confirmedData[0].data[0].date}`)
        // this.loaded = true
        // this.test = data
      } catch (e) {
        console.log(e)
      }
    }
  }
</script>

<style scoped>

</style>
