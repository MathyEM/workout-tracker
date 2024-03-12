const state = {
  addExerciseDialogIsOpen: false,
  addExerciseDialogActiveId: null,
  programName: "",
  programDescription: "",
  programWorkouts: [
    /*
    {
      name: "Back day", // unique (within this program)
      notes: "The day you train back. Focus on xyz etc..."
      exercises: [
        {
          hash: 3357665225, //lat pulldown
          repRange: "6-15" //regex allow one or more numbers [0-9] potentially followed by "-" followed by one or more numbers [0-9]
          notes: "Focus on a slow and controlled negative",
        },
        {
          hash: xyz, //Seated Cable Rows
          repRange: "6-15"
          notes: "Focus on a slow and controlled negative",
        }
      ]
    },
    {
      name: "Chest day",
      notes: "The day you train chest. Focus on xyz etc..."
      exercises: [
        {
          hash: xyz, //Bench Press
          repRange: "6-15"
          notes: "Focus on a slow and controlled negative",
        },
        {
          hash: xyz, //Cable Flys
          repRange: "6-15"
          notes: "Focus on a slow and controlled negative",
        }
      ]
    }
    */
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
  getAddExerciseDialogIsOpen: state => state.addExerciseDialogIsOpen,
  getAddExerciseDialogActiveId: state => state.addExerciseDialogActiveId,
  getProgramName: state => state.programName,
  getProgramDescription: state => state.programDescription,
  getProgramWorkouts: state => state.programWorkouts,
  getProgramWorkout: (state) => (id) => state.programWorkouts[id],
}

const mutations = {
  SET_ADD_EXERCISE_DIALOG_IS_OPEN(state, payload) {
    state.addExerciseDialogIsOpen = payload
  },
  SET_ADD_EXERCISE_DIALOG_ACTIVE_ID(state, payload) {
    state.addExerciseDialogActiveId = payload
  },
  SET_PROGRAM_NAME(state, payload) {
    state.programName = payload
  },
  SET_PROGRAM_DESCRIPTION(state, payload) {
    state.programDescription = payload
  },
  ADD_PROGRAM_WORKOUT(state, payload) {
    state.programWorkouts.push(payload)
  }
}

const actions = {
  addProgramWorkout({ commit }) {
    const programWorkout = {
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

    commit("ADD_PROGRAM_WORKOUT", programWorkout)
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
}