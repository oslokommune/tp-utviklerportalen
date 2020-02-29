<template>
	<div class="Martin">
		<h2>Jeg trenger hjelp!</h2>
		<div style="alignment: center; margin-bottom: 1em;">
			<span>Her kan du sende en melding til teamets slack kanal.</span>
		</div>

		<div class="input-container">
			<div class="wrapper">
				<input type="text" v-model="message" placeholder="Skriv din melding her" />
				<br/>
				<BaseButton primary v-on:click="post_to_slack">Send melding til Utviklerportalen</BaseButton>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'

import { BaseButton } from '@oslokommune/vue/buttons'
import { TextInput } from '@oslokommune/vue/forms'

export default {
	name: 'Martin',
	components: { BaseButton, TextInput },
	data: () => ({
		message: ''
	}),
	methods: {
		post_to_slack: function () {
			const url = 'https://slacker-hackathon.herokuapp.com/slack'

			axios.post(url, JSON.stringify({text: this.message}))
		}
	}
}
</script>

<style lang="scss" scoped>
@import '~@oslokommune/styling/style';

.Martin {
	width: 100%;
	padding-top: 3em;
	padding-bottom: 3em;

	display: flex;
	flex-direction: column;
	justify-content: center;
}

.input-container {
	width: 100%;
	display: flex;
	justify-content: center;

	.wrapper {
		width: 25%;
	}

	input {
		width: 100%;
		min-height: 2.6em;
		border: 2px solid $blue-dark;
		line-height: inherit;
		outline: 0;
		padding: 10px 10px 10px 13px;
		font-size: 18pt;
		font-weight: 300;

		margin-bottom: 1em;
	}

	input:focus {
		outline: 4px solid $blue-hover;
	}

	.BaseButton {
		width: 100%;
	}
}
</style>
