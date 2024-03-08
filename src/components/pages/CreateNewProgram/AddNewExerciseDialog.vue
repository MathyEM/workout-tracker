<template>
  <v-dialog class="add-new-exercise" v-model="controlDialog" width="auto">
    <v-card max-width="600" title="Edit Workout">
      <v-card-text>
        <ul class="exercise-list">
          <li class="exercise-list-headers">
            <span class="exercise-name-title">Exercise name</span>
            <span class="exercise-rep-range-title">Rep Range</span>
            <span class="exercise-notes-title">Notes</span>
          </li>
          <li class="exercise-list-item" v-for="(exercise, index) in getProgramWorkout(getAddExerciseDialogActiveId).exercises" :key="index">
            <span class="exercise-name">{{ exercise.name }}</span>
            <span class="exercise-rep-range">{{ exercise.repRangeMin }}-{{ exercise.repRangeMax }}</span>
            <span class="exercise-notes">{{ exercise.notes }}</span>
          </li>
        </ul>
      </v-card-text>
      <v-card-actions>
        <v-btn text="Save"/>
        <v-btn text="Cancel" @click="closeDialog"/>
    </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'AddNewExerciseDialog',
    computed: {
      ...mapGetters([
        "getAddExerciseDialogIsOpen",
        "getAddExerciseDialogActiveId",
        "getProgramWorkout",
      ]),
      controlDialog: {
        get() {
          return this.getAddExerciseDialogIsOpen
        },
        set(newValue) {
          this.SET_ADD_EXERCISE_DIALOG_IS_OPEN(newValue)
        }
      },
    },
    methods: {
      ...mapMutations([
        'SET_ADD_EXERCISE_DIALOG_IS_OPEN'
      ]),
      closeDialog() {
        this.SET_ADD_EXERCISE_DIALOG_IS_OPEN(false)
      }
    }
  }
</script>

<style scoped lang='scss'>
  ul {
    list-style: none;
  }

  ul.exercise-list {
    li {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 1em;
      align-items: center;
      padding: 0.25em 0.5em;

      &:nth-child(even) {
        background-color: $main-black;
      }
    }
  }

  .exercise-list-headers {
    font-weight: bold;
  }
</style>