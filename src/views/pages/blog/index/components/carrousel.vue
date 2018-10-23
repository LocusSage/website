<template>
<div class="carrousel">
  <flickity ref="flickity" :options="flickityOptions">
    <div class="carousel-cell"  v-for="post in posts" :key="post.id">
      <div v-if="post._embedded['wp:featuredmedia']">
				<img :src="post._embedded['wp:featuredmedia'][0].source_url" />
      </div>
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
  },
  computed: {
    posts: function () { return this.$store.getters['blog:posts'] }
  },
  created: function (post) {
    this.$store.dispatch('blog:load-data')
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
}

.carousel-cell img {
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