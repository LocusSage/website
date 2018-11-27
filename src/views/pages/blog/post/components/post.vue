<template>
  <div class="post-wrapper" v-if="post">
    <div class="author">
      <div class="image-container flex align-middle">
        <div class="circle-image" v-if="post._embedded.author">
          <img class="avatar" :src="post._embedded.author[0].avatar_urls[96]">
        </div>
        <div>
          <p class="authorName" v-if="post._embedded.author">{{post._embedded.author[0].name}}</p>
          <p class="authorDescription" v-if="post._embedded.author">{{post._embedded.author[0].description}}</p>
        </div>
      </div>
    </div>
    <h3>{{post.title.rendered}}</h3>
    <p class="subtitle">{{post.wps_subtitle}}</p>
    <div class="flex">
      <div class="image-wrapper">
        <img v-if="post._embedded['wp:featuredmedia']" :src="post._embedded['wp:featuredmedia'][0].source_url" />
      </div>
      
    </div>

    <!-- 
    
      RENDERED CONTENT OF THE POST 
      
    -->
    <div class="post text-content"  v-html="post.content.rendered"> </div>
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

.post-wrapper {
  font-size: 19px;
  width: 100%;
  font-family: "Merryweather";
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
  margin-bottom: 20px;
}

.authorName {
  font-size: 1.2rem;
}

.authorDescription {
  font-size: 0.8rem;
}



h3 {
  @media (min-width: 340px) {
    font-size: calc(1.6rem + ((1vw - 0.3rem) * 0.5556));
  }
  @media (min-width: 1920px) {
    font-size: 2.618rem;
  }
  margin-top: 10px;
  margin-bottom: 5px;
  font-weight: 400;
  font-family: 'Graphik';
}

.subtitle {
  color: var(--font-color);
  font-size: 1.3rem;
  margin-bottom: 20px;
}

.image-wrapper {
  width: 100%;
  height: 300px;
  max-height: 300px;
  overflow: hidden;
  position: relative;
}

img {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
  width:100%;
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

.post {
  font-family: "Graphik";
  font-size: 1em;
  p {
    color: red !important
  }
}




</style>