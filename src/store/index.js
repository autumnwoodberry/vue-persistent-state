import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const sortOptions = [
  'name',
  'age'
]

export default new Vuex.Store({
  state: {
    searchQuery: null,
    sortOptions: sortOptions,
    sortValue: sortOptions[0],
    animals: [
      {
        type: 'dog',
        name: 'Scratchy',
        age: 12
      },
      {
        type: 'dog',
        name: 'Scruffy',
        age: 3
      },
      {
        type: 'dog',
        name: 'Buddy',
        age: 9
      },
      {
        type: 'cat',
        name: 'Mittens',
        age: 2
      },
      {
        type: 'cat',
        name: 'Misty',
        age: 22
      }
    ]
  },
  getters: {
    animals (state) {
      return state.animals
    }
  },
  actions: {
    setSearchQuery ({ commit }, value) {
      commit('setSearchQuery', value)
    },
    setSortValue ({ commit }, value) {
      commit('setSortValue', value)
    }
  },
  mutations: {
    setSearchQuery (state, value) {
      state.searchQuery = value
    },
    setSortValue (state, value) {
      state.sortValue = value
    }
  }
})
