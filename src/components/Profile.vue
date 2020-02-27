<template>
	<div class="Profile">
		<img alt="Team photo" src="../assets/Frame30.png" style="width: 50%" />
		<p>
			Utviklerportalen er et felles sted der virksomhetene i Oslo kommune kan finne tilgjengelige ressurser for utvikling av tjenester. I portalen kan du se en oversikt over tilgjengelige tjenester, dokumentasjon og retningslinjer. Blant annet kan du finne en API- og datakatalog som gir deg en oversikt over hvilke API-er og data som er tilgjengelig fra de ulike virksomhetene i kommunen. Som utvikler i Oslo kommune har du tilgang til alle API-ene, og kan bruke disse fritt til å lage nye tjenester.
		</p>
	</div>
</template>

<script>
export default {
	name: 'Profile'
}
</script>

<style lang="scss" scoped>
.Profile {
	display: flex;

	justify-content: space-between;
	align-items: center;

	flex-grow: 1;
}
</style>
