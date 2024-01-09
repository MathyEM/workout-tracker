<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <AddExercise />
    <ProgramList />
  </div>
</template>

<script>
// @ is an alias to /src
import AddExercise from '@/components/AddExercise.vue'
import ProgramList from '@/components/ProgramList.vue'

export default {
  name: 'HomeView',
  components: {
    AddExercise,
    ProgramList,
  }
}
</script>
<style lang="scss">
img {
  display: block;
  margin: auto;
}
</style>