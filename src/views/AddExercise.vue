<template>
  <div class="add-exercise">
    <h2>Add New Exercise</h2>
    <ExerciseName class="data-group"/>
    <ExerciseCategory class="data-group"/>
    <ExerciseMuscleGroups class="data-group"/>
    <ExerciseType class="data-group"/>
    <ExerciseNotes class="data-group"/>
    <AddExerciseButton/>
  </div>
  <button>tester</button>
</template>

<script>
import ExerciseName from '@/components/pages/AddExercise/ExerciseName.vue'
import ExerciseCategory from '@/components/pages/AddExercise/ExerciseCategory.vue'
import ExerciseMuscleGroups from '@/components/pages/AddExercise/ExerciseMuscleGroups.vue'
import ExerciseType from '@/components/pages/AddExercise/ExerciseType.vue'
import ExerciseNotes from '@/components/pages/AddExercise/ExerciseNotes.vue'
import AddExerciseButton from '@/components/pages/AddExercise/AddExerciseButton.vue'

export default {
  name: 'AddExercise',
  components: {
    ExerciseName,
    ExerciseCategory,
    ExerciseMuscleGroups,
    ExerciseType,
    ExerciseNotes,
    AddExerciseButton,
  },
  data() {
    return {

    }
  },
}
</script>

<style scoped lang="scss">
.add-exercise {
  @include form-layout
}
.data-group {
  display: flex;
  flex-direction: column;
  
  select {
    outline: none;
  }
}
</style>
