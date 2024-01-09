const state = {
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
    {
      name: '',
      category: [ // chest/cardio/stretching etc
        '',
        '',
      ],
      type: '',
      comments: '',
    }
  ]
}

const getters = {

}

const mutations = {

}

const actions = {

}

export default {
  state,
  getters,
  mutations,
  actions,
}