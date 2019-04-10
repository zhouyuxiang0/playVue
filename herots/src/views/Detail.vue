<template>
  <div v-if="hero">
    <h2>{{hero.name}} Detail</h2>
    <div><span>id: </span>{{hero.id}}</div>
    <div>
      <label>name:
        <input type="text">
      </label>
    </div>
    <button @click="goBack()">go back</button>
    <button @click="save()">save</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  props: {
    hero: Object
  }
})
export default class Detail extends Vue {
  
}
</script>

<style scoped>

</style>
