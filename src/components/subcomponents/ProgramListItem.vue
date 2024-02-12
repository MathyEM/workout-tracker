<template>
  <v-card class='program-list-item'>
    <v-card-title>Program Title</v-card-title>
    <v-card-subtitle>
      <p class="training-days-count">Number of training days: <span>3</span></p>
      <p class="exercises-days-count">Unique exercises: <span>32</span></p>
    </v-card-subtitle>
    <v-card-actions class="card-actions">
      <v-btn icon="mdi-pencil" rounded="lg" density="comfortable"></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: 'ProgramListItem',
  }
</script>

<style scoped lang='scss'>

</style>