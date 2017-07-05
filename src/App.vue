<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
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

  background: #333;
  background: -webkit-linear-gradient(left top, #024, #402);
  background: -moz-linear-gradient(bottom right, #024, #402);
  background: linear-gradient(to bottom right, #024, #402);
}
</style>
