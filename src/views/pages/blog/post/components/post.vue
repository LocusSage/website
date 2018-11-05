<template>
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
    <h3>{{post.title.rendered}}</h3>
    <p class="subtitle">{{post.wps_subtitle}}</p>
    <div class="flex align-justify">
      <div>
        <img :src="post._embedded['wp:featuredmedia'][0].source_url" />
      </div>
      <div class="divRelative">
        <div class="icons grid">
          <div class="divIcon"><icon name="brands/facebook" scale="1.9"/></div>
          <div class="divIcon"><icon name="brands/linkedin" scale="1.9"/></div>
          <div class="divIcon"><icon name="brands/instagram" scale="1.9"/></div>
          <div class="divIcon"><icon name="regular/heart" scale="1.9"/></div>
        </div>
      </div>
    </div>
    <div class="post">
      <p class="text" v-html="post.content.rendered"></p>
      <div class="icons2 flex">
        <span class="divIcon2"><icon name="brands/facebook" scale="1.9"/></span>
        <span class="divIcon2"><icon name="brands/linkedin" scale="1.9"/></span>
        <span class="divIcon2"><icon name="brands/instagram" scale="1.9"/></span>
        <span class="divIcon2"><icon name="regular/heart" scale="1.9"/></span>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'postId',
  computed: {
    post: function () { return this.$store.getters['blog:post'] }
  }
}
</script>

<style scoped lang="scss">


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
  font-size: 1.2rem;
}

.authorDescription {
  font-size: 0.9rem;
}

h3 {
  margin-top: 10px;
  margin-bottom: 5px;
  font-weight: bold;
  font-family: 'Graphik';
}

.subtitle {
  color: var(--font-color);
  font-size: 1.5rem;
  margin-bottom: 20px;
}

img {
  width: 960px;
  height: 400px;
  margin-bottom: 20px;
  margin-right: 50px
}

.divRelative {
  position: relative;
  margin-top: 70px;
}

.icons {
  position: fixed;
}

.divIcon {
  margin-bottom: 50px;
}

.post {
  margin: 10px;
}

.text {
  text-align: left;
  font-size: 1.250rem;
  line-height: 30px;
  margin-bottom: 20px;
}

.icons2 {
  margin-top: 80px;
  margin-bottom: 20px;
}

.divIcon2 {
  margin-right: 50px;
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