<template>
  <div class="hero-head">
    <header class="nav">
      <div class="container">
        <div class="nav-left">
          <router-link to="/" class="nav-item">
            <img src="/static/app_logo.png" class="app-logo" /> <p class="app-logo-name">Crypto<span>Vue</span></p>
          </router-link>
        </div>
        <span class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div class="nav-right nav-menu">
          <span class="nav-item">
            <a class="button is-success is-inverted is-outlined" @click="toggleModal">
              <span>What's this?</span>
            </a>
          </span>
        </div>
      </div>
    </header>
    <div class="modal" :class="{'is-active': modalActive}">
      <div class="modal-background" @click="toggleModal"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <img src="/static/app_logo.png" class="modal-logo" />
            <p class="modal-card-title">CryptoVue</p>
          </header>
          <section class="modal-card-body">
            <div class="content">
              <p>Cryptocurrencies emerged in 2009 with Bitcoin and as of June 2017 - over 700 digital currencies exist with a total market capitalization greater than 100 billion USD. </p>
              <p>CryptoVue is a real time dashboard that displays the top 10 cryptocurrencies based on
              currency price, market captilization and overall circulating supply.</p>
              <p>Real time cryptocurrency data was obtained from the leading cryptocurrency resource <span>CoinMarketCap</span>.</p>
              <h3>Vue</h3>
              <img src="/static/vue_logo.png" class="modal-body-logo" id="vue-logo" />
              <p>As a weekend project, this application posed a great introduction in helping me understand the common concepts of Vue (reusable single-file components, vue-router, templating, etc.). Styling of the application was done with Bulma (a flexbox based CSS framework) and SASS. </p> <p>Feel free to head over to the project github page to see the entire application scaffold!</p>
            </div>
          </section>
          <footer class="modal-card-foot">
            <a class="button is-success">Save changes</a>
            <a class="button">Cancel</a>
          </footer>
        </div>
        <button class="modal-close is-large" @click="toggleModal"></button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'headerHero',
  data () {
    return {
      modalActive: false
    }
  },
  methods: {
    toggleModal () {
      this.modalActive = !this.modalActive
    }
  }
}
</script>

<style scoped lang="scss">
.nav {
  .nav-left {
    overflow-y: hidden;

    .app-logo {
      max-height: 35px;
    }
    .app-logo-name {
      font-size: 18px;
      color: #FFF;
      letter-spacing: 5px;
      padding-top: 2px;
    }
  }
}
.modal {
  .modal-card {
    .modal-card-head {
      display: block;
      background-color: #FFF;
      border-bottom: 0px;
      padding-bottom: 0px;

      .modal-logo {
        height: 80px;
        display: block;
        margin: 0 auto;
        margin-bottom: 10px;
      }

      .modal-card-title {
        font-size: 25px;
        letter-spacing: 5px;
      }
    }

    .modal-card-body {
      color: #000;
      padding: 15px 30px;
      padding-bottom: 20px;

      p {
        font-size: 15px;
      }

      h3 {
        color: #fd6721;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 5px;
      }

      .modal-body-logo {
        height: 80px;
      }

      #vue-logo {
        height: 60px;

        -webkit-animation-name: spinner; 
        -webkit-animation-timing-function: linear; 
        -webkit-animation-iteration-count: infinite; 
        -webkit-animation-duration: 30s; 
        animation-name: spinner; 
        animation-timing-function: linear; 
        animation-iteration-count: infinite; 
        animation-duration: 30s; 
        -webkit-transform-style: preserve-3d; 
        -moz-transform-style: preserve-3d; 
        -ms-transform-style: preserve-3d; 
        transform-style: preserve-3d;
      }
    }
  }
}

@-webkit-keyframes spinner { 
    from 
    { 
        -webkit-transform: rotateY(0deg); 
    } 
    to { 
        -webkit-transform: rotateY(-360deg); 
    } 
}
@keyframes spinner { 
    from { 
        -moz-transform: rotateY(0deg); 
        -ms-transform: rotateY(0deg); 
        transform: rotateY(0deg); 
    } 
    to 
    { 
        -moz-transform: rotateY(-360deg); 
        -ms-transform: rotateY(-360deg); 
        transform: rotateY(-360deg); 
    
    } 
}
</style>
