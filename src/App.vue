<template>
  <div id="app">
    <h1>COVID-19 Visualisations</h1>
    <TopCountries/>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import TopCountries from "@/components/TopCountries.vue"

  @Component({
    components: {
      TopCountries
    },
  })
  export default class App extends Vue {
  }
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
