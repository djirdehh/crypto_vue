<template>
  <div class="hero-foot">
    <footer class="footer">
      <div class="container" style="height: 92px">
        <div class="content has-text-centered" v-if="showFooter">
          <div class="footer-title">Hassan Djirdeh | © 2017 .</div>
          <div class="footer-description">Built with <a href="https://vuejs.org/" class="link" target="_blank">Vue <img src="/static/vue_logo.png" class="tech-logo"></a></div>
          <div class="footer-social-media">
            <a class="icon" href="http://hassandjirdeh.com" target="_blank">
              <icon name="h-square" scale="2"></icon>
            </a>
            <a class="icon" href="https://github.com/djirdehh" target="_blank">
              <icon name="github-square" scale="2"></icon>
            </a>
             <a class="icon" href="https://ca.linkedin.com/in/hassandjirdeh" target="_blank">
              <icon name="linkedin-square" scale="2"></icon>
            </a>
            <a class="icon" href="mailto:hassan.djirdeh@mail.utoronto.ca" target="_blank">
              <icon name="envelope-square" scale="2"></icon>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'footerHero',
  props: {
    showFooter: { default: false }
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
.footer {
  background-color: transparent;
  padding: 3rem 1.5rem 0rem;
  
  .content {
    color: #FFF;
    .footer-title {
    }

    .footer-description {
      font-size: 11px;
      font-weight: 600;
      padding-bottom: 10px;

      .link {
        color: #fd6721;
        cursor: pointer;

        &:hover {
          color: #4fc08d;
          -moz-transition: all .2s ease-in;
          -o-transition: all .2s ease-in;
          -webkit-transition: all .2s ease-in;
          transition: all .2s ease-in;
          -webkit-animation-delay: 5s;
        }

        .tech-logo {
          height: 18px;
          position: relative;
          top: 4px;

          -webkit-animation-name: spinner; 
          -webkit-animation-timing-function: linear; 
          -webkit-animation-iteration-count: infinite; 
          -webkit-animation-duration: 10s; 
          animation-name: spinner; 
          animation-timing-function: linear; 
          animation-iteration-count: infinite; 
          animation-duration: 10s; 
          -webkit-transform-style: preserve-3d; 
          -moz-transform-style: preserve-3d; 
          -ms-transform-style: preserve-3d; 
          transform-style: preserve-3d;
        }
      }
    }

    .footer-social-media {
      color: #fd6721;
      
      .icon {
        text-decoration: none;
        -webkit-transform: scale(0.8);
        -moz-transform: scale(0.8);
        -o-transfrom: scale(0.8);
        -webkit-transition-duration: 0.5s;
        -moz-transition-duration: 0.5s;
        -o-transition-duration: 0.5s;
        transition: 0.5s;

        &:hover {
          color: #4fc08d;
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
