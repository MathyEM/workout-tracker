<template>
  <!-- <v-card>
    <v-card-title>Select Exercise</v-card-title> -->
    <v-list open-strategy="multiple">
      <v-list-group v-for="(category, index) in categories" :key="index" :value="category.name">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            :title="category.name"
          ></v-list-item>
        </template>
        <v-list-item 
        v-for="(exercise, index) in getCategorizedExercises[category.name]" :key="index"
        :value="exercise.name"
        :title="exercise.name"
        ></v-list-item>
      </v-list-group>
    </v-list>
    <!-- <v-card-actions>
      <v-btn text="Save"/>
      <v-btn text="Cancel" @click="closeDialog"/>
    </v-card-actions> -->
  <!-- </v-card> -->
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

  export default {
    name: 'AddExerciseDialog',
    computed: {
      ...mapGetters([
        "getExerciseCategories",
        "getCategorizedExercises",
      ]),
      ...mapState({
        categories: state => state.exercises.exerciseCategories
      })
    },
    methods: {
      ...mapActions([
        "fetchCategoryExercises",
      ])
    },
  }
</script>

<style scoped lang='scss'>

</style>