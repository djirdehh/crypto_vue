<template>
  <div class="selected-section">
    <h1>{{ selectedCryptoCurrency.name }}</h1>
  </div>
</template>

<script>
import { EventBus } from '../../event-bus.js'

export default {
  name: 'selectedHero',
  data () {
    return {
      selectedCryptoCurrency: { name: '' }
    }
  },
  created () {
    EventBus.$on('cryptoCurrencySelected', cryptoCurrency => {
      this.selectedCryptoCurrency = cryptoCurrency
    })
  },
  beforeDestroy () {
    EventBus.$off('cryptoCurrencySelected')
  }
}
</script>

<style scoped lang="scss">
</style>
