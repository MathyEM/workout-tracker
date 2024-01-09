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
  background-color: $blue;
  position: fixed;
  bottom: 0;
}

.plus-btn {
  --animation-speed: 100ms;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border: none;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  box-shadow: 0px -1px 2px 0px rgba(0, 0, 0, 0.33);
  transition: text-shadow var(--animation-speed) ease-out, box-shadow var(--animation-speed) ease-out;
  padding-top: 10px;
  padding-bottom: 10px;
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
  text-shadow: 0px 0px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.33);
}

</style>
