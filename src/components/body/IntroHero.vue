<template>
  <div class="intro-section">
    <img src="/static/app_logo.png" class="app-logo" />
    <p class="title">Crypto<span>Vue</span></p>
    <p class="sub-title">A real-time visual dashboard of the top ten cryptocurrencies based on market cap, price and volume.</p>
    <router-link to="/main" class="button is-primary">Start</router-link>
  </div>
</template>

<script>
export default {
  name: 'introHero',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
.intro-section {
  color: #FFF;

  .app-logo {
    height: 200px;
  }

  .title {
    font-size: 55px;
    letter-spacing: 5px;
    margin: 12px;

    span {
      color: #fd6721;
    }
  }

  .sub-title {
    font-size: 17px;
    line-height: 1.65;
    margin-bottom: 25px;
  }

  .button {
    width: 100px;
  }
}
</style>
