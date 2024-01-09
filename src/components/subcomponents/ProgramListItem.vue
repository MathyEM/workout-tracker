<template>
  <div class='program-list-item'>
    <h2 class="program-title">Program Title</h2>
    <p class="training-days-count">Number of training days: <span>3</span></p>
    <p class="exercises-days-count">Unique exercises: <span>32</span></p>
    <div class="program-buttons">
      <button type="button" class="edit">Edit</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProgramListItem',
  }
</script>

<style scoped lang='scss'>
  .program-list-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.2em;
    border: 1px solid $dark-blue;
    border-radius: 2px;
    padding: 0.5em;
    width: fit-content;
  }
  .program-title, .training-days-count, .exercises-days-count {
    margin: 0;
    color: $blue;
  }

  .program-title {
    color: $dark-blue;
  }
</style>