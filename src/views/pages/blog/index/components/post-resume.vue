<template>
<div>
  <ul>
    <li v-for="post in posts" :key ="post.id">
      <h3>{{post.title.rendered}}</h3>
      <div v-if="post._embedded['wp:featuredmedia']">
				<img :src="post._embedded['wp:featuredmedia'][0].source_url" />
      </div>
      <div class="post">
        <p class="author">{{post._embedded.author[0].name}}</p>
        <p class="texto" v-html="post.content.rendered"></p>
        <div class="tags align-justify">
          <span class="underTags">Under this tags </span>
          <a href="#"> {{post._embedded['wp:term'][1][0].name}} </a>
        </div>
        <span class="continue">
          <a href="#">Continue reading  <icon name="arrow-right" scale="1.0"/></a> 
        </span>
      </div>
      <hr/>
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
  created: function () {
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

.post {
  margin: 10px;
}

.author {
  font-size: 1.2rem;
  color: var(--medium-gray);
  margin-top: 10px;
  margin-bottom: 20px;
}

.texto {
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: var(--font-color);
}

.tags {
  font-size: 0.9rem;
  margin-bottom: 50px;
}

.underTags {
  color: var(--light-gray);
}

a:-webkit-any-link  {
  color: var(--dark-blue);
  text-decoration: none;
}

.continue {
  font-size: 18px;
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