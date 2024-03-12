const state = {
  editWorkoutDialogId: null,
  showEditWorkoutDialog: false,
  workouts: [
    /*
    type Workout = {
      "name": String,
      "exercises": [
        {
          "exerciseHash": HashString,
          "repType": ["Reps"|"RPE"|"RR"],
          "repRangeMin": Number,
          "repRangeMax": Number,
          "notes": String,
        }
      ]
    }
    */
  ],
}

const getters = {
  getShowEditWorkoutDialog: state => state.showEditWorkoutDialog,
  getEditWorkoutDialogId: state => state.editWorkoutDialogId,
  getWorkouts: state => state.workouts,
  getWorkout: (state) => (id) => state.workouts[id],
}

const mutations = {
  SET_EDIT_WORKOUT_DIALOG_ID(state, payload) {
    state.editWorkoutDialogId = payload
  },
  SET_SHOW_EDIT_WORKOUT_DIALOG(state, payload) {
    state.showEditWorkoutDialog = payload
  },
  ADD_WORKOUT(state, payload) {
    state.workouts.push(payload)
  }
}

const actions = {
  addWorkout({ commit }) {
    const workout = {
      name: "",
      exercises: [
        {
          name: "Lat Pulldown",
          repRangeMin: 6,
          repRangeMax: 12,
          notes: "Slow and controlled negative"
        }
    ],
      notes: "",
    }

    commit("ADD_WORKOUT", workout)
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
}