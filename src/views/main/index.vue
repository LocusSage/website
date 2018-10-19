<template>
  <div>
    <main-navbar/>
    <main>
      <router-view />
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
</style>
