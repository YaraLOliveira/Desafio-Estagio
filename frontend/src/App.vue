<template>
  <div id="app">
    <Menu></Menu>
    <router-view/>
  </div>
</template>

<script>
import Menu from './components/Menu'

export default {
  components: {
    Menu
  },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* background-color: #4BBF3B; */
}
</style>
