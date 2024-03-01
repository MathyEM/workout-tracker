const state = {
  programName: "",
  programDescription: "",
  programDays: [
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
  }
}

const getters = {
  getProgramName: state => state.programName,
  getProgramDescription: state => state.programDescription,
  getProgramDays: state => state.programDays,
  getProgramDay: (state) => (id) => state.programDays[id],
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