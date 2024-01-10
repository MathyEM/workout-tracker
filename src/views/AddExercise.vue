<template>
  <div class="add-exercise">
    <h2>Add New Exercise</h2>
    <div class="data-group exercise-name">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" />
    </div>
    <div class="data-group exercise-category">
      <label for="category">Category:</label>
      <select id="category" v-model="exerciseCategory">
        <option selected disabled>Please select exercise category</option>
        <option v-for="(category, index) in exerciseCategories" :key="index" :value="index">{{ category }}</option>
      </select>
    </div>
    <div class="data-group muscle-groups">
      <label for="muscleGroups">Muscle Groups:</label>
      <template v-for="(muscle, index) in muscleGroups" :key="index">
        <div class="muscle-group">
        <input type="checkbox" :id="muscle.name" :value="muscle.name" :checked="muscle.checked" v-on:change="handleMuscleGroupCheck(index)">
        <label :for="muscle.name">{{ muscle.name }}</label>
        </div>
        <template v-if="muscle.subGroups.length > 0">
          <div v-for="(subMuscle, subIndex) in muscle.subGroups" :key="subIndex" class="sub-muscle-group">
            <input type="checkbox" :id="subMuscle.name" :value="subMuscle.name" :checked="subMuscle.checked" v-on:change="handleMuscleGroupCheck(index, subIndex)">
            <label :for="subMuscle.name"> - {{ subMuscle.name }}</label>
          </div>
        </template>
      </template>
    </div>
    <div class="data-group exercise-type">
      <label for="type">Type:</label>
      <select id="type" v-model="exerciseType">
        <option selected disabled>Please select exercise type</option>
        <option v-for="(type, index) in exerciseTypes" :key="index" :value="index">{{ type }}</option>
      </select>
    </div>
    <div class="data-group exercise-notes">
      <label for="notes">Notes:</label>
      <input type="text" id="notes" v-model="notes" />
    </div>
    <button @click="addExercise">Add Exercise</button>
  </div>
  <button @click="tester()">tester</button>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  name: 'AddExercise',
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters({
      exerciseCategories: 'getExerciseCategories',
      muscleGroups: 'getMuscleGroups',
      exerciseTypes: 'getExerciseTypes',
      getExerciseName: 'getExerciseName',
      getExerciseCategory: 'getExerciseCategory',
      getExerciseType: 'getExerciseType',
      getExerciseNotes: 'getExerciseNotes',
      getExercises: 'getExercises'
    }),
    name: {
      get() {
        return this.getExerciseName
      },
      set(newValue) {
        this.SET_EXERCISE_NAME(newValue)
      }
    },
    exerciseCategory: {
      get() {
        return this.getExerciseCategory
      },
      set(newValue) {
        this.handleExerciseCategorySelect(newValue)
      }
    },
    exerciseType: {
      get() {
        return this.getExerciseType
      },
      set(newValue) {
        this.handleExerciseTypeSelect(newValue)
      }
    },
    notes: {
      get() {
        return this.getExerciseNotes
      },
      set(newValue) {
        this.SET_EXERCISE_NOTES(newValue)
      }
    },
  },
  methods: {
    ...mapActions([
      'checkMuscleGroup',
      'addExercise'
    ]),
    ...mapMutations([
      'SET_EXERCISE_NAME',
      'SET_EXERCISE_CATEGORY',
      'SET_EXERCISE_TYPE',
      'SET_EXERCISE_NOTES',
    ]),
    handleMuscleGroupCheck(index, subIndex) {
      this.checkMuscleGroup({index, subIndex})
    },
    handleExerciseCategorySelect(value) {
      this.SET_EXERCISE_CATEGORY(value)
    },
    handleExerciseTypeSelect(value) {
      this.SET_EXERCISE_TYPE(value)
    },
  },
}
</script>

<style scoped lang="scss">
.add-exercise {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}
.data-group {
  display: flex;
  flex-direction: column;
  
  select {
    outline: none;
  }
}
.muscle-groups {
  display: flex;
  flex-direction: column;
  user-select: none;
}
.muscle-group {
  font-weight: bold;
}
.sub-muscle-group {
  margin-left: 0.2em;
}
</style>
