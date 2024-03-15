<template>
  <v-dialog class="edit-workout" v-model="controlDialog" width="auto">
    <v-card max-width="600" title="Edit Workout">
      <v-card-text>
        <v-card class="workout" :class="'workout-'+index" variant="tonal" v-for="(exercise, index) in getWorkout(getEditWorkoutDialogId).exercises" :key="index">
          <v-card-title>{{ getExercise(exercise.hash).name }}</v-card-title>
          <v-card-text>
            <ExerciseDetails :exerciseIndex="index" :exercise="exercise"/>
          </v-card-text>
          <!-- <v-card-actions>
            <v-btn text="Save"/>
            <v-btn text="Cancel" @click="closeDialog"/>
          </v-card-actions> -->
        </v-card>
        <AddExerciseDialog/>
        <div class="btn-container">
          <v-btn class="add-exercise" variant="tonal"><span>+</span>Add Exercise</v-btn>
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
import { mapGetters, mapMutations } from 'vuex';
import AddExerciseDialog from '@/components/pages/CreateNewProgram/AddExerciseDialog.vue';
import ExerciseDetails from '@/components/pages/CreateNewProgram/ExerciseDetails.vue';

  export default {
    name: 'EditWorkoutDialog',
    components: {
      AddExerciseDialog,
      ExerciseDetails,
    },
    data() {
      return {
      }
    },
    computed: {
      ...mapGetters([
        "getShowEditWorkoutDialog",
        "getEditWorkoutDialogId",
        "getShowAddExerciseDialog",
        "getWorkout",
        "getRepTypes",
        "getSelectedRepType",
        "getExercise",

      ]),
      controlDialog: {
        get() {
          return this.getShowEditWorkoutDialog
        },
        set(newValue) {
          this.SET_SHOW_EDIT_WORKOUT_DIALOG(newValue)
        }
      },
      controlAddExerciseDialog: {
        get() {
          return this.getShowAddExerciseDialog
        },
        set(newValue) {
          this.SET_SHOW_ADD_EXERCISE_DIALOG(newValue)
        }
      },
    },
    methods: {
      ...mapMutations([
        'SET_SHOW_EDIT_WORKOUT_DIALOG',
        "SET_SHOW_ADD_EXERCISE_DIALOG",
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


</style>

<style lang="scss">
  .edit-workout {
    .v-card .v-card-text {
      display: grid;
      gap: 1em;
    }

    .btn-container .v-btn__content {
      display: flex;
      gap: 0.25em;
    }
  }

</style>