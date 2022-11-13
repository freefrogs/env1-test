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
    currentPaginationPage: 1
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
    },
    totalPaginationPages (state, getters) {
      return getters.filteredApis.length ? Math.ceil(getters.filteredApis.length / 10) : 0
    },
    currentPaginationPage (state) {
      return state.data.currentPaginationPage
    },
    currentPageData (state, getters) {
      const start = state.data.currentPaginationPage === 1 ? 0 : (state.data.currentPaginationPage - 1) * 10
      const end = state.data.currentPaginationPage * 10 > getters.filteredApis.length ? getters.filteredApis.length : state.data.currentPaginationPage * 10
      return getters.filteredApis.slice(start, end)
    }
  },
  mutations: {
    setNavState (state, val) {
      state.data.isNavActive = val
    },
    setSearchWord (state, val) {
      state.data.searchWord = val
      state.data.currentPaginationPage = 1
    },
    setCategories (state, val) {
      state.data.categories = val
      state.data.currentPaginationPage = 1
    },
    initCheckedCategories (state, val) {
      state.data.checkedCategories = val
    },
    clearCategories (state) {
      state.data.checkedCategories = []
      state.data.currentPaginationPage = 1
    },
    checkAllCategories (state) {
      state.data.checkedCategories = state.data.categories
      state.data.currentPaginationPage = 1
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
    },
    setCurrentPaginationPage (state, val) {
      state.data.currentPaginationPage = val
    }
  }
})
