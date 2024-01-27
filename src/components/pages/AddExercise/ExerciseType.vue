<template>
<div class="exercise-type">
  <!-- <label for="type">Type:</label>
  <select id="type" v-model="exerciseType">
    <option selected disabled>Please select exercise type</option>
    <option v-for="(type, index) in getExerciseTypes" :key="index" :value="index">{{ type }}</option>
  </select> -->
  <v-select
  label="Exercise type:"
  v-model="exerciseType"
  :items="getExerciseTypes"
  variant="solo"></v-select>
</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

  export default {
    name: 'ExerciseType',
    computed: {
      ...mapGetters({
        getExerciseTypes: 'getExerciseTypes',
        getExerciseType: 'getExerciseType',
      }),
      exerciseType: {
        get() {
          return this.getExerciseType
        },
        set(newValue) {
          this.handleExerciseTypeSelect(newValue)
        }
      },
    },
    methods: {
      ...mapMutations([
        'SET_EXERCISE_TYPE',
      ]),
      handleExerciseTypeSelect(value) {
        this.SET_EXERCISE_TYPE(value)
      },
    }
  }
</script>

<style scoped lang='scss'>

</style>