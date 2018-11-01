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
  props: ['post'],
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
  text-align: center;
  font-weight: bold;
  font-family: 'Graphik';
}

img {
  height: 500px;
  width: 960px;
}

.post {
  margin: 10px;
}

.author {
  font-size: 1.2rem;
  color: var(--medium-gray);
  margin-top: 10px;
  margin-bottom: 20px;
}

.text {
  font-size: 1.3rem;
  margin-bottom: 20px;
  line-height: 30px;
  color: var(--font-color);
}

.tags {
  margin-bottom: 50px;
}

.underTags {
  color: var(--light-gray);
  font-size: 1rem;
}

.linkTag {
  font-size: 0.9rem;
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

svg {
  position: relative;
  top: 3px;
}

hr {
  box-sizing:border-box;
  width:100%;  
}

</style>