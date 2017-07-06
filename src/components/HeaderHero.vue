<template>
  <div class="hero-head">
    <header class="nav">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item">
            <img src="images/bulma-type-white.png" alt="Logo">
          </a>
        </div>
        <span class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div class="nav-right nav-menu">
          <a class="nav-item is-active">
            Home
          </a>
          <a class="nav-item">
            Examples
          </a>
          <a class="nav-item">
            Documentation
          </a>
          <span class="nav-item">
            <a class="button is-success is-inverted">
              <span class="icon">
                <i class="fa fa-github"></i>
              </span>
              <span>Download</span>
            </a>
          </span>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'headerHero',
  data () {
    return {
      msg: 'This is the header!'
    }
  }
}
</script>

<style scoped>
</style>
