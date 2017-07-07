<template>
  <div class="hero-head">
    <header class="nav">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item">
            <img src="/static/app_logo.png" class="app-logo" /> <p class="app-logo-name">Crypto-<span>Vuew</span></p>
          </a>
        </div>
        <span class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div class="nav-right nav-menu">
          <span class="nav-item">
            <a class="button is-success is-inverted is-outlined">
              <span>What's this?</span>
            </a>
          </span>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'headerHero',
  data () {
    return {
      msg: 'This is the header!'
    }
  }
}
</script>

<style scoped lang="scss">
.nav {
  .nav-left {
    overflow-y: hidden;

    .app-logo {
      max-height: 65px;
    }
    .app-logo-name {
      font-size: 18px;
      color: #FFF;
      letter-spacing: 5px;
      padding-top: 2px;
    }
  }
}
</style>
