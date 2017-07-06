<template>
  <div>
    <div class="columns" style="margin: 0px 10px">
      <div v-for="cryptoCurrency in firstFiveCryptoCurrencies" class="column">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img :src="`/static/${cryptoCurrency.id}_logo.png`">
            </figure>
          </div>
          <div class="card-content">
            <p class="title is-5">{{ cryptoCurrency.name }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="columns" style="margin: 0px 10px">
      <div v-for="cryptoCurrency in secondFiveCryptoCurrencies" class="column">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img :src="`/static/${cryptoCurrency.id}_logo.png`">
            </figure>
          </div>
          <div class="card-content">
            <p class="title is-5">{{ cryptoCurrency.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bodyHero',
  data () {
    return {
      cryptoCurrencies: [],
      firstFiveCryptoCurrencies: [],
      secondFiveCryptoCurrencies: []
    }
  },
  methods: {
    addImageAndDescription (cryptoCurrency) {
      cryptoCurrency.image = `${cryptoCurrency.id}_image`
      cryptoCurrency.description = `EEE`
    }
  },
  created () {
    this.$http.get('https://api.coinmarketcap.com/v1/ticker/?limit=10')
      .then(response => {
        this.cryptoCurrencies = response.body
        this.cryptoCurrencies.forEach(cryptoCurrency => this.addImageAndDescription(cryptoCurrency))
        this.firstFiveCryptoCurrencies = this.cryptoCurrencies.slice(0, 5)
        this.secondFiveCryptoCurrencies = this.cryptoCurrencies.slice(5)
      })
  }
}
</script>

<style scoped lang="scss">
.card {
  background-color: initial;
  position: relative;

  .card-image {
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
      bottom: 10%;
      left: 0;
      right: 0;
    }
  }
}

/* WebKit and Opera browsers */ @-webkit-keyframes spinner { 
    from 
    { 
        -webkit-transform: rotateY(0deg); 
    } 
    to { 
        -webkit-transform: rotateY(-360deg); 
    } 
} /* all other browsers */ 
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
