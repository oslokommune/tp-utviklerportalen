<template>
	<div class="Badetemp">
		<h1>Her kommer nøkkel visningen og badetemp vising</h1>
	</div>
</template>

<script>
import { BaseButton } from '@tuuturu/vue/buttons' // Knappene finnes her
import { TextInput } from '@tuuturu/vue/forms' // Skjema-komponenter her

export default {
	name: 'help',
	components: {
		BaseButton, TextInput
	},
	data: () => ({
		exampleText: 'Mye rar text'
	})
}
</script>

<style lang="scss" scoped>
@import '~@tuuturu/styling/style'; // Farger blir hentet herfra

.Badetemp {
	text-align: left;
}

.bold {
	font-weight: bold;
}

/*
 * Bruk av farger
 */
.exampleColor {
	padding: 1em;
	min-width: 9em;
	margin-right: 0.5em;
	display: inline-block;
}
#exampleRed {
	background-color: $red;
}
#examplePurple {
	background-color: $purple-visited;
	color: $grey-light;
}
#exampleGreen {
	background-color: $green;
}
#exampleBeige {
	background-color: $beige-dark;
}

#nav {

	a {
		color: #2c3e50;
		border-bottom: 0;

		&.router-link-exact-active {
			color: $red;
		}
	}
}
</style>
