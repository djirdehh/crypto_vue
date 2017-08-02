<template>
  <div>
    <div class="columns" style="margin: 0px 10px">
      <div v-for="cryptoCurrency in firstFiveCryptoCurrencies" class="column">
        <router-link :to="`/${cryptoCurrency.id}`">
          <div class="card">
            <div class="card-image" :class="{'card-image-iframe': isOpenedInIFrame}">
              <figure class="image is-4by3">
                <img :src="`/static/${cryptoCurrency.id}_logo.png`">
              </figure>
            </div>
            <div class="card-content">
              <p class="title is-5" :class="{'title-iframe': isOpenedInIFrame}">{{ cryptoCurrency.name }}</p>
              <p class="title price-title is-5" :class="{'price-title-iframe': isOpenedInIFrame}">${{ getPriceUSD(cryptoCurrency) }} 
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
            <div class="card-image" :class="{'card-image-iframe': isOpenedInIFrame}">
              <figure class="image is-4by3">
                <img :src="`/static/${cryptoCurrency.id}_logo.png`">
              </figure>
            </div>
            <div class="card-content">
              <p class="title is-5" :class="{'title-iframe': isOpenedInIFrame}">{{ cryptoCurrency.name }}</p>
              <p class="title price-title is-5" :class="{'price-title-iframe': isOpenedInIFrame}">${{ getPriceUSD(cryptoCurrency) }}  
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
      isOpenedInIFrame: false
    }
  },
  created () {
    if (window.self !== window.top) {
      this.isOpenedInIFrame = true
    }
  },
  computed: {
    firstFiveCryptoCurrencies () {
      return this.sharedState.cryptoCurrencies.slice(0, 5)
    },
    secondFiveCryptoCurrencies () {
      return this.sharedState.cryptoCurrencies.slice(5)
    }
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

  @media screen and (max-width: $small) {
    max-width: 200px;
  }

  &:hover {
    border-radius: 4px;
    box-shadow: 0 0 5px 0 #fd6721;
    transition: .5s;
  }

  .card-image {
    .image {
      top: -15px;

      img {
        @media screen and (max-width: $small) {
          height: 90%;
          width: 90%;
          margin: 0 auto;
        }
      }
    }
  }

  .card-image-iframe {
    .image {
      top: -23px;
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

    .title-iframe {
      font-size: 0.9rem;
      position: absolute;
      bottom: 12%;
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

    .price-title-iframe {
      font-size: 0.9rem;
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
