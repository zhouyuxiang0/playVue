import actions from './actions'
import state from './state'
import mutations from './mutations'
import getters from './getters'

const HeroModule =  {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}

export default HeroModule