<template>
  <div>
    <main-navbar/>
    <main>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </main>
    <main-footer />
  </div>
</template>
<script>
import MainNavbar from '@/components/global/navbar/navbar'
import MainFooter from '@/components/global/footer/footer'

export default {
  name: 'Main',
  components: {
    'main-navbar': MainNavbar,
    'main-footer': MainFooter
  }
}
</script>

<style lang="scss" scoped>
  main {
    padding-top: 65px;
    background: white;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
    opacity: 0;
  }
</style>
