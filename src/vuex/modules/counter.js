import { INCREMENT } from '../mutation-type'

const state = {
  count: 0
}

const mutations = {
  [INCREMENT] (state, amount) {
    console.log(state.count)
    state.count = state.count + amount
  }
}

export default {
  state,
  mutations
}
