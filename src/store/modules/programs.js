const state = {
  programName: "",
  programDescription: "",
  programWorkouts: [
    /* workoutHash: 1234asd */
  ],
  recommendedSchedule: {
    mon: 0,
    tue: 1,
    wed: 2,
    thu: 3,
    fri: 4,
    sat: 5,
    sun: 6,
  },
}

const getters = {
  getProgramName: state => state.programName,
  getProgramDescription: state => state.programDescription,
}

const mutations = {
  SET_PROGRAM_NAME(state, payload) {
    state.programName = payload
  },
  SET_PROGRAM_DESCRIPTION(state, payload) {
    state.programDescription = payload
  },
}

const actions = {

}

export default {
  state,
  getters,
  mutations,
  actions,
}