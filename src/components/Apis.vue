<template>
	<div class="Apis">
		<ul>
			<li class="list-item">
				<div class="list-item-div">
					<div class="list-item-image">
						<img style="width: 170px; height: 140px;" alt="badetempratur"
							 src="../assets/badetemperatur.png" />
					</div>
					<div class="list-item-text">
						<h4>Badetempratur API</h4>
						<p>Dette er Oslo kommunes badetempratur API. Med dette API-et kan du sjekke kommunens siste
							vanntempraturmålinger fra badeplasser i Oslo området. Er du tøff nok til å la være å
							sjekke tempraturen før du bader?</p>
					</div>
					<div class="list-item-button">
						<BaseButton primary @click="$emit('setActive')" style="margin: 1em 0 1em 0;">Prøv</BaseButton>
					</div>
				</div>
			</li>
			<li>
				<div class="list-item-div">
					<div class="list-item-image">
						<img style="width: 170px; height: 140px;" alt="badetempratur"
							 src="../assets/sms.png" />
					</div>
					<div class="list-item-text">
						<h4>SMS API</h4>
						<p>Dette API-et gir mulighet til å sende SMS fra Oslo kommune. Har du et behov for å sende
							sms fra tjenesten din?</p>
					</div>
					<div class="list-item-button">
						<BaseButton primary style="margin: 1em 0 1em 0;">Prøv</BaseButton>
					</div>
				</div>
			</li>
			<li>
				<div class="list-item-div">
					<div class="list-item-image">
						<img style="width: 170px; height: 140px;" alt="badetempratur"
							 src="../assets/epost.png" />
					</div>
					<div class="list-item-text">
						<h4>Epost API</h4>
						<p>Dette API-et gir mulighet til å sende epost fra Oslo kommune. Har du et behov for å sende
							epost fra tjenesten din?</p>
					</div>
					<div class="list-item-button">
						<BaseButton primary style="margin: 1em 0 1em 0;">Prøv</BaseButton>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import { BaseButton } from '@oslokommune/vue/buttons'
	import {TextInput} from "@oslokommune/vue/forms"; // Knappene finnes her

	export default {
		name: 'Apis',
		components: {
			BaseButton
		},

	}
</script>

<style lang="scss" scoped>

@import '~@oslokommune/styling/style'; // Farger blir hentet herfra

.Apis {
	width: 100%;
	display: flex;
	justify-content: center;
	margin-bottom: 3em;
}

.list-item-text {
	margin: 1em;
}

	.list-item-div {
		display: flex;
		text-align: left;
	}

	.list-item-button {
		margin-left: 2em;
		margin-top: 2em;
	}

	li {
		margin-bottom: 1em;
	}
</style>
