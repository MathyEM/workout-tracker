<template>
  <div class='program-list'>
    <ProgramListItem />
    <ProgramListItem />
    <ProgramListItem />
  </div>
</template>

<script>
import ProgramListItem from '@/components/subcomponents/ProgramListItem.vue'

  export default {
    name: 'ProgramList',
    components: {
      ProgramListItem,
    }
  }
</script>

<style scoped lang='scss'>
  .program-list {
    display: grid;
    grid-template-columns: 1fr;
    align-content: center;
    justify-content: center;
    gap: 1rem;
    width: fit-content//clamp(200px, 70vw, 400px);
  }
</style>