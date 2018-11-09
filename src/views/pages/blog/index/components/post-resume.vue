<template>
<div>
  <ul >
    <li v-for="post in posts" :key ="post.id">
      <h3>{{post.title.rendered}}</h3>
      <div v-if="post._embedded['wp:featuredmedia']">
				<img :src="post._embedded['wp:featuredmedia'][0].source_url" />
      </div>
      <div class="post">
        <p class="author">{{post._embedded.author[0].name}}</p>
        <p class="text" v-html="post.excerpt.rendered.replace(/<p[^>]+>[^>]+>[^>]+>[^>]+>[^>]+>[^>]+>/g, '')"></p>
        <div class="tags">
          <span class="underTags">Under this tags </span>
          <router-link  v-for="tag in post._embedded['wp:term'][1]" :key="tag.id" :to="{name:'Blog-Tags', params: {tag: tag.id, slug: tag.slug}}">
            <span class="tags">
              <a class="linkTag" href="#"> &nbsp; {{tag.name}} &nbsp; </a>
            </span>
          </router-link>
        </div>
        <p class="continueReading">
          <router-link :to="{name:'Blog-Post', params: {id: post.id, slug: post.slug}}">
            <span> Continue reading <icon name="arrow-right" scale="1.0"/></span>
          </router-link>
        </p>
      </div>
      <hr/>
    </li>
  </ul>
</div>  
</template>
<script>

export default {
  props: ['tag'],
  computed: {
    posts: function () { return this.$store.getters['blog:posts'] }
  }
}
</script>

<style scoped lang="scss">

ul {
 list-style-type: none; 
}

h3 {
  font-size: 2.5rem;
  text-align: center;
  font-weight: bold;
  font-family: 'Graphik';
}

img {
  
 @media (max-width: 1920px) {
    width: 960px;
  }
  @media (max-width: 1366px) {
    width: 660px;
  }
  height: auto;
}

.post {
  margin: 10px;
}

.author {
  @media (max-width: 1920px) {
    font-size: 1vw;
  }
  @media (max-width: 1366px) {
    font-size: 1.3vw
  }
  color: var(--medium-gray);
  margin-top: 10px;
  margin-bottom: 20px;
}

.text {
  @media (max-width: 1920px) {
    font-size: 1.2vw;
  }
  @media (max-width: 1366px) {
    font-size: 1.5vw
  }
  margin-bottom: 20px;
  line-height: 30px;
  color: var(--font-color);
}

.tags {
  margin-bottom: 50px;
}

.underTags {
  color: var(--light-gray);
 @media (max-width: 1920px) {
    font-size: 1.1vw;
  }
  @media (max-width: 1366px) {
    font-size: 1.4vw
  }
}

.linkTag {
  @media (max-width: 1920px) {
    font-size: 1vw;
  }
  @media (max-width: 1366px) {
    font-size: 1.3vw
  }
}

a:-webkit-any-link  {
  color: var(--dark-blue);
  text-decoration: none;
}

.continueReading {
 @media (max-width: 1920px) {
    font-size: 1.2vw;
  }
  @media (max-width: 1366px) {
    font-size: 1.550vw
  }
  display: block;
  margin-bottom: 50px;
}

svg {
  position: relative;
  top: 3px;
}

hr {
  box-sizing:border-box;
  width:100%;  
}

</style>