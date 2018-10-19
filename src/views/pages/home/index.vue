<template>
  <div>
    <hero-header class="container" />
    <div class="gray" style="background-color: rgb(240,240,240)">
      <company-info class="container"/>
    </div>
    <our-numbers class="container" />
  </div>
</template>
<script>
import Hero from './components/hero'
import CompanyInfo from './components/company-info'
import OurNumbers from './components/our-numbers'

export default {
  components: {
    'hero-header': Hero,
    'company-info': CompanyInfo,
    'our-numbers': OurNumbers
  }
}
</script>
<style>
.container {
  width: 70%;
  margin: 0 auto;
}
</style>
