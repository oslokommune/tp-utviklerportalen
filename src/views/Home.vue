<template>
  <div class="home">
		<h1>Utviklerportalen</h1>
		<Profile />

		<br /><br />
		<div class="api-text">
			<div class="wrapper">
				<h2>API</h2>
				<p>
					Et API er en strukturert måte å overføre data fra ett sted til et annet, det vil si en enkel måte å dele og ta i bruk data fra de ulike virksomhetene i kommunen. Om du velger å dele et API i katalogen vil du kunne holde oversikt over både hvor mange det er som bruker det i tillegg til å kunne styre hvem som skal ha tilgang til API-et. For de som vil benytte seg av et eller flere API fra katalogen inneholder de all dokumentasjonen som man trenger for å ta det i bruk.
				</p>
			</div>
		</div>
		<br /><br />

		<h2>Apier</h2>
		<Apis @setActive="active = true"/>

		<br /><br />
		<Interactive :active="active" />

		<br /><br />
		<Martin />

	</div>
</template>

<script>
// @ is an alias to /src

import Martin from '../components/Martin'
import Apis from '../components/Apis'
import Profile from '../components/Profile'
import Interactive from '../components/Interactive'
export default {
  name: 'Home',
	components: { Interactive, Profile, Apis, Martin },
	data: () => ({
		active: false
	})
}
</script>

<style lang="scss" scoped>
p {
	font-family: 'Oslo Sans', Avenir, Helvetica, Arial, sans-serif;
}

.Profile {
	width: 100%;
}

.api-text {
	width: 100%;

	display: flex;
	justify-content: center;

	div {

	}
}
</style>
