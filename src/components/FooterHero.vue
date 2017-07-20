<template>
  <div class="hero-foot">
    <footer class="footer">
      <div class="mobile-footer">
        Made by <a href="https://github.com/djirdehh" target="_blank">Hassan Djirdeh</a> | <icon name="calendar" height="12"></icon> 2017
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'footerHero',
  props: {},
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
$small: 590px;
$medium: 768px;
$large: 1024px;

.footer {
  background-color: transparent;
  padding: 3rem 1.5rem 0rem;
  position: relative;

  .mobile-footer {
    display: none;
    font-size: 15px;
    font-weight: 400;
    position:absolute;
    bottom: 15px;
    left: 0;
    right: 0;
    margin: 0 auto;

    a {
      color: #fd6721;
    }

    @media screen and (max-width: $small) {
      display: block;
    }
  }
}
</style>
