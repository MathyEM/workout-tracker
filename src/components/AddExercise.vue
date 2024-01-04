<template>
  <div class="add-exercise">
    <button type="button" class="plus-btn">+</button>
  </div>
</template>

<script>
export default {
  name: 'AddExercise',
}
</script>

<style scoped lang="scss">
.add-exercise {
  // border: 1px solid $main-black;
  display: inline-block;
  width: auto;
}
.plus-btn {
  background-color: transparent;
  border: none;
  font-size: 5rem;
  color: $blue;
}
</style>
