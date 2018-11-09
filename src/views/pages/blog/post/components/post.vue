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
      <div class="image">
        <img v-if="post._embedded['wp:featuredmedia']" :src="post._embedded['wp:featuredmedia'][0].source_url" />
      </div>
      <div class="divRelative">
        <div class="icons grid">
          <div  id="facebook" class="divIcon"><a target="blank" href="https://www.facebook.com/mpscloud/"><icon name="brands/facebook" scale="1.9"/></a></div>
          <div id="linkedin" class="divIcon"><a target="blank" href="https://www.linkedin.com/company/mps-cloud/"><icon name="brands/linkedin" scale="1.9"/></a></div>
          <div id="instagram" class="divIcon"><a target="blank" href="https://www.instagram.com/mpsclouds/?hl=pt-br"><icon name="brands/instagram" scale="1.9"/></a></div>
          <div id="like" class="divIcon"><a target="blank" href="#"><icon name="regular/heart" scale="1.9"/></a></div>
        </div>
      </div>
    </div>
    <div class="post">
      <p class="text" v-html="post.content.rendered"></p>
      <div class="lowIcons flex">
        <span class="divLowIcons"><a target="blank" href="https://www.facebook.com/mpscloud/"><icon name="brands/facebook" scale="1.9"/></a></span>
        <span class="divLowIcons"><a target="blank" href="https://www.linkedin.com/company/mps-cloud/"><icon name="brands/linkedin" scale="1.9"/></a></span>
        <span class="divLowIcons"><a target="blank" href="https://www.instagram.com/mpsclouds/?hl=pt-br"><icon name="brands/instagram" scale="1.9"/></a></span>
        <span class="divLowIcons"><icon name="regular/heart" scale="1.9"/></span>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  computed: {
    post: function () { return this.$store.getters['blog:post'] }
  }
}
</script>

<style scoped lang="scss">

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
  margin-bottom: 20px;
}

.authorName {
  font-size: 1.2rem;
}

.authorDescription {
  font-size: 0.8rem;
}

h3 {
  @media (max-width: 1920px) {
    font-size: 2.3vw;
  }
  @media (max-width: 1366px) {
    font-size: 3vw;
  }
  margin-top: 10px;
  margin-bottom: 5px;
  font-weight: bold;
  font-family: 'Graphik';
}

.subtitle {
  color: var(--font-color);
  font-size: 1.3rem;
  margin-bottom: 20px;
}

img {
  @media (max-width: 1920px) {
   width: 960px; 
  }
  @media (max-width: 1366px) {
    width: 660px;
  }
  height: auto;
  margin-bottom: 20px;
}

.icons {
  position: fixed;
  z-index: 2;
}

.divIcon {
  margin-left: 50px;
  @media (max-width: 1920px) {
    margin-bottom: 50px;
  }
  @media (max-width: 1366px) {
    margin-bottom: 40px;
  }
}

.divRelative {
  position: relative;
  margin-top: 50px;
}

.text {
  text-align: left;
  @media (max-width: 1920px) {
    font-size: 1vw;
  }
  @media (max-width: 1366px) {
    font-size: 1.3vw;
  }
  line-height: 30px;
  margin-bottom: 20px;
}

.lowIcons {
  margin-top: 50px;
  margin-bottom: 20px;
   color: var(--font-color);
}

.divLowIcons {
  margin-right: 50px;
}

a:-webkit-any-link  {
  text-decoration: none;
  color: var(--font-color);
  &:hover {
    color: var(--medium-gray)
  }
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