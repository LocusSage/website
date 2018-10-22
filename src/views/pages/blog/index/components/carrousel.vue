<template>
<div class="carrousel">
  <flickity ref="flickity" :options="flickityOptions">
    <div class="carousel-cell ">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg" alt="orange tree" />
      <label class="texto">TESTE</label>
    </div>
    <div class="carousel-cell ">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/submerged.jpg" alt="submerged" />
      <label class="texto">TESTE2</label>
    </div>
    <div class="carousel-cell ">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/cat-nose.jpg" alt="cat nose" />
      <h5>What does make people<br> gather togheter?</h5>
      <label class="texto">A review what moves people</label>
    </div>
  </flickity>
  </div>
</template>
<script>

import Flickity from 'vue-flickity'
import imagesLoaded from 'flickity-imagesloaded'

export default {
  components: {
    Flickity,
    imagesLoaded
  },
  data () {
    return {
      isLoaded: false,
      flickityOptions: {
        initialIndex: 1,
        autoPlay: 2500,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        imagesLoaded: true
      }
    }
  }
}
</script>

<style scoped lang="scss">
.carrousel {
  position: relative;
  margin-bottom: 50px;
}

.carousel-cell {
  position: absolute;
  height: 500px;
}

h5 {
  color: white;
  position: absolute;
  font-size: 32px;
  left: 50px;
  top: 250px;
}

.texto {
  color: white;
  position: absolute;
  font-size: 16px;
  left: 50px;
  top: 400px;
}

</style>