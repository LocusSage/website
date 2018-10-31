<template>
<div class="container">
  <div>
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
    <h2>{{post.title.rendered}}</h2>
    <p class="subtitle">{{post.wps_subtitle}}</p>
    <div class="flex align-justify">
      <img :src="post._embedded['wp:featuredmedia'][0].source_url" />
      <div class="grid">
        <icon name="facebook" scale="1.8"/>
        <icon name="linkedin" scale="1.8"/>
        <icon name="instagram" scale="1.8"/>
        <icon name="regular/heart" scale="1.8"/>
      </div>
    </div>
    <div class="post">
      <p class="text"  v-html="post.content.rendered"></p>
      <icon name="facebook" scale="2.0"/>
      <icon name="linkedin" scale="2.0"/>
      <icon name="instagram" scale="2.0"/>
      <icon name="regular/heart" scale="2.0"/>
    </div>
    <hr/>
  </div>
</div>  
</template>
<script>

import axios from 'axios'

export default {
  data () {
    return {
      post: ''
    }
  },
  created () {
    this.id = this.$route.params.id
  },
  mounted () {
    axios({ method: 'GET', 'url': `http://52.15.245.136:4080/wp-json/wp/v2/posts/${this.id}?_embed` }).then(json => {
      this.post = json.data
    })
  }
}
</script>

<style scoped lang="scss">

.container {
  width: 960px;
  text-align: left;
}

ul {
 list-style-type: none; 
}

.circle-image{
  overflow: hidden;
  border-radius: 100%;
  height: 45px;
  width: 45px;
  margin-right: 10px;
  &:hover{
    cursor: pointer;
  }
}

.circle-image img{
  height: 45px;
  width: 45px;
}

.author {
  margin-top: 50px;
  margin-bottom: 10px;
}

.authorName {
  font-size: 1.1rem;
}

.authorDescription {
  font-size: 0.9rem;
}

h2 {
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: bold;
  font-family: 'Graphik';
}

.subtitle {
  color: var(--font-color);
  font-size: 1.5rem;
  margin-bottom: 20px;
}

img {
  width: 100%;
  height: 400px;
  margin-bottom: 50px;
  margin-right: 20px
}

.post {
  margin: 10px;
}

.text {
  font-size: 1.4rem;
  line-height: 30px;
  margin-bottom: 20px;
}

a:-webkit-any-link  {
  color: var(--dark-blue);
  text-decoration: none;
}

.continueReading {
  font-size: 1.3rem;
  display: block;
  margin-bottom: 50px;
}

hr {
  box-sizing:border-box;
  width:100%;  
}



</style>