<template>
  <div class="exercise-rep-range">
    <v-select
      label="Rep Type"
      v-model="repType"
      :items="getRepTypes"
      :item-props="true"
    />
    <template v-if="repType == 'Reps'">
      <v-text-field
        type="number"
        label="Min Reps"
        v-model.number="repMin"
      />
      <span>-</span>
      <v-text-field
        type="number"
        label="Max Reps"
        v-model.number="repMax"
      />
    </template>
    <template v-else>
      <v-text-field
        class="not-reps"
        type="number"
        :label="getSelectedRepType.subtitle"
        v-model.number="repMax"
      />
    </template>
  </div>
  <div class="exercise-notes">
    <v-textarea
      clearable
      counter
      no-resize
      label="Notes"
      v-model="notes">
    </v-textarea>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

  export default {
    name: 'ExerciseDetails',
    props: {
      exerciseIndex: {
        type: Number,
        required: true,
      },
      exercise: {
        type: Object,
        required: true,
      }
    },
    computed: {
      ...mapGetters([
        "getRepTypes",
        "getSelectedRepType",
        "getWorkoutExercise",
      ]),
      repType: {
        get() {
          return this.getWorkoutExercise(this.exerciseIndex).repType
        },
        set(newValue) {
          this.UPDATE_SELECTED_REP_TYPE(newValue)
          this.UPDATE_WORKOUT_EXERCISE_REP_TYPE({ exerciseIndex: this.exerciseIndex, newValue })
        }
      },
      repMin: {
        get() {
          return this.getWorkoutExercise(this.exerciseIndex).repRangeMin
        },
        set(newValue) {
          if (newValue < 1) {
            newValue = 1
          }
          this.UPDATE_WORKOUT_EXERCISE_REPRANGE_MIN({ exerciseIndex: this.exerciseIndex, newValue })
        }
      },
      repMax: {
        get() {
          return this.getWorkoutExercise(this.exerciseIndex).repRangeMax
        },
        set(newValue) {
          if (newValue < 1) {
            newValue = 1
          }
          this.UPDATE_WORKOUT_EXERCISE_REPRANGE_MAX({ exerciseIndex: this.exerciseIndex, newValue })
        }
      },
      notes: {
        get() {
          return this.getWorkoutExercise(this.exerciseIndex).notes
        },
        set(newValue) {
          this.UPDATE_WORKOUT_EXERCISE_NOTES({ exerciseIndex: this.exerciseIndex, newValue })
        }
      }
    },
    methods: {
      ...mapMutations([
        "UPDATE_SELECTED_REP_TYPE",
        "UPDATE_WORKOUT_EXERCISE_REP_TYPE",
        "UPDATE_WORKOUT_EXERCISE_REPRANGE_MIN",
        "UPDATE_WORKOUT_EXERCISE_REPRANGE_MAX",
        "UPDATE_WORKOUT_EXERCISE_NOTES",
      ]),
    }
  }
</script>

<style scoped lang='scss'>
  .exercise-rep-range {
    display: grid;
    grid-template-columns: 3fr 4fr min-content 4fr;
    align-items: center;
    padding-bottom: 2em;
    gap: 0.75em;

    span {
      font-size: 1.5em;
    }

    input {
      display: inline-block;
    }
  }

  .not-reps {
    grid-column-start: 2;
    grid-column-end: 5;
  }
</style>
<style lang="scss">
  .exercise-rep-range {
    .v-input .v-input__details {
      display: none;
    }
  }
</style>