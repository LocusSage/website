<template>
<div>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <h3>{{post.title.rendered}}</h3>
      <div v-if="post._embedded['wp:featuredmedia']">
				<img :src="post._embedded['wp:featuredmedia'][0].source_url" />
      </div>
      <p class="author">{{post._embedded.author[0].name}}</p>
      <p class="texto">{{post.excerpt.rendered}}</p>
      <span>Under this tags</span>
    </li>
  </ul>
</div>  
</template>
<script>

export default {
  mounted () {
    console.log(this)
  },
  computed: {
    posts: function () { return this.$store.getters['blog:posts'] }
  },
  created: function (post) {
    this.$store.dispatch('blog:load-data')
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
  width:960px;
}

.author {
  font-size: 18px;
  color: var(--medium-gray);
  margin-top: 20px;
   margin-bottom: 20px;
}

.texto {
  margin-bottom: 50px;
}

</style>