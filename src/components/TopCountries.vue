<template>
  <v-app>
    <h2>Top countries affected by COVID-19</h2>

    <v-container>
      <v-select outlined :items="categories" label="Category" :value="categories[0]" v-on:change="loadChartData"/>
      <TopCountriesChart v-if="loaded" :chartData="data" :category="category"/>
    </v-container>
  </v-app>
</template>

<script>
  import Component from "vue-class-component"
  import Vue from "vue"
  import TopCountriesChart from "@/components/TopCountriesChart"
  import {get} from "@/utils/apiUtils"
  import {GeneralInformation} from "@/classes/general-information"
  import Category from "@/classes/constants/category"

  @Component({
    components: {
      TopCountriesChart
    }
  })
  export default class TopCountries extends Vue {
    loaded = false
    data = []
    categories = Object.keys(Category).filter(k => isNaN(k))
    category = this.categories[0]

    async loadChartData(category) {
      this.category = category
      this.category = 0
      this.loaded = false
      try {
        const response = await get("stats/general", {first: 10, sort: category})
        const information = response.map(country => new GeneralInformation(
          country["country_id"],
          country.country,
          country.confirmed,
          country.recovered,
          country.deaths
        ))
        this.loaded = true
        this.data = information
      } catch (e) {
        console.log(e)
      }
    }

    async mounted() {
      await this.loadChartData(this.categories[0])
    }
  }
</script>

<style scoped>

</style>
