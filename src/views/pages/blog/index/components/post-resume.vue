<template>
<div>
  <ul >
    <li v-for="post in posts" :key ="post.id">
      <h3>{{post.title.rendered}}</h3>
      <div class="featured-media-container" v-if="post._embedded['wp:featuredmedia']">
				<img :src="post._embedded['wp:featuredmedia'][0].source_url" />
      </div>
      <div class="post">
        <p class="author">{{post._embedded.author[0].name}}</p>
        <p class="text" v-html="post.excerpt.rendered.replace(/<p[^>]+>[^>]+>[^>]+>[^>]+>[^>]+>[^>]+>/g, '')"></p>
        <div class="tags">
          <span class="underTags">Tags</span>
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
  @media (min-width: 340px) {
    font-size: calc(1.6rem + ((1vw - 0.3rem) * 0.5556));
  }
  @media (min-width: 1920px) {
    font-size: 2.3rem;
  }
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;
  font-family: 'Graphik';
}

.featured-media-container {
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 400px;
  overflow: hidden;
}

img {
  width: 100%;
  height: auto;
}

.post {
  margin: 10px;
}

.author {
 @media (min-width: 340px) {
    font-size: calc(1rem + ((1vw - 0.3rem) * 0.2778));
  }
  @media (min-width: 1920px) {
    font-size: 1.2rem;
  }
  color: var(--medium-gray);
  margin-top: 10px;
  margin-bottom: 20px;
}

.text {
  @media (min-width: 340px) {
    font-size: calc(1rem + ((1vw - 0.3rem) * 0.2778));
  }
  @media (min-width: 1920px) {
    font-size: 1.3rem;
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
  @media (min-width: 340px) {
    font-size: calc(0.8rem + ((1vw - 0.3rem) * 0.6667));
  }
  @media (min-width: 1920px) {
    font-size: 1.1rem;
  }
}

.linkTag {
   @media (min-width: 340px) {
    font-size: calc(0.7rem + ((1vw - 0.3rem) * 0.3889));
  }
  @media (min-width: 1920px) {
    font-size: 0.950rem;
  }
}

a {
  color: var(--dark-blue);
  text-decoration: none;
}

.continueReading {
 @media (min-width: 340px) {
    font-size: calc(0.9rem + ((1vw - 0.3rem) * 0.4444));
  }
  @media (min-width: 1920px) {
    font-size: 1.2rem;
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