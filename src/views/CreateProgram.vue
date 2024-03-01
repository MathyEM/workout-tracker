<template>
  <div class='create-program'>
    <h2>Create New Program</h2>
      <ProgramName/>
  </div>
</template>

<script>
import ProgramName from "@/components/pages/CreateNewProgram/ProgramName.vue";
  export default {
    name: 'CreateProgram',
    components: {
      ProgramName,
    }
  }
</script>

<style scoped lang='scss'>
  .create-program {
    @include form-layout
  }
</style>