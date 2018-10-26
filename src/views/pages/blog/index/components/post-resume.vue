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
          <span class="tags" v-for="tag in post._embedded['wp:term'][1]" :key="tag.id">
            <a class="linkTag" href="#"> &nbsp; {{tag.name}} &nbsp; </a>
          </span>
        </div>
        <p class="continueReading">
          <a href="#" class="more-link">
           <router-link :to="{name:'Post'}"> 
              Continue reading 
              <span><icon name="arrow-right" scale="1.0"/></span>
            </router-link>
          </a>
        </p>
      </div>
      <hr/>
    </li>
  </ul>
</div>  
</template>
<script>

export default {
  filters: {
    removeLink: function (str) {
      return str.replace(/<p[^>]+[^>]+(link-more)[^>]+>[^>]+>[^>]+>[^>]+>[^>]+>[^>]+>/g)
    }
  },
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