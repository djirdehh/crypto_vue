<template>
  <div class="hero-foot">
    <footer class="footer">
      <div class="mobile-footer">
        <div class="made-by" :class="{'hide': isOpenedInIFrame}">Made by <a href="https://github.com/djirdehh" target="_blank">Hassan Djirdeh</a> | <icon name="calendar" height="12"></icon> 2017</div>
        <p class="wallet-tag">BTC <span>1cV9YMjpweZyJ17DJbTa1WELs4BjdmUMp</span></p>
        <p class="wallet-tag">ETH <span >0x5af8dfc441d4068f705372f461a85aba49aa5f46</span></p>
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
      isOpenedInIFrame: false
    }
  },
  created () {
    if (window.self !== window.top) {
      this.isOpenedInIFrame = true
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

  @media screen and (max-width: $small) {
    padding-top: 60px;
  }

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

    .wallet-tag {
      font-size: 9px;
      font-weight: 600;

      span {
        color: #00d1b2;
      }
    }
  }
}

.hide {
  display: none;
}
</style>
