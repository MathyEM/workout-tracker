<template>
<div class="exercise-category">
  <v-select
  label="Category:"
  v-model="exerciseCategory"
  :items="getExerciseCategories"
  :item-props="CategoryProps"
  variant="solo"></v-select>
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
      CategoryProps (item) {
        return {
          title: item.name,
          value: item.id
        }
      },
    },
    mounted() {
      // console.log(this.getExerciseCategories.keys())
    },
  }
</script>

<style scoped lang='scss'>

</style>