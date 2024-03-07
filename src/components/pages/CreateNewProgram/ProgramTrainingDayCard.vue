<template>
  <v-card>
    <v-card-title>{{ title || 'Training day' }}</v-card-title>
    <v-card-subtitle>
      <p v-if="exercises.length < 1">No exercises added yet</p>
      <ul v-else>
        <li v-for="(exercise, index) in exercises.slice(0, 5)" :key="index">{{ exercise.name }}</li>
      </ul>

    </v-card-subtitle>

    <v-card-actions class="card-actions">
      <v-btn icon="mdi-pencil" rounded="lg" density="comfortable"/>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: 'ProgramTrainingDayCard',
    props: {
      title: String,
      exercises: Array,
    },
  }
</script>

<style scoped lang='scss'>
  ul {
    padding: inherit;
  }
</style>