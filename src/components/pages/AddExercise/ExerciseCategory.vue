<template>
<div class="exercise-category">
  <label for="category">Category:</label>
  <select id="category" v-model="exerciseCategory">
    <option selected disabled>Please select exercise category</option>
    <option v-for="(category, index) in getExerciseCategories" :key="index" :value="index">{{ category }}</option>
  </select>
</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

  export default {
    name: 'ExerciseCategory',
    computed: {
      ...mapGetters({
        getExerciseCategories: 'getExerciseCategories',
        getExerciseCategory: 'getExerciseCategory',
      }),
      exerciseCategory: {
        get() {
          return this.getExerciseCategory
        },
        set(newValue) {
          this.handleExerciseCategorySelect(newValue)
        }
      },
    },
    methods: {
      ...mapMutations([
        'SET_EXERCISE_CATEGORY',
      ]),
      handleExerciseCategorySelect(value) {
        this.SET_EXERCISE_CATEGORY(value)
      },
    }
  }
</script>

<style scoped lang='scss'>

</style>