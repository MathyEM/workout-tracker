<template>
  <div class="add-exercise">
    <button type="button" class="plus-btn">
      <span>+</span>
      <h2>Create New Program</h2>
    </button>
  </div>
</template>

<script>
export default {
  name: 'AddExercise',
}
</script>

<style scoped lang="scss">
.add-exercise {
  display: inline-block;
  width: auto;
  background-color: $blue;
  position: absolute;
  bottom: 0;
}
.plus-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border: none;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  transition: text-shadow 150ms ease-out;
  margin: 10px 0;
  user-select: none;

  span {
    font-size: 3.75rem;
    line-height: 0.5em;
  }

  * {
    margin: 0;
  }
}
.plus-btn:active {
  text-shadow: 0px 0px 0px rgb(0 0 0 / 20%);
}

</style>
