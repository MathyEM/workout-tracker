<template>
    <div class="program-description">
		<v-textarea
      clearable
      counter
      no-resize
      label="Program description"
      variant="solo"
      :model-value=description>
    </v-textarea>
    </div>
  </template>
  
  <script>
import { mapGetters, mapMutations } from 'vuex';

  export default {
    name: 'ProgramDescription',
    computed: {
      ...mapGetters({
        getProgramDesciption: 'getProgramDesciption',
      }),
      description: {
        get() {
          return this.getProgramDesciption
        },
        set(newValue) {
          this.SET_PROGRAM_DESCRIPTION(newValue)
        }
      },
    },
    methods: {
      ...mapMutations([
        'SET_PROGRAM_DESCRIPTION',
      ]),
    }
  }
  </script>
  
  <style scoped lang="scss">

  </style>
  