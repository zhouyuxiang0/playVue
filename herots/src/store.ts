import Vue from 'vue'
import Vuex from 'vuex'
import HeroModule from './store'

Vue.use(Vuex)

const store: any = new Vuex.Store({
  modules: {
    HeroModule
  }
})

export default store
