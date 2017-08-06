import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

const cryptoCurrencyData = require('./cryptocurrency-data.json')

export const store = {
  state: {
    cryptoCurrencies: []
  },
  getCryptoCurrencies () {
    const getUrl1 = 'https://api.coinmarketcap.com/v1/ticker/?limit=9'
    const getUrl2 = 'https://api.coinmarketcap.com/v1/ticker/decred/'
    axios.get(getUrl1).then((response) => {
      this.state.cryptoCurrencies = response.data
    })
    axios.get(getUrl2).then((response) => {
      // attempt to make decred load every time, occasionally decred loads first and does not appear
      if (this.state.cryptoCurrencies.length === 9) {
        this.state.cryptoCurrencies.push(response.data[0])
        this.state.cryptoCurrencies.forEach(cryptoCurrency => this.addImageAndDescription(cryptoCurrency))
      } else {
        this.getCryptoCurrencies()
      }
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
  }
}
