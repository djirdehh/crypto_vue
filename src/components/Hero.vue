<template>
  <section class="hero is-success is-fullheight">
    <headerHero></headerHero>
    <bodyHero></bodyHero>
    <footerHero></footerHero>
  </section>
</template>

<script>
import HeaderHero from './HeaderHero'
import FooterHero from './FooterHero'
import BodyHero from './BodyHero'

export default {
  name: 'hero',
  components: {
    HeaderHero,
    FooterHero,
    BodyHero
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
.is-success {
  background: #333;
  background: -webkit-linear-gradient(left top, #024, #402);
  background: -moz-linear-gradient(bottom right, #024, #402);
  background: linear-gradient(to bottom right, #024, #402);
}
</style>
