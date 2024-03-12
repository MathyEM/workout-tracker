import { createStore } from 'vuex'
import exercises from './modules/exercises'
import workouts from './modules/workouts'
import programs from './modules/programs'

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
    exercises,
    workouts,
    programs,
  }
})
