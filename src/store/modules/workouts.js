const state = {
  editWorkoutDialogId: null,
  showEditWorkoutDialog: false,
  showAddExerciseDialog: false,
  exerciseListOpen: [],
  repTypes: [
    {
      title: "Reps",
      subtitle: "Repititions",
    },
    {
      title: "RPE",
      subtitle: "Rate of Percieved Exhaustion",
    },
    {
      title: "RR",
      subtitle: "Reps in Reserve",
    },
  ],
  selectedRepType: 0,
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
  getShowAddExerciseDialog: state => state.showAddExerciseDialog,
  getExerciseListOpen: state => state.exerciseListOpen,
  getWorkouts: state => state.workouts,
  getWorkout: (state) => (id) => state.workouts.find(workout => workout.id == id),
  getRepTypes: state => state.repTypes,
  getSelectedRepType: state => state.repTypes[state.selectedRepType],
}

const mutations = {
  SET_EDIT_WORKOUT_DIALOG_ID(state, payload) {
    state.editWorkoutDialogId = payload
  },
  SET_SHOW_EDIT_WORKOUT_DIALOG(state, payload) {
    state.showEditWorkoutDialog = payload
  },
  SET_SHOW_ADD_EXERCISE_DIALOG(state, payload) {
    state.showAddExerciseDialog = payload
  },
  // SET_EXERCISE_LIST_OPEN(state, payload) {

  // },
  ADD_WORKOUT(state, payload) {
    state.workouts.push(payload)
  },
  UPDATE_SELECTED_REP_TYPE(state, payload) {
    const index = state.repTypes.findIndex((obj) => obj.title == payload)
    state.selectedRepType = index
  },
}

const actions = {
  addWorkout({ commit }) {
    const id = crypto.randomUUID()
    const workout = {
      id: id,
      name: "Back day",
      exercises: [
        // {
        //   hash: "ae545180dbdc2453e2bbbb3dd820179d80d631ea2858a308a2c76d637135c151",
        //   repType: null,
        //   repRangeMin: null,
        //   repRangeMax: null,
        //   notes: null,
        // }
    ],
      notes: "",
    }

    commit("ADD_WORKOUT", workout)
  },
  addExerciseToWorkout({ commit, getters }, payload) {
    commit, getters, payload
    // const activeWorkoutId = getters.getEditWorkoutDialogId
    console.log(payload)
  },

}

export default {
  state,
  getters,
  mutations,
  actions,
}