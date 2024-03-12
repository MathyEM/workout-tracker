<template>
  <v-dialog class="edit-workout" v-model="controlDialog" width="auto">
    <v-card max-width="600" title="Edit Workout">
      <v-card-text>
        <v-card variant="tonal" v-for="(exercise, index) in getWorkout(getEditWorkoutDialogId).exercises" :key="index">
          <v-card-title><v-text-field label="Exercise name" type="number" :text="exercise.name" v-model="exercise.name"/></v-card-title>
          <v-card-text>
            <div class="exercise-rep-range"><v-text-field label="Min Reps" type="number" v-model.number="repMin"/><span>-</span><v-text-field label="Max Reps" type="number" v-model.number="repMax"/></div>
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
        <v-btn variant="tonal"><span>+</span>Edit Workout</v-btn>
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
        repMin: 6,
        repMax: 12,
      }
    },
    computed: {
      ...mapGetters([
        "getShowEditWorkoutDialog",
        "getEditWorkoutDialogId",
        "getWorkout",
      ]),
      controlDialog: {
        get() {
          return this.getShowEditWorkoutDialog
        },
        set(newValue) {
          this.SET_SHOW_EDIT_WORKOUT_DIALOG(newValue)
        }
      },
    },
    methods: {
      ...mapMutations([
        'SET_SHOW_EDIT_WORKOUT_DIALOG'
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
    display: flex;
    align-items: center;
    padding-bottom: 2em;
    gap: 0.5em;

    span {
      font-size: 1.5em;
    }

    input {
      display: inline-block;
    }
  }
</style>

<style lang="scss">
  .exercise-rep-range {
    .v-input .v-input__details {
      display: none;
    }
  }
</style>