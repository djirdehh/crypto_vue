<template>
  <div>
    <div class="columns" style="margin: 0px 10px">
      <div v-for="cryptoCurrency in firstFiveCryptoCurrencies" class="column">
        <router-link :to="`/${cryptoCurrency.id}`">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img :src="`/static/${cryptoCurrency.id}_logo.png`">
              </figure>
            </div>
            <div class="card-content">
              <p class="title is-5">{{ cryptoCurrency.name }}</p>
              <p class="title price-title is-5">${{ getPriceUSD(cryptoCurrency) }} 
                <span :class="{'positive-percent-change': cryptoCurrency.positivePercentChange, 'negative-percent-change': !cryptoCurrency.positivePercentChange}"> {{ getPercentChange(cryptoCurrency) }}% 
                  <icon class="arrow-up" name="arrow-up" height="9" width="9"></icon>
                  <icon class="arrow-down" name="arrow-down" height="9" width="9"></icon>
                </span>
              </p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="columns" style="margin: 0px 10px">
      <div v-for="cryptoCurrency in secondFiveCryptoCurrencies" class="column">
        <router-link :to="`/${cryptoCurrency.id}`">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img :src="`/static/${cryptoCurrency.id}_logo.png`">
              </figure>
            </div>
            <div class="card-content">
              <p class="title is-5">{{ cryptoCurrency.name }}</p>
              <p class="title price-title is-5">${{ getPriceUSD(cryptoCurrency) }}  
                <span :class="{'positive-percent-change': cryptoCurrency.positivePercentChange, 'negative-percent-change': !cryptoCurrency.positivePercentChange}"> {{ getPercentChange(cryptoCurrency) }}% 
                  <icon class="arrow-up" name="arrow-up" height="9" width="9"></icon>
                  <icon class="arrow-down" name="arrow-down" height="9" width="9"></icon>
                </span>
              </p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '../../store.js'

export default {
  props: {},
  name: 'bodyHero',
  data () {
    return {
      sharedState: store.state,
      cryptoCurrencies: [],
      firstFiveCryptoCurrencies: [],
      secondFiveCryptoCurrencies: [],
      selectedCryptoCurrency: {}
    }
  },
  created () {
    this.axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=10')
      .then(response => {
        this.cryptoCurrencies = response.data
        this.cryptoCurrencies.forEach(cryptoCurrency => this.getDifferenceInChange(cryptoCurrency))
        this.firstFiveCryptoCurrencies = this.cryptoCurrencies.slice(0, 5)
        this.secondFiveCryptoCurrencies = this.cryptoCurrencies.slice(5)
      })
  },
  methods: {
    getDifferenceInChange (cryptoCurrency) {
      cryptoCurrency.positivePercentChange = !(cryptoCurrency.percent_change_24h.indexOf('-') > -1)
      cryptoCurrency.percentChange24h = cryptoCurrency.percent_change_24h.replace(/^-/, '')
    },
    getPriceUSD (cryptoCurrency) {
      const priceUsd = cryptoCurrency.price_usd
      return Number(priceUsd).toFixed(2)
    },
    getPercentChange (cryptoCurrency) {
      return cryptoCurrency.percentChange24h
    }
  }
}
</script>

<style scoped lang="scss">
$small: 590px;
$medium: 768px;
$large: 1024px;

.card {
  background-color: initial;
  position: relative;
  cursor: pointer;
  box-shadow: 0 0 50px 5px rgba(0,0,0,.25);

  @media screen and (max-width: $medium) {
    max-width: 300px;
    display: block;
    margin: 0 auto;
  }

  &:hover {
    border-radius: 4px;
    box-shadow: 0 0 5px 0 #fd6721;
    transition: .5s;
  }

  .card-image {
    .image {
      top: -15px;
    }

    .cryptoCurrency-image {
      -webkit-animation-name: spinner; 
      -webkit-animation-timing-function: linear; 
      -webkit-animation-iteration-count: infinite; 
      -webkit-animation-duration: 2s; 
      animation-name: spinner; 
      animation-timing-function: linear; 
      animation-iteration-count: infinite; 
      animation-duration: 2s; 
      -webkit-transform-style: preserve-3d; 
      -moz-transform-style: preserve-3d; 
      -ms-transform-style: preserve-3d; 
      transform-style: preserve-3d;
    }
  }

  .card-content {
    padding: 0;

    .title {
      position: absolute;
      bottom: 15%;
      left: 0;
      right: 0;
    }

    .price-title {
      font-size: 1.0rem;
      font-weight: 600;

        .positive-percent-change {
          font-size: 0.9em;
          color: #00d1b2;

          .arrow-down {
            display: none;
          }
        }

        .negative-percent-change {
          font-size: 0.9em;
          color: #ff3860;

          .arrow-up {
            display: none;
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
