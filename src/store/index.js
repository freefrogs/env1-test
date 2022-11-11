import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const getDefaultState = () => {
  return {
    isNavActive: false
  }
}
export default new Vuex.Store({
  state: {
    data: getDefaultState()
  },
  getters: {
    isNavActive (state) {
      return state.data.isNavActive
    }
  },
  mutations: {
    setNavState (state, val) {
      state.data.isNavActive = val
    }
  },
  actions: {
  },
  modules: {
  }
})
