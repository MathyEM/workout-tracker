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
    async sha256Hash({ state }, source) {
      state
      const str = JSON.stringify(source)
      const buf = await crypto.subtle.digest("SHA-256", new TextEncoder("utf-8").encode(str));
      return Array.prototype.map.call(new Uint8Array(buf), x=>(('00'+x.toString(16)).slice(-2))).join('');
    }
  },
  modules: {
    exercises,
    workouts,
    programs,
  }
})
