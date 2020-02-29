<template>
	<div class="Interactive">
		<div class="illustration-container" v-if="!active">
			<div class="person">
				<h3>Uten tilgang til APIer</h3>
				<img alt="sad person" :src="Trist" />
			</div>
			<div class="person">
				<h3>Med tilgang til APIer</h3>
				<img alt="happy person" :src="Glad" />
			</div>
		</div>
		<div class="lockthing-container" v-if="active">
			<img v-if="!unlocked" class="key" :src="Key" draggable="true" @dragstart="drag"/>

			<div class="lock-and-data">
				<img alt="lock" :src="Lock" @drop="drop" @dragover="allowDrop"/>
				<iframe v-if="unlocked" src="https://www.yr.no/sted/Norge/Oslo/Oslo/Oslo/ekstern_boks_liten.html" width="180" height="322" frameborder="0" scrolling="no"/>
			</div>
		</div>
	</div>
</template>


<script>
import { BaseButton } from '@oslokommune/vue/buttons'
import Key from '@/assets/nøkkel.png'
import Lock from '@/assets/Group 35.png'
import Trist from '@/assets/trist.png'
import Glad from '@/assets/glad.png'

export default {
	name: 'Interactive',
	components: {
		BaseButton
	},
	props: {
		active: Boolean
	},
	data: () => ({
		Key,
		Lock,
		Glad,
		Trist,
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

	max-height: 32em;

	img {
		max-height: 32em;
	}
}

.lock-and-data {
	display: flex;
	justify-content: center;

	img {
		max-height: 302px;
	}
}

.key {
	height: 120px;
}
</style>
