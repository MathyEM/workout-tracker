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

export async function sha256Hash(source) {
  const sourceString = JSON.stringify(source);
  const sourceBytes = new TextEncoder().encode(sourceString);
  const digest = await crypto.subtle.digest("SHA-256", sourceBytes);
  const resultBytes = [...new Uint8Array(digest)];
  return resultBytes.map(x => x.toString(16).padStart(2, '0')).join("");
}
