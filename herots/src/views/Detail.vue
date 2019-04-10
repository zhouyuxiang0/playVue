<template>
  <div v-if="hero">
    <h2>{{hero.name}}</h2>
    <div><span>id:</span>{{hero.id}}</div>
    <div>
      <label>name:
          <input type="text" :value="selectedHero.name" placeholder="name">
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Hero } from './Home.vue';

@Component({
  props: {
    hero: Object
  }
})
export default class Detail extends Vue {
  
}
</script>

<style>

</style>
