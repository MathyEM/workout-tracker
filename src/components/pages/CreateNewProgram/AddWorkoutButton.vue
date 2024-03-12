<template>
  <div class='add-workout'>
    <v-btn @click="addWorkout" class="plus-btn" block><span class="plus">+</span>Add Workout</v-btn>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

  export default {
    name: 'AddWorkoutButton',
    methods: {
      ...mapActions([
        "addWorkout",
      ]),
    }
  }
</script>

<style scoped lang='scss'>
span.plus {
  font-size: 1.5em;
  font-weight: lighter;
  line-height: 0.5em;
  padding-right: 0.25em;
}
</style>