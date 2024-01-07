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
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border: none;
  font-size: 3.75rem;
  color: $blue;
  text-shadow: 1px 1px 1px rgb(0 0 0 / 20%);
  transition: text-shadow 150ms ease-out;
}
.plus-btn:active {
  text-shadow: 0px 0px 0px rgb(0 0 0 / 20%);
}
.plus-btn::after {
  content: "Create New Program";
  font-size: 0.5em;
  margin-top: -0.6em;
}
</style>
