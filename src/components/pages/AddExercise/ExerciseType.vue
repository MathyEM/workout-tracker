<template>
<div class="exercise-type">
  <v-select
  label="Exercise type:"
  v-model="exerciseType"
  :items="getExerciseTypes"
  :item-props="TypeProps"
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
      TypeProps (item) {
        return {
          title: item.name,
          value: item.id
        }
      },
    }
  }
</script>

<style scoped lang='scss'>

</style>