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
  import Data from "@/data"

  @Component({
    components: {
      TopCountriesChart
    }
  })
  export default class TopCountries extends Vue {
    loaded = false
    test = new Data()
    options = []

    async mounted() {
      this.loaded = false
      try {
        const data = await fetch("http://localhost:8081/all")
        console.log(data)
        this.loaded = true
        this.test = data
      } catch (e) {
        console.log(e)
      }
    }
  }
</script>

<style scoped>

</style>
