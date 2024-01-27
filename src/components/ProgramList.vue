<template>
  <div class='program-list'>
    <ProgramListItem />
    <ProgramListItem />
    <ProgramListItem />
    <ProgramListItem />
    <ProgramListItem />
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
    justify-items: center;
    gap: 1rem;
    width: 100%;
    padding: 1rem;
  }
</style>