<template>
  <transition mode="out-in" name="fade">
    <nav v-show="isShowing" class="flex align-center">
      <div class="wrapper grid large-col-4">
        <div class="span-3">
          <ul class="menu left flex align-middle">
            <li class="logo">
              <router-link class="flex align-middle" :to="{name: 'Home'}">
              <img class="image-logo" src="@/assets/logo/cloud-logo.svg" width="37.5px" alt="">
              <span>MedCloud</span>
            </router-link></li>
            <li>Produtos</li>
            <li><router-link :to="{name: 'Blog'}">Blog</router-link></li>
            <li>Receba Atualizações</li>
          </ul>
        </div>
        <div class="span-1 flex align-middle align-right">
          <ul class="menu">
            <li>Login</li>
          </ul>
        </div>
      </div>
    </nav>
  </transition>
</template>
<script>
export default {
  name: 'main-navbar',
  data () {
    return {
      isShowing: true,
      scrolled: 0,
      lastScrolled: 0
    }
  },
  mounted: function () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed: function () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll: function () {
      console.log(this.lastScrolled, this.scrolled)
      this.scrolled = window.pageYOffset
      if (this.scrolled <= this.lastScrolled) {
        this.lastScrolled = window.pageYOffset
        this.isShowing = true
      } else {
        this.lastScrolled = window.pageYOffset
        this.isShowing = false
      }
    }
  }
}
</script>
<style scoped lang="scss">

  nav {
    position: fixed;
    width: 100%;
    background: white;
    z-index: 99;
  }

  .wrapper {
    min-width: 980px;
    width: 75%;
    background: white;
  }

  .menu.left li {
    margin-right: 75px;
  }

  .logo span{
    font-family: "Circular", sans-serif;
    font-weight: 600;
    font-size: 16px;
    margin-left: 10px;
    color: var(--font-color)
  }

  .image-logo {
    display: block !important
  }

  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
    opacity: 0;
  }
</style>
