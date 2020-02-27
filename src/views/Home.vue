<template>
  <div class="home">
		<h1>Værsego'! Lag magi</h1>

		<h2>Martin</h2>
		<Martin />

		<h2>Jan Erik</h2>
		<JanErik />
  </div>
</template>

<script>
// @ is an alias to /src

import Martin from '../components/Martin'
import JanErik from '../components/JanErik'
export default {
  name: 'Home',
	components: { JanErik, Martin }
}
</script>

<style lang="scss" scoped>
p {
	font-family: 'Oslo Sans', Avenir, Helvetica, Arial, sans-serif;
}
p.old {
	font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
