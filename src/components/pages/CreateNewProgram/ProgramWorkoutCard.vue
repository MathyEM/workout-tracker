<template>
  <v-card class="program-workout-card">
    <v-card-title>{{ title || 'Training day' }}</v-card-title>
    <v-card-subtitle>
      <p v-if="exercises.length < 1">No exercises added yet</p>
      <ul v-else>
        <li v-for="(exercise, index) in exercises.slice(0, 5)" :key="index">{{ exercise.name }}</li>
      </ul>

    </v-card-subtitle>

    <v-card-actions class="card-actions">
      <v-btn
      @click="openDialog"
      text="Add exercises"
      rounded="lg"
      density="comfortable"
      variant="tonal"/>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapMutations } from 'vuex'

  export default {
    name: 'ProgramWorkoutCard',
    props: {
      title: String,
      exercises: Array,
      id: {
        type: Number,
        required: true
      },
    },
    methods: {
      openDialog() {
        this.SET_ADD_EXERCISE_DIALOG_ACTIVE_ID(this.id)
        this.SET_ADD_EXERCISE_DIALOG_IS_OPEN(true)
      },
      ...mapMutations([
        'SET_ADD_EXERCISE_DIALOG_IS_OPEN',
        'SET_ADD_EXERCISE_DIALOG_ACTIVE_ID',
      ])
    }
  }
</script>

<style scoped lang='scss'>
  ul {
    padding: inherit;
  }
</style>

<style lang='scss'>
  .program-workout-card .card-actions button span.v-btn__content {
    font-size: 0.8em;
  }
</style>