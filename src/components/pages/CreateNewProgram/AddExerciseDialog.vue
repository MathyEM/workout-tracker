<template>
  <div class="vertical-menu-container">
    <VerticalMenu :items="getCategorizedExercises" :subItemClick="addExerciseToWorkout"/>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import VerticalMenu from '@/components/VerticalMenu.vue'

  export default {
    name: 'AddExerciseDialog',
    components: {
      VerticalMenu
    },
    computed: {
      ...mapGetters([
        "getExerciseCategories",
        "getCategorizedExercises",
      ]),
      ...mapState({
        categories: state => state.exercises.exerciseCategories
      })
    },
    methods: {
      ...mapActions([
        "fetchCategoryExercises",
        "addExerciseToWorkout",
      ])
    },
  }
</script>

<style scoped lang='scss'>
  .vertical-menu-container {
    display: flex;
    flex-direction: column;
    max-height: 35svh;
    overflow: auto;
  }
</style>