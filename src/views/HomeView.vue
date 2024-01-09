<template>
  <div class="home">
    <ProgramList />
    <AddExercise />
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
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>