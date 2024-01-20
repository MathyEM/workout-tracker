<template>
<div class="exercise-name">
  <label for="name">Name:</label>
  <input type="text" id="name" v-model="name" />
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