<template>
	<div class="Interactive">
		<BaseButton primary @click="active = true">Be om tilgang!</BaseButton>
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
		<div class="lockthing-container" v-if="active">
			<img :src="Key" draggable="true" @dragstart="drag"/>
			<div class="lock-and-data">
				<img alt="lock" :src="Lock" @drop="drop" @dragover="allowDrop"/>
				<iframe v-if="unlocked" src="https://www.yr.no/sted/Norge/Oslo/Oslo/Oslo/ekstern_boks_liten.html" width="180" height="322" frameborder="0" scrolling="no"/>
			</div>
		</div>
	</div>
</template>


<script>
import { BaseButton } from '@tuuturu/vue/buttons'
import Key from '@/assets/nøkkel.png'
import Lock from '@/assets/Group 35.png'

export default {
	name: 'Interactive',
	components: {
		BaseButton
	},
	data: () => ({
		Key,
		Lock,
		active: false,
		lockSrc: 'https://via.placeholder.com/180x302',
		unlocked: false,
		dragging: false
	}),
	methods: {
		drag(event) {
			this.dragging = true
			event.dataTransfer.setData('key', 'magic')
		},
		allowDrop(event) {
			event.preventDefault()
		},
		drop(event) {
			event.preventDefault()

			var data = event.dataTransfer.getData('key')

			if (data === 'magic') this.unlocked = true
			else this.dragging = false
		}
	}
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

.lock-and-data {
	display: flex;
	justify-content: center;
	border: 1px solid black;

	img {
		max-height: 302px;
	}
}
</style>
