<template>
  <div id="app">
    <page/>
    <Animation/>
    <Nav/>
  </div>
</template>

<script>

import Animation from './component/secretaryPageStyle2'
import page from './component/secretaryPageStyle1'
import Nav from './component/Nav'
export default {
  components: {
    Animation,
    page,
    Nav
  },
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}


</style>
