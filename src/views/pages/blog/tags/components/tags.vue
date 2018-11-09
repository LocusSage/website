<template >
<div>
  <div class="start">
    <h4>{{title}}</h4>
    <p class="text">Tudo que o nosso time marcou com essa tag, aparecerá<br />nesta seção. Caso queira mudar o assunto, basta reselecionar ele.<br />Boa leitura!</p>
  </div>
  <div class="gridContainer">
    <div class="grid-sizer"></div>
    <div class="gutter-sizer"></div>
    <div class="grid-item" v-for="tag in tags" :key="tag.id">
      <div v-if="tag._embedded['wp:featuredmedia']" class="post-image">
        <img :src="tag._embedded['wp:featuredmedia'][0].source_url" />
      </div>
      <div v-else class="post-no-image"></div>
       <div class="divAbsolute">
        <div class="divRelative">
          <div class="image-container flex">
            <div class="circle-image">
              <img class="avatar" :src="tag._embedded.author[0].avatar_urls[96]">
            </div>
            <div class="author">
              <p class="authorName">{{tag._embedded.author[0].name}}</p>
              <p class="authorDescription">athor {{tag._embedded.author[0].description}}</p>
            </div> 
          </div>
          <div class="title">
            <router-link :to="{name:'Blog-Post', params: {id: tag.id, slug: tag.slug}}">
              <h5>{{tag.title.rendered}}</h5>
            </router-link>
          </div> 
        </div>
      </div> 
    </div>
  </div>
</div>  
</template>
<script>
import ImagesLoaded from 'imagesloaded'
import Masonry from 'masonry-layout'
import { setTimeout } from 'timers'

export default {
  components: {
    ImagesLoaded,
    Masonry
  },
  computed: {
    title: function () { return this.$route.params.slug },
    tags: function () { return this.$store.getters['blog:tags'] }
  },
  mounted () {
    var grid = document.querySelector('.gridContainer')

    setTimeout(() => {
      ImagesLoaded(grid, function () {
        this.msnry = new Masonry(grid, {
          percentPosition: true,
          itemSelector: '.grid-item',
          gutter: '.gutter-sizer',
          columnWidth: '.grid-sizer'
        })
      })
    }, 1000)
  }
}
</script>

<style scoped lang="scss">

/* ---- grid ---- */

.gridContainer {
  max-width: 960px;
  margin-top: 50px;
  margin-bottom: 50px; 
}

/* clearfix */
.gridContainer:after {
  content: '';
  display: block;
  clear: both;
}

/* ---- grid-item ---- */

.grid-item {
  width: calc(50% - 15px);
  float: left;
  margin-bottom: 15px;

}
.grid-item img {
  display: block;
  max-width: 100%;
  border-radius: 10px;
}

.grid-sizer {
  width: calc(50% - 15px);
}

.gutter-sizer {
  width: 15px;
}

.post-no-image {
  width: 420px;
  height: 250px;
  border-radius: 10px;
  background: black;
}

.start {
  margin-top: 50px;
}

.title {
  color: white;
}

h4 {
  font-size: 2rem;
  font-weight: bold;
  font-family: 'Graphik';
  margin-bottom: 10px;
  margin-top: 15px;
}

.text {
  @media (max-width: 1920px) {
    font-size: 1vw;
  }
  @media (max-width: 1366px) {
    font-size: 1.3vw;
  }
  text-align: left;
  margin-bottom: 30px;
}

.divAbsolute {
  position: absolute;
}

.divRelative {
  position: relative;
  margin: 20px;
  bottom: 130px;
  width: 400px;
}

.image-container {
  color: white;
}

.circle-image{
  overflow: hidden;
  border-radius: 100%;
  height: 40px;
  width: 40px;
  margin-right: 10px;
  &:hover{
    cursor: pointer;
  }
}

.circle-image img{
  height: 40px;
  width: 40px;
}

.authorName {
  margin-top: 3px;
  font-size: 1.1rem;
}

.authorDescription {
  font-size: 0.7rem;
}

h5 {
  margin-top: 5px;
  font-weight: bold;
  font-family: 'Graphik';
}

a:-webkit-any-link  {
  color: white;
  text-decoration: none;
   &:hover {
    text-decoration: underline;
  }
}

</style>