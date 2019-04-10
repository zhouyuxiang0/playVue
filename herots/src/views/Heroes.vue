<template>
  <div>
    <h2>My Heros</h2>
    <div>
      <label>Hero name:
        <input v-model.trim="heroName" type="text" name="" id="">
      </label>
      <button @click="add(heroName)">
        add
      </button>
    </div>
    <ul class="heroes">
      <li
        v-for="(hero, index) of heroList"
        :key="index"
      >
        <router-link
          :to="'/detail/'+hero.id"
        >
          <span class="badge">{{hero.id}}</span> {{hero.name}}
        </router-link>
        <button
          class="delete"
          @click="del(hero)"
        >
          x
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State } from 'vuex-class'

@Component
export default class Heroes extends Vue {
  @State('HeroesModule')
  HeroesModule: any

  hero: string = ''
  heroList: {id: number, name: string}[] = []

  add (heroName: string): void {
    const index = this.heroList.length - 1
    const id = this.heroList[index].id + 1
    this.heroList.push({ id, name: heroName })
  }

  del (hero: {id: number, name: string}) {
    this.heroList = this.heroList.filter(v => v !== hero)
  }

  mounted () {
    this.heroList = this.HeroesModule.heroes
  }
}
</script>

<style scoped>
/* HeroesComponent's private CSS styles */
.heroes {
  margin: 0 0 2em 0;
  list-style-type: none;
  padding: 0;
  width: 15em;
}
.heroes li {
  position: relative;
  cursor: pointer;
  background-color: #EEE;
  margin: .5em;
  padding: .3em 0;
  height: 1.6em;
  border-radius: 4px;
}

.heroes li:hover {
  color: #607D8B;
  background-color: #DDD;
  left: .1em;
}

.heroes a {
  color: #888;
  text-decoration: none;
  position: relative;
  display: block;
  width: 250px;
}

.heroes a:hover {
  color:#607D8B;
}

.heroes .badge {
  display: inline-block;
  font-size: small;
  color: white;
  padding: 0.8em 0.7em 0 0.7em;
  background-color: #607D8B;
  line-height: 1em;
  position: relative;
  left: -1px;
  top: -4px;
  height: 1.8em;
  min-width: 16px;
  text-align: right;
  margin-right: .8em;
  border-radius: 4px 0 0 4px;
}

button {
  background-color: #eee;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  cursor: hand;
  font-family: Arial;
}

button:hover {
  background-color: #cfd8dc;
}

button.delete {
  position: relative;
  left: 194px;
  top: -32px;
  background-color: gray !important;
  color: white;
}
</style>
