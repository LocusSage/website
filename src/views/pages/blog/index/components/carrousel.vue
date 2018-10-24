<template>
<flickity v-if="posts.length > 0" class="carrousel" ref="flickity" :options="flickityOptions">
  <div class="carrousel-cell" v-for="post in posts" :key="post.id">
    <img :src="post._embedded['wp:featuredmedia'][0].source_url" />
    <div class="text">
      <h5>{{post.title.rendered}}</h5>
      <p v-html="post.excerpt.rendered"></p>
    </div>
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
        autoPlay: 5000,
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

.carrousel-cell img {
  opacity: 0.6;
  margin-top: 20px;
  margin-right: 10px;
  height: 500px;
  width: 960px;
  transition: background-size 1s; 
  -webkit-transition: background-size 1s;
}

 .carrousel-cell.is-selected img {
  opacity: 2;
  margin-top: 5px;
  height: 530px;
  
}

h5 {
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
}

.text {
  color: white;
  position: absolute; 
  font-size: 18px;
  margin-left: 50px;
  margin-right: 50px;
  top: 320px;
}

</style>