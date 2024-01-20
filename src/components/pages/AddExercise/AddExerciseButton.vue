<template>
<button @click="addExercise">Add Exercise</button>
</template>

<script>
import { mapActions } from 'vuex';

  export default {
    name: 'AddExerciseButton',
    methods: {
      ...mapActions([
        'addExercise'
      ]),
    },
  }
</script>

<style scoped lang='scss'>

</style>