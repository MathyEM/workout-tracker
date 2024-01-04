<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <AddExercise />
  </div>
</template>

<script>
// @ is an alias to /src
import AddExercise from '@/components/AddExercise.vue'

export default {
  name: 'HomeView',
  components: {
    AddExercise
  }
}
</script>
<style lang="scss">
img {
  display: block;
  margin: auto;
}
</style>