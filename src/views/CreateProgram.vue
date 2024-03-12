<template>
  <div class='create-program'>
    <h2>Create New Program</h2>
    <ProgramName/>
    <ProgramDescription/>
    <AddWorkoutButton/>
    <template v-for="(workout, index) in getWorkouts" :key="index">
      <ProgramWorkoutCard :exercises="workout.exercises" :id="index" title=""/>
    </template>
    <EditWorkoutDialog/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import ProgramName from "@/components/pages/CreateNewProgram/ProgramName.vue"
import ProgramDescription from "@/components/pages/CreateNewProgram/ProgramDescription.vue"
import AddWorkoutButton from "@/components/pages/CreateNewProgram/AddWorkoutButton.vue"
import ProgramWorkoutCard from "@/components/pages/CreateNewProgram/ProgramWorkoutCard.vue"
import EditWorkoutDialog from '@/components/pages/CreateNewProgram/EditWorkoutDialog.vue'

  export default {
    name: 'CreateProgram',
    components: {
      ProgramName,
      ProgramDescription,
      AddWorkoutButton,
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
        "getWorkouts",
      ])
    }
  }
</script>

<style scoped lang='scss'>
  .create-program {
    @include form-layout
  }
</style>