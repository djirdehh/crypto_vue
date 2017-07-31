<template>
  <div class="hero-head">
    <header class="nav" :class="{'nav-iframe': isOpenedInIFrame}">
      <div class="container">
        <div class="nav-left">
          <router-link to="/" class="nav-item" :class="{'hide': isOpenedInIFrame}">
            <img src="/static/app-logo.png" class="app-logo" /> <p class="app-logo-name">Crypto<span>Vue</span></p>
          </router-link>
        </div>
        <div class="nav-right nav-menu">
          <span class="nav-item">
            <img src="/static/app-logo.png" class="iframe-app-logo" :class="{'show': isOpenedInIFrame}"/>
            <a class="button is-success is-inverted is-outlined" :class="{'hide': isOpenedInIFrame}" @click="toggleModal">
              <span>What's this?</span>
            </a>
          </span>
        </div>
      </div>
    </header>
    <div class="modal" :class="{'is-active': modalActive}">
      <div class="modal-background" @click="toggleModal"></div>
        <div class="modal-card">
          <header class="modal-card-head"></header>
          <section class="modal-card-body">
            <div class="content">
              <h3> CryptoVue </h3>
              <img src="/static/app-logo.png" class="modal-body-logo" id="app-logo"/>
              <p>Cryptocurrencies emerged in 2009 with the first decentralized cryptocurrency - <a href="https://bitcoin.org/en/" target="_blank">Bitcoin</a>. As of today - more than 700 digital currencies exist with a total market capitalization greater than 100 billion USD. </p>
              <p><a target="_blank">CryptoVue</a> is a real-time dashboard that displays the top 10 cryptocurrencies based on currency price, market capitalization and overall circulating supply - obtained from the leading cryptocurrency resource <a href="https://coinmarketcap.com/" target="_blank">CoinMarketCap</a>.</p>
              <h3>Vue</h3>
              <img src="/static/vue_logo.png" class="modal-body-logo" id="vue-logo" />
              <p>Built as a weekend project, this was a great introduction in  understanding the common concepts of <a href="https://vuejs.org/" target="_blank">Vue</a> (reusable single-file components, vue-router, templating, etc.). </p>
              <p style="padding-bottom: 10px">Styling of the application was done with <a href="http://bulma.io/" target="_blank">Bulma</a> (Flexbox based CSS framework) and SASS. Head over to the my <a href="https://github.com/djirdehh/crypto_vue" target="_blank">github page</a> to see the entire scaffold and feel free to reach out with any comments/questions!</p>
            </div>
          </section>
          <footer class="modal-card-foot">
            <div class="content has-text-centered">
              <div class="footer-title">Hassan Djirdeh | <icon name="calendar" height="12"></icon> 2017</div>
              <div class="footer-social-media">
                <a class="icon" href="http://hassandjirdeh.com" target="_blank">
                  <icon name="h-square" scale="2"></icon>
                </a>
                <a class="icon" href="https://github.com/djirdehh" target="_blank">
                  <icon name="github-square" scale="2"></icon>
                </a>
                 <a class="icon" href="https://ca.linkedin.com/in/hassandjirdeh" target="_blank">
                  <icon name="linkedin-square" scale="2"></icon>
                </a>
                <a class="icon" href="mailto:hassan.djirdeh@mail.utoronto.ca" target="_blank">
                  <icon name="envelope-square" scale="2"></icon>
                </a>
              </div>
              <div class="wallet-content">
                <p class="wallet-tag" @click="displayBTC">BTC? <span v-if="showBTCWallet" class="wallet-id">1cV9YMjpweZyJ17DJbTa1WELs4BjdmUMp</span></p>
                <p class="wallet-tag" @click="displayETH">ETH? <span v-if="showETHWallet" class="wallet-id">0x5af8dfc441d4068f705372f461a85aba49aa5f46</span></p>
              </div>
            </div>
          </footer>
          <button class="modal-close is-medium" @click="toggleModal"></button>
        </div>
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
      showETHWallet: false,
      isOpenedInIFrame: false
    }
  },
  created () {
    if (window.self !== window.top) {
      this.isOpenedInIFrame = true
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
$small: 590px;
$medium: 768px;
$large: 1024px;

.nav {
  font-family: Nunito, sans-serif;
  -webkit-box-shadow: 0px 0px 0px 0px !important;
  box-shadow: 0px 0px 0px 0px !important;

  .nav-left {
    overflow-y: hidden;

    .nav-item {
      @media screen and (max-width: $medium) {
        padding-top: 15px;
      }

      .app-logo {
        max-height: 35px;
        padding-right: 5px;
      }

      .app-logo-name {
        font-size: 18px;
        color: #FFF;
        letter-spacing: 5px;
        padding-top: 2px;

        @media screen and (max-width: $small) {
          display: none;
        }
      }
    }
  }

  .nav-right {
    @media screen and (max-width: $medium) {
      background-color: transparent;
      display: block;
      top: 0;
      left: inherit;
    }

    .nav-item {
      .iframe-app-logo {
        max-height: 25px;
        padding-right: 5px;
        display: none;
      }

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
    max-width: 500px;

     @media screen and (max-width: $medium) {
      margin: 0px;
    }

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

        @media screen and (max-width: $medium) {
          height: 40px;
        }
      }

      .modal-card-title {
        font-size: 25px;
        letter-spacing: 5px;
      }
    }

    .modal-card-body {
      font-family: Nunito, sans-serif;
      color: #000;
      padding: 0px 20px;
      padding-bottom: 20px;

      p {
        font-size: 14px;

        @media screen and (max-width: $medium) {
          font-size: 12px;
        }

        a {
          color: #fd6721;
          font-weight: 700;
          text-decoration: none;
        }
      }

      h3 {
        color: #fd6721;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 10px;
      }

      #app-logo {
        height: 60px;
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

        @media screen and (max-width: $medium) {
          height: 40px;
        }
      }

      .is-success {
        background-color: #fd6721;

        @media screen and (max-width: $medium) {
          display: none;
        }
      }
    }

    .modal-card-foot {
      font-family: Nunito, sans-serif;
      padding-bottom: 1px;
      background-color: transparent;

      @media screen and (max-width: $medium) {
        padding-top: 5px;
      }

      .content {
        color: #FFF;
        display: block;
        margin: 0 auto;

        @media screen and (max-width: $medium) {
          display: none;
        }

        .footer-title {
          font-size: 15px;
          font-weight: 400;
        }

        .footer-social-media {
          height: 30px;
          color: #fd6721;

          .icon {
            text-decoration: none;
            -webkit-transform: scale(0.8);
            -moz-transform: scale(0.8);
            -o-transfrom: scale(0.8);
            -webkit-transition-duration: 0.5s;
            -moz-transition-duration: 0.5s;
            -o-transition-duration: 0.5s;
            transition: 0.5s;

            &:hover {
              color: #4fc08d;
            }
          }
        }

        .wallet-content {
          display: block;
          margin: 0 auto;
          font-size: 11px;

          .wallet-tag {
            font-weight: 600;
            cursor: pointer;
            margin-bottom: 0px;
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

  .modal-close {
    background-color: #fd6721;

    @media screen and (max-width: $medium) {
      position: absolute;
      top: 15px;
      right: 5px;
    }
  }
}

.hide {
  display: none !important;
}

.show {
  display: block !important;
}

.nav-iframe {
  height: 2.5rem;
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
