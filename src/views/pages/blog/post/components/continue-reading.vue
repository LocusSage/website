<template>
<div>
  <ul class="flex align-justify">
    <li v-for="post in posts" :key ="post.id">
      <div v-if="post._embedded['wp:featuredmedia']">
        <img :src="post._embedded['wp:featuredmedia'][0].source_url" />
      </div> 
      <h5>{{post.title.rendered}}</h5>
      <div class="post">
        <p class="text" v-html="post.excerpt.rendered.replace(/<p[^>]+>[^>]+>[^>]+>[^>]+>[^>]+>[^>]+>/g, '')"></p>
        <p class="continueReading">
          <router-link  :to="{name:'Blog-Post', params: {id: post.id, slug: post.slug}}">
            <span @click="refresh">Continue reading</span>
          </router-link>
        </p>
      </div>
    </li>
  </ul>
</div>  
</template>
<script>

import postId from './post'

export default {
  components: {
    'post': postId
  },
  computed: {
    posts: function () { return this.$store.getters['blog:posts:continue-reading'] }
  },
  methods: {
    refresh () {
      window.location.reload()
    }
  }
}
</script>

<style scoped lang="scss">

ul {
 list-style-type: none;
 
}

li {
  margin-right: 20px;  
}

h5 {
  text-align: left;
  margin-bottom: 10px;
  margin-top: 10px;
  font-weight: bold;
  font-family: 'Graphik';
}

.subtitle {
  margin-bottom: 10px;
}

img {
  margin-top: 20px; 
  height: 200px;
  width: 100%;
}

.text {
  text-align: left;
  font-size: 1.1rem;
  margin-bottom: 20px;
  color: var(--font-color);
}

a:-webkit-any-link  {
  color: var(--dark-blue);
  text-decoration: none;
}

.continueReading {
  font-size: 0.9rem;
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