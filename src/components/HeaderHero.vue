<template>
  <div class="hero-head">
    <header class="nav">
      <div class="container">
        <div class="nav-left">
          <router-link to="/" class="nav-item">
            <img src="/static/app-logo.png" class="app-logo" /> <p class="app-logo-name">Crypto<span>Vue</span></p>
          </router-link>
        </div>
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
            <img src="/static/app-logo.png" class="modal-logo" />
          </header>
          <section class="modal-card-body">
            <div class="content">
              <h3> CryptoVue </h3>
              <p>Cryptocurrencies emerged in 2009 with the first decentralized cryptocurrency - Bitcoin. As of today - more than 700 digital currencies exist with a total market capitalization greater than 100 billion USD. </p>
              <p>CryptoVue is a real-time dashboard that displays the top 10 cryptocurrencies based on currency price, market captilization and overall circulating supply - obtained from the leading cryptocurrency resource <span>CoinMarketCap</span>.</p>
              <h3>Vue</h3>
              <img src="/static/vue_logo.png" class="modal-body-logo" id="vue-logo" />
              <p>Built as a weekend project, this application was a great introduction in  understanding the common concepts of Vue (reusable single-file components, vue-router, templating, etc.). </p>
              <p style="padding-bottom: 10px">Styling of the application was done with Bulma (a flexbox based CSS framework) and SASS. Head over to the my github page to see the entire scaffold and feel free to reach out with any comments/questions!</p>
              <a class="button is-success" @click="toggleModal">Return</a>
            </div>
          </section>
          <footer class="modal-card-foot">
            <div class="wallet-content">
              <p class="wallet-tag" @click="displayBTC">Have spare BTC? <span v-if="showBTCWallet" class="wallet-id">12M1xfsLLg3oaPmaa8Np2THVmgKjG7uGDb</span></p>
              <p class="wallet-tag" @click="displayETH">Have spare ETH? <span v-if="showETHWallet" class="wallet-id">0xc8D204007B241EA59e9Eac263e983CBDfb9367B4</span></p>
            </div>
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
      modalActive: false,
      showBTCWallet: false,
      showETHWallet: false
    }
  },
  methods: {
    toggleModal () {
      this.modalActive = !this.modalActive
    },
    displayBTC () {
      this.showBTCWallet = true
    },
    displayETH () {
      this.showETHWallet = true
    }
  }
}
</script>

<style scoped lang="scss">
.nav {
  -webkit-box-shadow: 0px 0px 0px 0px !important;
  box-shadow: 0px 0px 0px 0px !important;
  
  .nav-left {
    overflow-y: hidden;

    .app-logo {
      max-height: 35px;
      padding-right: 5px;
    }

    .app-logo-name {
      font-size: 18px;
      color: #FFF;
      letter-spacing: 5px;
      padding-top: 2px;
    }
  }

  .nav-right {
    .nav-item {
      .button {
        &:hover {
          color: #fd6721;
        }
      }
    }
  }
}
.modal {
  .modal-card {
    border-radius: 10px;

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
      padding: 0px 30px;
      padding-bottom: 20px;

      p {
        font-size: 15px;
      }

      h3 {
        color: #fd6721;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 10px;
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

      .is-success {
        background-color: #fd6721;
      }
    }

    .modal-card-foot {
      padding-bottom: 1px;
      background-color: transparent;

      .wallet-content {
        display: block;
        margin: 0 auto;
        font-size: 13px;
        padding-bottom: 15px;

        .wallet-tag {
          font-weight: 600;
          cursor: pointer;
          -o-transition: .5s;
          -ms-transition: .5s;
          -moz-transition: .5s;
          -webkit-transition: .5s;
          transition: .5s;

          &:hover {
            color: #fd6721;
          }
        }

        .wallet-id {
          color: #00d1b2;
        }
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
