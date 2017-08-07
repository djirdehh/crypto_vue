import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

const cryptoCurrencyData = require('./cryptocurrency-data.json')

export const store = {
  state: {
    totalMarketCapUSD: 0,
    cryptoCurrencies: []
  },
  getCryptoCurrencies () {
    const getUrl = 'https://api.coinmarketcap.com/v1/ticker/?limit=10'
    axios.get(getUrl).then((response) => {
      this.state.cryptoCurrencies = response.data
      this.state.cryptoCurrencies.forEach(cryptoCurrency => this.addImageAndDescription(cryptoCurrency))
    })
  },
  addImageAndDescription (cryptoCurrency) {
    cryptoCurrency.id = cryptoCurrency.id in cryptoCurrencyData ? cryptoCurrency.id : undefined
    cryptoCurrency.image = `${cryptoCurrency.id}_image`
    cryptoCurrency.description = cryptoCurrencyData[cryptoCurrency.id].description
    cryptoCurrency.website = cryptoCurrencyData[cryptoCurrency.id].website
    cryptoCurrency.paper = cryptoCurrencyData[cryptoCurrency.id].paper
    cryptoCurrency.github = cryptoCurrencyData[cryptoCurrency.id].github

    cryptoCurrency.positivePercentChange = !(cryptoCurrency.percent_change_24h.indexOf('-') > -1)
    cryptoCurrency.percentChange24h = cryptoCurrency.percent_change_24h.replace(/^-/, '')
  },
  getTotalMarketCapUSD () {
    const getUrl = 'https://api.coinmarketcap.com/v1/global/'
    axios.get(getUrl).then((response) => {
      const globalData = response.data
      this.state.totalMarketCapUSD = globalData.total_market_cap_usd
    })
  }
}
