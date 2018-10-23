<template>
<flickity v-if="Object.keys(posts).length > 0" class="carrousel" ref="flickity" :options="flickityOptions">
  <div class="carrousel-cell" v-for="post in posts" :key="post.id">
    <img :src="post._embedded['wp:featuredmedia'][0].source_url" />
    <h5>{{post.title.rendered}}</h5>
     <p class="texto">{{post.excerpt.rendered}}</p>
  </div>
</flickity>
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
  }
}
</script>

<style scoped lang="scss">
.carrousel {
  position: relative;
  margin-bottom: 50px;
}

.carrousel-cell {
  position: absolute;
}

.carrousel-cell img {
  height: 500px;
  width: 960px;
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