<template>
  <div id="app">
    <h1>{{title}}</h1>
    <div id="nav">
      <router-link to="/dashboard">Dashboard</router-link> |
      <router-link to="/heroes">Heroes</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  title = 'Tour of Heroes';
}
</script>

<style scoped>

</style>
