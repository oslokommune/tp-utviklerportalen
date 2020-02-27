<template>
  <div class="home">
		<h1>Utviklerportalen</h1>
		<Profile />

		<h2>Jeg trenger hjelp!</h2>
		<Martin />

		<h2>Apier</h2>
		<Apis />

		<Interactive />
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
	components: { Interactive, Profile, Apis, Martin }
}
</script>

<style lang="scss" scoped>
p {
	font-family: 'Oslo Sans', Avenir, Helvetica, Arial, sans-serif;
}

.Profile {
	width: 100%;
}
</style>
