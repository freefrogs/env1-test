import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const getDefaultState = () => {
  return {
    isNavActive: false,
    searchWord: '',
    categories: [],
    checkedCategories: [],
    apis: [],
    page: 1,
    pageAmount: 0
  }
}
export default new Vuex.Store({
  state: {
    data: getDefaultState()
  },
  getters: {
    isNavActive (state) {
      return state.data.isNavActive
    },
    searchWord (state) {
      return state.data.searchWord
    },
    categories (state) {
      return state.data.categories
    },
    checkedCategories (state) {
      return state.data.checkedCategories
    },
    apis (state) {
      return state.data.apis
    },
    filteredApis (state) {
      return state.data.apis.filter(api => {
        const regex = new RegExp(state.data.searchWord.trim(), 'ig')
        return api.API.match(regex) && state.data.checkedCategories.includes(api.Category)
      })
    }
  },
  mutations: {
    setNavState (state, val) {
      state.data.isNavActive = val
    },
    setSearchWord (state, val) {
      state.data.searchWord = val
    },
    setCategories (state, val) {
      state.data.categories = val
    },
    initCheckedCategories (state, val) {
      state.data.checkedCategories = val
    },
    clearCategories (state) {
      state.data.checkedCategories = []
    },
    checkAllCategories (state) {
      state.data.checkedCategories = state.data.categories
    },
    setCheckedCategories (state, val) {
      const categories = state.data.checkedCategories
      state.data.checkedCategories = categories.includes(val) ? categories.filter(el => el !== val) : [...categories, val]
    },
    initApis (state, val) {
      const newVal = val.map((el, index) => {
        el.id = index
        return el
      })
      state.data.apis = newVal
    }
  },
  actions: {
  },
  modules: {
  }
})
