<template>
	<div class="Interactive">
		<div class="illustration-container" v-if="!active">
			<div>
				<h3>Uten tilgang</h3>
				<img alt="sad person" src="https://via.placeholder.com/480x720" />
			</div>
			<div>
				<h3>Med tilgang</h3>
				<img alt="sad person" src="https://via.placeholder.com/480x720" />
			</div>
		</div>
	</div>
</template>


<script>
import { BaseButton } from '@tuuturu/vue/buttons'
export default {
	name: 'Interactive',
	components: {
		BaseButton
	},
	data: () => ({
		active: false,
	})
}
</script>

<style lang="scss" scoped>
.BaseButton {
	width: 50%;
}

.illustration-container {
	display: flex;

	justify-content: space-around;
}
</style>
