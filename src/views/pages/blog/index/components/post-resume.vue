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
        <p class="text" v-html="post.excerpt.rendered.substring(0, 329)+'...'"></p>
        <div class="tags" >
          <span class="underTags">Under this tags </span>
          <span class="tags" v-for="tag in post._embedded['wp:term'][1]" :key="tag.id">
            <a href="#"> {{tag.name}} </a>
          </span>
        </div>
        <p class="link-more">
          <a href="#" class="more-link">
            Continue reading
            <span><icon name="arrow-right" scale="1.0"/></span>
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
  computed: {
    posts: function () { return this.$store.getters['blog:posts'] },
    tags: function () { return this.$store.getters['blog:tags'] }
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
  font-size: 1.2rem;
  margin-bottom: 50px;
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

.link-more {
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