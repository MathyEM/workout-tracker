<template>
  <div class="add-exercise">
    <h2>Add New Exercise</h2>
    <label for="name">Name:</label>
    <input type="text" id="name" v-model="name" />
    <label for="category">Category:</label>
    <select id="category" v-model="category">
      <option v-for="(category, index) in categories" :key="index" :value="category">{{ category }}</option>
    </select>
    <div class="muscle-groups">
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
    <label for="type">Type:</label>
    <input type="text" id="type" v-model="type" />
    <label for="comment">Comment:</label>
    <input type="text" id="comment" v-model="comment" />
    <button @click="addExercise">Add Exercise</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AddExercise',
  data() {
    return {
      name: '',
      category: '',
      // muscleGroups: '',
      type: '',
      comment: ''
    }
  },
  computed: {
    ...mapGetters({
      categories: 'getExerciseCategories',
      muscleGroups: 'getMuscleGroups',
    }),
  },
  methods: {
    ...mapActions([
      'checkMuscleGroup'
    ]),
    handleMuscleGroupCheck(index, subIndex) {
      this.checkMuscleGroup({index, subIndex})
    }
  }
}
</script>

<style scoped lang="scss">
.add-exercise {
  
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
