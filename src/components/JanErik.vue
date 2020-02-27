<template>
	<div class="JanErik">
		<ul>
			<li class="list-item">
				<div class="list-item-div">
					<div class="list-item-image">
						<img alt="clippy" src="https://media.giphy.com/media/13V60VgE2ED7oc/giphy.gif" />
					</div>
					<div class="list-item-text">
						<h2>Badetempratur API</h2>
						<p>Dette API-et lar deg hente de siste målingene av vanntempratur i Oslo.</p>
					</div>
					<div class="list-item-button">
						<BaseButton primary style="margin: 1em 0 1em 0;">Prøv</BaseButton>
					</div>
				</div>
			</li>
			<li>
				<div class="list-item-div">
					<div class="list-item-image">
						<img alt="clippy" src="https://media.giphy.com/media/13V60VgE2ED7oc/giphy.gif" />
					</div>
					<div class="list-item-text">
						<h2>SMS API</h2>
						<p>Dette API-et gir mulighet til å sende SMS fra Oslo kommune.</p>
					</div>
					<div class="list-item-button">
						<BaseButton primary style="margin: 1em 0 1em 0;">Prøv</BaseButton>
					</div>
				</div>
			</li>
			<li>
				<div class="list-item-div">
					<div class="list-item-image">
						<img alt="clippy" src="https://media.giphy.com/media/13V60VgE2ED7oc/giphy.gif" />
					</div>
					<div class="list-item-text">
						<h2>Epost API</h2>
						<p>Dette API-et gir mulighet til å sende epost fra Oslo kommune.</p>
					</div>
					<div class="list-item-button">
						<BaseButton primary @click="$router.push('Badetemp')" style="margin: 1em 0 1em 0;">Prøv</BaseButton>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import { BaseButton } from '@tuuturu/vue/buttons'
	import {TextInput} from "@tuuturu/vue/forms"; // Knappene finnes her

	export default {
		name: 'JanErik',
		components: {
			BaseButton
		},

	}
</script>

<style lang="scss" scoped>

@import '~@tuuturu/styling/style'; // Farger blir hentet herfra

.Inspiration {
	text-align: left;
}

	.list-item-div {
		display: flex;
	}

	.list-item-button {
		margin-left: 2em;
	}
</style>
