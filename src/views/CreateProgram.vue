<template>
  <div class='create-program'>
    <h2>Create New Program</h2>
      <ProgramName/>
      <ProgramDescription/>
      <AddNewProgramDayButton/>
  </div>
</template>

<script>
import ProgramName from "@/components/pages/CreateNewProgram/ProgramName.vue"
import ProgramDescription from "@/components/pages/CreateNewProgram/ProgramDescription.vue"
import AddNewProgramDayButton from "@/components/pages/CreateNewProgram/AddNewProgramDayButton.vue"

  export default {
    name: 'CreateProgram',
    components: {
      ProgramName,
      ProgramDescription,
      AddNewProgramDayButton,
    }
  }
</script>

<style scoped lang='scss'>
  .create-program {
    @include form-layout
  }
</style>