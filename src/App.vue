<template>
  <div id="app">
    <hero></hero>
  </div>
</template>

<script>
import Hero from './components/Hero'

export default {
  name: 'app',
  components: {
    Hero
  }
}
</script>

<style lang="css">
@import '../node_modules/bulma/css/bulma.css';

html, body {
  height: 100%;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFF;
  height: 100%;
}
</style>
