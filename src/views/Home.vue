<template>
  <div class="home">
		<h1>Utviklerportalen</h1>
		<Profile />

		<h2>Martin</h2>
		<Martin />

		<h2>Jan Erik</h2>
		<JanErik />

		<Interactive />
  </div>
</template>

<script>
// @ is an alias to /src

import Martin from '../components/Martin'
import JanErik from '../components/JanErik'
import Profile from '../components/Profile'
import Interactive from '../components/Interactive'
export default {
  name: 'Home',
	components: { Interactive, Profile, JanErik, Martin }
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
