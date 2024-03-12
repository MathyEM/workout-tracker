<template>
  <div class='create-program'>
    <h2>Create New Program</h2>
    <ProgramName/>
    <ProgramDescription/>
    <AddNewProgramDayButton/>
    <template v-for="(Workout, index) in getProgramWorkouts" :key="index">
      <ProgramWorkoutCard :exercises="Workout.exercises" :id="index" title=""/>
    </template>
    <EditWorkoutDialog/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import ProgramName from "@/components/pages/CreateNewProgram/ProgramName.vue"
import ProgramDescription from "@/components/pages/CreateNewProgram/ProgramDescription.vue"
import AddNewProgramDayButton from "@/components/pages/CreateNewProgram/AddNewProgramDayButton.vue"
import ProgramWorkoutCard from "@/components/pages/CreateNewProgram/ProgramWorkoutCard.vue"
import EditWorkoutDialog from '@/components/pages/CreateNewProgram/EditWorkoutDialog.vue'

  export default {
    name: 'CreateProgram',
    components: {
      ProgramName,
      ProgramDescription,
      AddNewProgramDayButton,
      ProgramWorkoutCard,
      EditWorkoutDialog,
    },
    data() {
      return {
        exercises: [ {name: 'Lat Pulldown' } ]
      }
    },
    computed: {
      ...mapGetters([
        "getProgramWorkouts",
      ])
    }
  }
</script>

<style scoped lang='scss'>
  .create-program {
    @include form-layout
  }
</style>