<template>
<div class="exercise-notes">
  <label for="notes">Notes:</label>
  <input type="text" id="notes" v-model="notes" />
</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

  export default {
    name: 'ExerciseNotes',
    computed: {
    ...mapGetters({
      getExerciseNotes: 'getExerciseNotes',
    }),
    notes: {
      get() {
        return this.getExerciseNotes
      },
      set(newValue) {
        this.SET_EXERCISE_NOTES(newValue)
      }
    },
  },
  methods: {
    ...mapMutations([
      'SET_EXERCISE_NOTES',
    ]),
  },
  }
</script>

<style scoped lang='scss'>
</style>