<template>
  <div class="add-exercise">
    <button type="button" class="plus-btn">+</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
