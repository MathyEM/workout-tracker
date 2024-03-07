<template>
  <div class='create-program'>
    <h2>Create New Program</h2>
    <ProgramName/>
    <ProgramDescription/>
    <AddNewProgramDayButton/>
    <ProgramTrainingDayCard :exercises="exercises" title=""/>
  </div>
</template>

<script>
import ProgramName from "@/components/pages/CreateNewProgram/ProgramName.vue"
import ProgramDescription from "@/components/pages/CreateNewProgram/ProgramDescription.vue"
import AddNewProgramDayButton from "@/components/pages/CreateNewProgram/AddNewProgramDayButton.vue"
import ProgramTrainingDayCard from "@/components/pages/CreateNewProgram/ProgramTrainingDayCard.vue"

  export default {
    name: 'CreateProgram',
    components: {
      ProgramName,
      ProgramDescription,
      AddNewProgramDayButton,
      ProgramTrainingDayCard,
    },
    data() {
      return {
        exercises: [ {name: 'Lat Pulldown' } ]
      }
    }
  }
</script>

<style scoped lang='scss'>
  .create-program {
    @include form-layout
  }
</style>