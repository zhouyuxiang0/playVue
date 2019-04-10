import actions from './actions'
import state from './state'
import mutations from './mutations'
import getters from './getters'

const HeroesModule = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

export default HeroesModule
