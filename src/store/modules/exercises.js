const state = {
  exerciseName: '',
  exerciseCategory: '',
  exerciseType: '',
  exerciseNotes: '',
  muscleGroups: [
    {
      name: 'Abs',
      checked: false,
      subGroups: [
        {
          name: 'Rectus Abdominis',
          checked: false,
          disabled: false,
        },
        {
          name: 'Obliques',
          checked: false,
          disabled: false,
        },
        
      ]
    },
    {
      name: 'Back',
      checked: false,
      subGroups: [
        {
          name: 'Latissimus Dorsi',
          checked: false,
          disabled: false,
        },
        {
          name: 'Trapezius',
          checked: false,
          disabled: false,
        },
        {
          name: 'Rhomboids',
          checked: false,
          disabled: false,
        },
        {
          name: 'Erector Spinae',
          checked: false,
          disabled: false,
        },
      ]
    },
    {
      name: 'Chest',
      checked: false,
      subGroups: [
        {
          name: 'Pectoralis Major',
          checked: false,
          disabled: false,
        },
        {
          name:'Pectoralis Minor',
          checked: false,
          disabled: false,
        },
      ]
    },
    {
      name: 'Legs',
      checked: false,
      subGroups: [
        {
          name: 'Glutes',
          checked: false,
          disabled: false,
        },
        {
          name: 'Hamstrings',
          checked: false,
          disabled: false,
        },
        {
          name: 'Quadriceps',
          checked: false,
          disabled: false,
        },
        {
          name: 'Calfs',
          checked: false,
          disabled: false,
        },
        
      ]
    },
    {
      name: 'Shoulder',
      checked: false,
      subGroups: [
        {
          name: 'Anterior Deltoid',
          checked: false,
          disabled: false,
        },
        {
          name: 'Lateral Deltoid',
          checked: false,
          disabled: false,
        },
        {
          name: 'Posterior Deltoid',
          checked: false,
          disabled: false,
        },
      ]
    },
    {
      name: 'Biceps',
      checked: false,
      subGroups: [

      ]
    },
    {
      name: 'Triceps',
      checked: false,
      subGroups: [

      ]
    },
    {
      name: 'Forearm',
      checked: false,
      subGroups: [
        {
          name: 'Brachioradialis',
          checked: false,
          disabled: false,
        },
        {
          name: 'Flexors',
          checked: false,
          disabled: false,
        },
      ]
    }
  ],
  exerciseCategories: [
    'Abs',
    'Back',
    'Biceps',
    'Cardio',
    'Chest',
    'Legs',
    'Shoulders',
    'Stretching',
    'Triceps',
  ],
  exerciseTypes: [
    'Weight and Reps',
    'Distance and Time',
    'Weight and Time',
    'Weight and Distance',
    'Reps and Distance',
    'Reps and Time',
    'Weight',
    'Reps',
    'Distance',
    'Time',
  ],
  exercises: [
    // Template for exercise object
    {
      name: '',
      category: '',
      muscleGroups: [],
      type: '',
      notes: '',
    }
  ]
}

const getters = {
  getExerciseName: state => state.exerciseName,
  getExerciseCategory: state => state.exerciseCategory,
  getExerciseType: state => state.exerciseType,
  getExerciseNotes: state => state.exerciseNotes,
  getSelectedMuscleGroups: state => state.muscleGroups.filter(muscleGroup => muscleGroup.checked == true),
  getMuscleGroups: state => state.muscleGroups,
  getSelectorMuscleGroups: state => {
    const muscleGroups = state.muscleGroups
    const renamedGroups = []
    for (let i = 0; i < muscleGroups.length; i++) {
      const muscleGroup = muscleGroups[i]
      
      renamedGroups.push(muscleGroup.name)
      
      for (let j = 0; j < muscleGroup.subGroups.length; j++) {
        const subGroup = muscleGroup.subGroups[j]
        renamedGroups.push(' -' + subGroup.name)
      }
    }
    return renamedGroups
  },
  getExerciseCategories: state => state.exerciseCategories,
  getExerciseTypes: state => state.exerciseTypes,
}

const mutations = {
  SET_EXERCISE_NAME(state, payload) {
    state.exerciseName = payload
  },
  SET_EXERCISE_CATEGORY(state, payload) {
    state.exerciseCategory = payload
  },
  SET_EXERCISE_TYPE(state, payload) {
    state.exerciseType = payload
  },
  SET_EXERCISE_NOTES(state, payload) {
    state.exerciseNotes = payload
  },
  CHECK_MUSCLE_GROUP(state, {index, subIndex}) {
    const muscleGroup = state.muscleGroups[index]
    muscleGroup.checked = true

    if (subIndex === undefined) {
      for (let i = 0; i < muscleGroup.subGroups.length; i++) {
        const subGroup = muscleGroup.subGroups[i]
        
        subGroup.checked = true
      }
      return
    }
    
    const subGroup = muscleGroup.subGroups[subIndex];
    subGroup.checked = true
  },
  UNCHECK_MUSCLE_GROUP(state, {index, subIndex}) {
    const muscleGroup = state.muscleGroups[index]

    if (subIndex === undefined) {
      muscleGroup.checked = false

      for (let i = 0; i < muscleGroup.subGroups.length; i++) {
        const subGroup = muscleGroup.subGroups[i]
        
        subGroup.checked = false
      }
      return
    }

    const subGroup = muscleGroup.subGroups[subIndex]
    subGroup.checked = false
    if (muscleGroup.subGroups.filter(subGroup => subGroup.checked == true).length == 0) {
      muscleGroup.checked = false
    }
  },
  ADD_NEW_EXERCISE(state, payload) {
    state.exercises.push(payload)
  }
}

const actions = {
  checkMuscleGroup({getters, commit}, {index, subIndex}) {
    const muscleGroup = getters.getMuscleGroups[index]

    if (subIndex === undefined) {
      if (muscleGroup.checked) {
        commit('UNCHECK_MUSCLE_GROUP', {index, subIndex})
        return
      }

      commit('CHECK_MUSCLE_GROUP', {index, subIndex})
      return
    }

    
    if (muscleGroup.subGroups[subIndex].checked) {
      commit('UNCHECK_MUSCLE_GROUP', {index, subIndex})
      return
    }
    
    
    commit('CHECK_MUSCLE_GROUP', {index, subIndex})
    return
  },
  addExercise({commit, getters}) {
    commit('ADD_NEW_EXERCISE', {
      name: getters.getExerciseName,
      category: getters.getExerciseCategory,
      muscleGroups: getters.getSelectedMuscleGroups,
      type: getters.getExerciseType,
      notes: getters.getExerciseNotes
    })
  }
}

export default {
  namespaced: false,
  state,
  getters,
  mutations,
  actions,
}