<template>
  <div class="columns selected-section">
    <div class="column is-7 image-section">
      <img :src="`/static/${selectedCryptoCurrency.id}_large_logo.png`" class="cryptoCurrency-image"/>
      <h1 class="cryptoCurrency-title">{{ selectedCryptoCurrency.name }}</h1>
      <span class="tag is-primary">Rank {{ selectedCryptoCurrency.rank}}</span>
      <p class="cryptoCurrency-description">{{ selectedCryptoCurrency.description }}</p>
      <div class="icons-section">
        <span class="icon">
          <a :href="selectedCryptoCurrency.website" target="_blank"><icon name="link" scale="2"></icon></a>
        </span>
        <span class="icon">
          <a :href="selectedCryptoCurrency.paper" target="_blank"><icon name="file-text" scale="2"></icon></a>
        </span>
        <span class="icon">
          <a :href="selectedCryptoCurrency.github" target="_blank"><icon name="github" scale="2"></icon></a>
        </span>
      </div>
    </div>
    <div class="column information-section">
      <div class="price-section">
        <p class="price-tag">Current Price</p>
        <p class="price-amount">$ {{ selectedCryptoCurrency.price_usd }} 
          <span :class="{'positive-percent-change': positivePercentChange, 'negative-percent-change': negativePercentChange}">
            ({{ selectedCryptoCurrency.percent_change_24h }}%)
          </span>
        </p>
      </div>
      <div class="price-section">
        <p class="price-tag">Circulating Supply</p>
        <p class="price-amount">{{ selectedCryptoCurrency.available_supply }} {{ selectedCryptoCurrency.symbol }}</p>
      </div>
      <div class="price-section">
        <p class="price-tag">Market Cap</p>
        <p class="price-amount">$ {{ selectedCryptoCurrency.market_cap_usd }} </p>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from '../../event-bus.js'

export default {
  name: 'selectedHero',
  data () {
    return {
      selectedCryptoCurrency: {},
      positivePercentChange: true,
      negativePercentChange: false
    }
  },
  created () {
    EventBus.$on('cryptoCurrencySelected', cryptoCurrency => {
      if (cryptoCurrency.percent_change_24h.indexOf('-') > -1) {
        this.positivePercentChange = false
        this.negativePercentChange = true
        cryptoCurrency.percent_change_24h = cryptoCurrency.percent_change_24h.replace(/^-/, '')
      }
      cryptoCurrency.price_usd = Number(cryptoCurrency.price_usd).toFixed(2)
      cryptoCurrency.available_supply = Number(cryptoCurrency.available_supply).toLocaleString()
      cryptoCurrency.market_cap_usd = Number(cryptoCurrency.market_cap_usd).toLocaleString()
      this.selectedCryptoCurrency = cryptoCurrency
    })
  },
  beforeDestroy () {
    EventBus.$off('cryptoCurrencySelected')
  }
}
</script>

<style scoped lang="scss">
.selected-section {
  .image-section {
    position: relative;

    .cryptoCurrency-image {
      height: 200px;

      -webkit-animation-name: spinner; 
      -webkit-animation-timing-function: linear; 
      -webkit-animation-iteration-count: infinite; 
      -webkit-animation-duration: 60s; 
      animation-name: spinner; 
      animation-timing-function: linear; 
      animation-iteration-count: infinite; 
      animation-duration: 60s; 
      -webkit-transform-style: preserve-3d; 
      -moz-transform-style: preserve-3d; 
      -ms-transform-style: preserve-3d; 
      transform-style: preserve-3d;
    }

    .cryptoCurrency-title {
      font-size: 20px;
      font-weight: 600;
    }

    .cryptoCurrency-description {
      font-size: 14px;
      line-height: 1.65;
      max-width: 450px;
      display: block;
      margin: 0 auto;
      padding: 20px 0 30px;
    }

    .icons-section {
      .icon {
        margin: 0px 30px;
      }
    }
  }

  .information-section {
    padding-top: 25px;

    .price-section {
      text-align: left;
      padding: 20px 0;

      .price-tag {
      }

      .price-amount {
        font-size: 40px;

        .positive-percent-change {
          color: #00d1b2
        }

        .negative-percent-change {
          color: #ff3860
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
