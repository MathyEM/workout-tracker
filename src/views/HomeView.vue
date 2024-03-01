<template>
  <div class="home">
    <ProgramList />
    <CreateNewProgramDialog />
  </div>
</template>

<script>
// @ is an alias to /src
import ProgramList from '@/components/pages/HomeView/ProgramList.vue'
import CreateNewProgramDialog from '@/components/pages/HomeView/CreateNewProgramDialog.vue'

import { mapGetters } from 'vuex';

export default {
  name: 'HomeView',
  components: {
    ProgramList,
    CreateNewProgramDialog,
  },
  data() {
    return {
      
    }
  },
  computed: {
    ...mapGetters({
      categories: 'exercises/getExerciseCategories'
    }),
  }
}
</script>
<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow: auto;
}
</style>