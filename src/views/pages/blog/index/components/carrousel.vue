<template>
<div class="carrousel">
  <flickity ref="flickity" :options="flickityOptions">
    <div class="carousel-cell "><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg" alt="orange tree" /></div>
    <div class="carousel-cell "><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/submerged.jpg" alt="submerged" /></div>
    <div class="carousel-cell "><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/cat-nose.jpg" alt="cat nose" /></div>
  </flickity>
  </div>
</template>
<script>

import Flickity from 'vue-flickity'

export default {
  components: {
    Flickity
  },
  data () {
    return {
      flickityOptions: {
        initialIndex: 1,
        autoPlay: 2500,
        prevNextButtons: true,
        pageDots: false,
        wrapAround: true
      }
    }
  }
}
</script>

<style scoped lang="scss">
.carrousel {
  margin-bottom: 50px;
}

.carousel-cell {
  height: 300px;
}


</style>