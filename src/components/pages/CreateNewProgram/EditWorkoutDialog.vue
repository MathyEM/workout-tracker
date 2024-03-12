<template>
  <v-dialog class="edit-workout" v-model="controlDialog" width="auto">
    <v-card max-width="600" title="Edit Workout">
      <v-card-text>
        <v-card class="workout" :class="'workout-'+index" variant="tonal" v-for="(exercise, index) in getWorkout(getEditWorkoutDialogId).exercises" :key="index">
          <v-card-title><v-text-field label="Exercise name" type="number" :text="exercise.name" v-model="exercise.name"/></v-card-title>
          <v-card-text>
            <div class="exercise-rep-range">
              <v-select
                label="Rep Type"
                v-model="repType"
                :items="getRepTypes"
                :item-props="true"
              />
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
            </div>
            <div class="exercise-notes">
              <v-textarea
                clearable
                counter
                no-resize
                label="Notes"
                v-text="exercise.notes">
              </v-textarea>
            </div>
          </v-card-text>
          <!-- <v-card-actions>
            <v-btn text="Save"/>
            <v-btn text="Cancel" @click="closeDialog"/>
          </v-card-actions> -->
        </v-card>
        <div class="btn-container">
          <v-btn class="edit-workout" variant="tonal"><span>+</span>Edit Workout</v-btn>
        </div>
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
    name: 'EditWorkoutDialog',
    data() {
      return {
      }
    },
    computed: {
      ...mapGetters([
        "getShowEditWorkoutDialog",
        "getEditWorkoutDialogId",
        "getWorkout",
        "getRepTypes",
        "getSelectedRepType",
      ]),
      controlDialog: {
        get() {
          return this.getShowEditWorkoutDialog
        },
        set(newValue) {
          this.SET_SHOW_EDIT_WORKOUT_DIALOG(newValue)
        }
      },
      repType: {
        get() {
          return this.getSelectedRepType
        },
        set(newValue) {
          this.UPDATE_SELECTED_REP_TYPE(newValue)
        }
      },
      repMin: {
        get() {
          return 6
        },
        set() {
          
        }
      },
      repMax: {
        get() {
          return 12
        },
        set() {
          
        }
      },
    },
    methods: {
      ...mapMutations([
        'SET_SHOW_EDIT_WORKOUT_DIALOG',
        "UPDATE_SELECTED_REP_TYPE",
      ]),
      closeDialog() {
        this.SET_SHOW_EDIT_WORKOUT_DIALOG(false)
      }
    }
  }
</script>

<style scoped lang='scss'>
  ul {
    list-style: none;
  }

  .exercise-rep-range {
    display: grid;
    grid-template-columns: 2fr 3fr min-content 3fr;
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
</style>

<style lang="scss">
  .edit-workout {
    .v-card .v-card-text {
      display: grid;
      gap: 1em;
    }
  }
  .exercise-rep-range {
    .v-input .v-input__details {
      display: none;
    }
  }
</style>