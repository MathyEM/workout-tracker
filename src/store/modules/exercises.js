const state = {
  exerciseName: 'Lat Pulldown',
  exerciseCategory: 1,
  exerciseType: 0,
  exerciseNotes: 'Nothing.',
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
      checked: true,
      subGroups: [
        {
          name: 'Latissimus Dorsi',
          checked: true,
          disabled: false,
        },
        {
          name: 'Trapezius',
          checked: true,
          disabled: false,
        },
        {
          name: 'Rhomboids',
          checked: true,
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
          checked: true,
          disabled: false,
        },
      ]
    },
    {
      name: 'Biceps',
      checked: true,
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
      checked: true,
      subGroups: [
        {
          name: 'Brachioradialis',
          checked: true,
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
    {
      id: 1,
      name: 'Abs',
    },
    {
      id: 2,
      name: 'Back',
    },
    {
      id: 3,
      name: 'Biceps',
    },
    {
      id: 4,
      name: 'Cardio',
    },
    {
      id: 5,
      name: 'Chest',
    },
    {
      id: 6,
      name: 'Legs',
    },
    {
      id: 7,
      name: 'Shoulders',
    },
    {
      id: 8,
      name: 'Stretching',
    },
    {
      id: 9,
      name: 'Triceps',
    },
  ],
  exerciseTypes: [
    {
      id: 1,
      name: 'Weight and Reps',
    },
    {
      id: 2,
      name: 'Distance and Time',
    },
    {
      id: 3,
      name: 'Weight and Time',
    },
    {
      id: 4,
      name: 'Weight and Distance',
    },
    {
      id: 5,
      name: 'Reps and Distance',
    },
    {
      id: 6,
      name: 'Reps and Time',
    },
    {
      id: 7,
      name: 'Weight',
    },
    {
      id: 8,
      name: 'Reps',
    },
    {
      id: 9,
      name: 'Distance',
    },
    {
      id: 10,
      name: 'Time',
    },
  ],
  exercises: [
    // Template for exercise object
    {
      "name": "Lat Pulldown",
      "category": 2,
      "muscleGroups": [
          [1, 0, 1, 2],
          [5],
          [7, 0]
      ],
      "type": 0,
      "notes": "Nothing.",
      "hash": "ae545180dbdc2453e2bbbb3dd820179d80d631ea2858a308a2c76d637135c151",
    },
    {
      "name":"Bench Press",
      "category": 5,
      "muscleGroups": [
        [2, 0, 1],
        [4, 0],
        [6]
      ],
      "type":0,
      "notes":"Nothing.",
      "hash":"d2ca9c77a6b2afaf5efa603462cff01d55bfb3ab20400ce43b9f011f889a393c",
    }
  ]
}

const getters = {
  getExerciseName: state => state.exerciseName,
  getExerciseCategory: state => state.exerciseCategories[state.exerciseCategory],
  getExerciseType: state => state.exerciseTypes[state.exerciseType],
  getExerciseNotes: state => state.exerciseNotes,
  getSelectedMuscleGroups: state => {
    const muscleGroupIndices = []

    for (let i = 0; i < state.muscleGroups.length; i++) {
      const muscleGroup = state.muscleGroups[i]
      if (muscleGroup.checked === true) {

        const subGroupIndices = []
        for (let j = 0; j < muscleGroup.subGroups.length; j++) {
          const subGroup = muscleGroup.subGroups[j];
          
          if (subGroup.checked === true) {
            subGroupIndices.push(j)
          }
        }
        muscleGroupIndices.push([i, ...subGroupIndices])
      }
    }
    return muscleGroupIndices
  },
  getMuscleGroups: state => state.muscleGroups,
  getExerciseCategories: state => state.exerciseCategories,
  getCategory: state => id => state.exerciseCategories.find(category => category.id == id),
  getExerciseTypes: state => state.exerciseTypes,
  getExercises: state => state.exercises,
  getExercise: (state) => (hash) => state.exercises.find((exercise) => exercise.hash == hash),
  getCategoryExercises: (rootState) => (categoryId) => {
    const exercise = rootState.exercises.filter((exercise) => exercise.category == categoryId)
    return exercise || null
  }
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
  async addExercise({state, commit, getters, dispatch}) {
    const exercise = {
      name: getters.getExerciseName.toLowerCase(),
      category: state.exerciseCategory,
      muscleGroups: getters.getSelectedMuscleGroups,
      type: state.exerciseType,
    }

    const hash = await dispatch("sha256Hash", exercise)

    if(checkHashes(hash)) {
      console.log('exercise already exists.')
      return
    }

    exercise.name = getters.getExerciseName
    exercise.notes = getters.getExerciseNotes
    exercise.hash = hash
    commit('ADD_NEW_EXERCISE', exercise)
    console.log(state.exercises)
  },
  fetchCategoryExercises({ rootState }, categoryId) {
    console.log(rootState.exercises.exercises)
    const exercise = rootState.exercises.exercises.filter((exercise) => exercise.category == categoryId)
    return exercise || null
  }
}

function checkHashes(hash) {
  const matches = state.exercises.find((exercise) => exercise.hash == hash)
  return matches
}

export default {
  namespaced: false,
  state,
  getters,
  mutations,
  actions,
}


// function convertMuscleIndicesToMuscleNames() {
//   const activeMuscleGroups = []
//   for (let i = 0; i < this.getExercises[1].muscleGroups.length; i++) {
//     const muscleGroupIndex = this.getExercises[1].muscleGroups[i][0]
//     const temp = {
//       name: this.muscleGroups[muscleGroupIndex].name,
//       subGroups: []
//     }
//     for (let j = 1; j < this.getExercises[1].muscleGroups[i].length; j++) {
//       const subGroupIndex = this.getExercises[1].muscleGroups[i][j];
//       temp.subGroups.push(this.muscleGroups[muscleGroupIndex].subGroups[subGroupIndex].name)
//     }
//     activeMuscleGroups.push(temp)
//   }
//   return activeMuscleGroups
// }