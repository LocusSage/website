<template>
  <div>
    <hero-header />
    <company-section />
    <quasar-section />
    <gamma-section />
    <cloud-computing />
    <tech-support />
  </div>
</template>
<script>
import Hero from './components/hero'
import Company from './components/company'
import Quasar from './components/quasar'
import Gamma from './components/gamma'
import CloudComputing from './components/cloud-computing'
import TechSupport from './components/support'

export default {
  components: {
    'hero-header': Hero,
    'company-section': Company,
    'quasar-section': Quasar,
    'gamma-section': Gamma,
    'cloud-computing': CloudComputing,
    'tech-support': TechSupport
  }
}
</script>
<style>

</style>
