import actions from './actions'
import state from './state'
import mutations from './mutations'
import getters from './getters'

const HeroModule =  {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

export default HeroModule
