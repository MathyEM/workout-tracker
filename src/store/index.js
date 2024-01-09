import { createStore } from 'vuex'
import createProgram from './modules/createProgram'
import exercises from './modules/exercises'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    createProgram,
    exercises
  }
})
