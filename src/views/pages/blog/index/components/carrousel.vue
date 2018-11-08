<template>
<flickity v-if="posts.length > 0" class="carrousel" ref="flickity" :options="flickityOptions">
  <div class="carrousel-cell" v-for="post in posts" :key="post.id">
    <div v-if="post._embedded['wp:featuredmedia']">
      <img class="imgCarrousel" :src="post._embedded['wp:featuredmedia'][0].source_url" />
    </div>
    <div class="divAbsolute">
      <div class="divRelative flex align-justify">
        <div class="text">
          <router-link :to="{name:'Blog-Post', params: {id: post.id, slug: post.slug}}">
            <h5>{{post.title.rendered}}</h5>
            <p>{{post.wps_subtitle}}</p>
          </router-link>
        </div>
        <div class="author">
          <div class="image-container flex align-middle">
            <div class="circle-image">
              <img class="avatar" :src="post._embedded.author[0].avatar_urls[96]">
            </div>
            <div>
              <p class="authorName">{{post._embedded.author[0].name}}</p>
              <p class="authorDescription">{{post._embedded.author[0].description}}</p>
            </div>
          </div>
        </div>
      </div>
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
  height: 420px;
}

.carrousel-cell img.imgCarrousel {
  opacity: 0.6;
  margin-top: 20px;
  margin-right: 10px;
  height: 400px;
  width: 960px;
  transition: background-size 1s; 
  -webkit-transition: background-size 1s;
}

 .carrousel-cell.is-selected img.imgCarrousel {
  opacity: 2;
  margin-top: 5px;
  height: 430px;
}

.divAbsolute {
  width: 960px;
  position: absolute;
}

.divRelative {
  position: relative;
  margin: 60px;
  bottom: 240px;
}

.text {
  width: 400px;
  color: white;
  font-size: 1rem;
}

a:-webkit-any-link  {
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}

h5 {
  font-size: 2rem;
   font-weight: bold;
  font-family: 'Graphik';
  margin-bottom: 10px;
}

.author {
  margin-top: 70px;
  color: white;
}

.circle-image{
  overflow: hidden;
  border-radius: 100%;
  height: 50px;
  width: 50px;
  margin-right: 10px;
  &:hover{
    cursor: pointer;
  }
}

.circle-image img{
  height: 50px;
  width: 50px;
}

</style>