<template>
<div class="exercise-name">
  <v-text-field clearable label="Exercise name" variant="solo" v-model="name"></v-text-field>
</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

  export default {
    name: 'ExerciseName',
    data() {
      return {
      }
    },
    computed: {
      ...mapGetters({
        getExerciseName: 'getExerciseName',
      }),
      name: {
        get() {
          return this.getExerciseName
        },
        set(newValue) {
          this.SET_EXERCISE_NAME(newValue)
        }
      },
    },
    methods: {
      ...mapMutations([
        'SET_EXERCISE_NAME',
      ]),
    }
  }
</script>

<style scoped lang='scss'>

</style>