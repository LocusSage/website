<template>
<flickity v-if="posts.length > 0" class="carrousel" ref="flickity" :options="flickityOptions">
  <div class="carrousel-cell" v-for="post in posts" :key="post.id">
    <div v-if="post._embedded['wp:featuredmedia']">
      <img class="carrousel-cell-img" :src="post._embedded['wp:featuredmedia'][0].source_url" />
    </div>
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
  margin-bottom: 50px;
  @media (min-width: 340px) {
    height: 200px;
  }
  @media (min-width: 768px) and (max-width:1366px) {
    height: 400px;
  }
  @media (min-width: 1920px ) {
   height: 500px;
  }
}

.carrousel-cell {
  margin-top: 50px;
  margin-right: 5px;
  @media (min-width: 340px) and (max-width: 768px){
    width: 90%;
  }
  @media (min-width: 1024px) and (max-width: 1920px) {
    width: 60%;
  }
}

.carrousel-cell img.carrousel-cell-img {
  margin-top: 20px;
  opacity: 0.3;
  width: 100%;
  @media (min-width: 340px) {
    height: 150px;
  }
  @media (min-width: 768px) and (max-width:1366px) {
    height: 350px;
  }
  @media (min-width: 1920px )  {
    height: 450px;
  }
  transition: background-size 1s; 
  -webkit-transition: background-size 1s;
}

 .carrousel-cell.is-selected img.carrousel-cell-img {
  opacity: 2;
  margin-top: 5px;
  @media (min-width: 340px) {
    height: 180px;
  }
  @media (min-width: 768px) and (max-width:1366px) {
    height: 380px;
  }
  @media (min-width: 1920px)  {
    height: 480px;
  }
}


.divRelative {
  position: relative;
  @media (min-width: 340px) {
    margin: 10px;
    bottom: 120px;
  }
  @media (min-width: 768px) and (max-width:1366px) {
    margin: 50px;
    bottom: 170px;
  }
  @media (min-width: 1920px)  {
    margin: 50px;
    bottom: 210px;
  }
}

a {
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}

h5 {
   @media (min-width: 340px) {
    font-size: calc(1.3rem + ((1vw - 0.3rem) * 0.5556));
  }
  @media (min-width: 1920px) {
    font-size: 2.3rem;
  }
   font-weight: bold;
  font-family: 'Graphik';
  margin-bottom: 10px;
}

.text {
  @media (min-width: 340px) {
    width: 210px;
  }
  @media (min-width: 768px) and (max-width:1366px) {
   width: 450px;
  }
  @media (min-width: 1920px)  {
    width: 750px;
  }
}

.author {
  @media (min-width: 340px) {
   margin-top: 30px;
  }
  @media (min-width: 768px) and (max-width:1366px) {
    margin-top: 30px;
  }
  @media (min-width: 1920px)  {
    margin-top: 50px;
  }
  color: white;
}

.circle-image{
  overflow: hidden;
  border-radius: 100%;
 
  @media (min-width: 340px) {
    height: 30px;
    width: 30px;
  }
  @media (min-width: 768px) and (max-width:1366px) {
    height: 40px;
    width: 40px;
  }
  @media (min-width: 1920px)  {
    height: 50px;
    width: 50px;
  }
  margin-right: 10px;
  &:hover{
    cursor: pointer;
  }
}

.circle-image img{
  
  @media (min-width: 340px) {
    height: 30px;
    width: 30px;
  }
  @media (min-width: 768px) and (max-width:1366px) {
    height: 40px;
    width: 40px;
  }
  @media (min-width: 1920px)  {
    height: 50px;
    width: 50px;
  }
}

</style>