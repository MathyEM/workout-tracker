<template>
  <div class="create-new-program">
    <v-btn class="plus-btn" color="primary" @click="dialog = true">
      <span class="plus">+</span>
      <h2>Create New Program</h2>
    </v-btn>
  </div>
  <v-dialog class="create-new-program" v-model="dialog" width="auto">
    <v-card max-width="400" title="Choose a name for you new program">
      <v-card-text>
        <ProgramName @keyup.enter="goToCreateProgram"/>
      </v-card-text>
      <v-card-actions>
        <v-btn text="Confirm" @click="goToCreateProgram"></v-btn>
        <v-btn text="Close" @click="dialog = false"></v-btn>
    </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import ProgramName from "@/components/pages/CreateNewProgram/ProgramName.vue"
export default {
  name: 'CreateNewProgramNameDialog',
  components: {
    ProgramName,
  },
  data() {
    return {
      dialog: false,
    }
  },
  methods: {
    goToCreateProgram() {
      this.dialog = false
      this.$router.push({ name: 'create-program' })
    },
  }
}
</script>

<style scoped lang='scss'>
.create-new-program {
  position: fixed;
  bottom: 0;
}
.create-new-program .plus-btn, .v-btn__content {
  --y-padding: 1.5rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border: none;
  color: white;
  padding-top: var(--y-padding);
  padding-bottom: var(--y-padding);
  user-select: none;

  span.plus {
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