import Vue from 'vue'
import Vuex from 'vuex'
import HeroesModule from './store/module/heroes/index'

Vue.use(Vuex)

const store: any = new Vuex.Store({
  modules: {
    HeroesModule
  }
})

export default store
