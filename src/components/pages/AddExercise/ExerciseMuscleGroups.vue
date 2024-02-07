<template>
<div class="muscle-groups">
  <label for="muscleGroups">Muscle Groups:</label>
  <template v-for="(muscle, index) in getMuscleGroups" :key="index">
    <div class="muscle-group">
    <input type="checkbox" :id="muscle.name" :value="muscle.name" :checked="muscle.checked" v-on:change="handleMuscleGroupCheck(index)">
    <label :for="muscle.name"> {{ muscle.name }}</label>
    </div>
    <template v-if="muscle.subGroups.length > 0">
      <div v-for="(subMuscle, subIndex) in muscle.subGroups" :key="subIndex" class="sub-muscle-group">
        <input type="checkbox" :id="subMuscle.name" :value="subMuscle.name" :checked="subMuscle.checked" v-on:change="handleMuscleGroupCheck(index, subIndex)">
        <label :for="subMuscle.name">- {{ subMuscle.name }}</label>
      </div>
    </template>
  </template>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'ExerciseMuscleGroups',
    computed: {
      ...mapGetters({
        getMuscleGroups: 'getMuscleGroups',
      }),
    },
    methods: {
      ...mapActions([
        'checkMuscleGroup',
      ]),
      handleMuscleGroupCheck(index, subIndex) {
        this.checkMuscleGroup({index, subIndex})
      },
    }
  }
</script>

<style scoped lang='scss'>
.muscle-groups {
  display: flex;
  flex-direction: column;
  user-select: none;
}
label {
  padding-left: 0.5em;
}
.muscle-group {
  font-weight: bold;
}
.sub-muscle-group {
  margin-left: 0.2em;
}
</style>