<template>
  <div class='add-new-program-day-button'>
    <v-btn @click="addProgramWorkout" class="plus-btn" block><span class="plus">+</span>Add Training Day</v-btn>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

  export default {
    name: 'AddNewProgramDayButton',
    methods: {
      ...mapActions([
        "addProgramWorkout",
      ]),
    }
  }
</script>

<style scoped lang='scss'>
span.plus {
  font-size: 1.5em;
  font-weight: lighter;
  line-height: 0.5em;
}
</style>