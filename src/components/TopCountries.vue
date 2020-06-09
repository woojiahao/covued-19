<template>
  <v-app>
    <h2>Top countries affected by Covid-19</h2>
    <v-container>
      <TopCountriesChart
        v-if="loaded"
        :chartData="data"/>
    </v-container>
  </v-app>
</template>

<script>
  import Component from "vue-class-component"
  import Vue from "vue"
  import TopCountriesChart from "@/components/TopCountriesChart"
  import {get} from "@/utils/apiUtils"
  import {GeneralInformation} from "@/classes/general-information"

  @Component({
    components: {
      TopCountriesChart
    }
  })
  export default class TopCountries extends Vue {
    loaded = false
    options = []
    data = []

    async mounted() {
      this.loaded = false
      try {
        const response = await get("stats/general", {first: 10})
        const information = response.map(country => new GeneralInformation(
          country["country_id"],
          country.country,
          country.confirmed,
          country.recovered,
          country.deaths
        ))
        console.log(information)
        this.loaded = true
        this.data = information
      } catch (e) {
        console.log(e)
      }
    }
  }
</script>

<style scoped>

</style>
