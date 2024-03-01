<template>
	<div class="program-name">
		<v-text-field clearable label="Program name" variant="solo" v-model="name"></v-text-field>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
	name: 'ProgramName',
	computed: {
		...mapGetters({
			getProgramName: 'getProgramName',
		}),
		name: {
			get() {
				return this.getProgramName
			},
			set(newValue) {
				this.SET_PROGRAM_NAME(newValue)
			}
		},
	},
	methods: {
		...mapMutations([
			'SET_PROGRAM_NAME',
		]),
	}
}
</script>

<style scoped lang="scss">
.program-name {

}
</style>
  