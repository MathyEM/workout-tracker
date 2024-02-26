<template>
  <div class="home">
    <!-- <p>{{ categories[0] }}</p> -->
    <ProgramList />
    <CreateNewProgramNameDialog />
  </div>
</template>

<script>
// @ is an alias to /src
import ProgramList from '@/components/ProgramList.vue'
import CreateNewProgramNameDialog from '@/components/pages/CreateNewProgram/CreateNewProgramNameDialog.vue'

import { mapGetters } from 'vuex';

export default {
  name: 'HomeView',
  components: {
    ProgramList,
    CreateNewProgramNameDialog,
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