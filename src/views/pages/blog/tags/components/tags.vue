<template >
<div>
  <div class="start">
    <h4>{{title}}</h4>
    <p class="text">Tudo que o nosso time marcou com essa tag, aparecerá<br />nesta seção. Caso queira mudar o assunto, basta reselecionar ele.<br />Boa leitura!</p>
  </div>
  <div class="flex">
    <div v-for="tag in tags" :key="tag.id" class="posts">
      <div>
        <img :src="tag._embedded['wp:featuredmedia'][0].source_url" />
      </div> 
      <router-link :to="{name:'Blog-Post', params: {id: tag.id, slug: tag.slug}}">
        <div class="divAbsolute">
          <div class="divRelative">
            <div class="image-container flex">
              <div class="circle-image">
                <img class="avatar" :src="tag._embedded.author[0].avatar_urls[96]">
              </div>
              <div class="author">
                <p class="authorName">{{tag._embedded.author[0].name}}</p>
                <p class="authorDescription">athor {{tag._embedded.author[0].description}}</p>
              </div> 
            </div>
            <div class="title">
              <h5>{{tag.title.rendered}}</h5>
            </div> 
          </div>
        </div>
      </router-link>
    </div>
  </div>       
</div>  
</template>
<script>

export default {
  computed: {
    title: function () { return this.$route.params.slug },
    tags: function () { return this.$store.getters['blog:tags'] }
  }
}
</script>

<style scoped lang="scss">

ul {
 list-style-type: none; 
}

.start {
  margin-top: 60px;
}

.posts {
  display: inline-block;
  height: 300px;
  width: 560px;
  text-align: justify;
  margin-bottom: 20px;
  margin-right: 20px;
  border-radius: 10px;
}

img {
 width: 100%;
 height: auto;
 border-radius: 10px;
  background: black 
}

.title {
  color: white;
}

h4 {
  font-size: 2rem;
  font-weight: bold;
  font-family: 'Graphik';
  margin-bottom: 10px;
  margin-top: 15px;
}

.text {
  font-size: 1.1rem;
  text-align: left;
  margin-bottom: 30px;
}

.divAbsolute {
  width: 300px;
  margin: 30px;
  position: absolute;
}

.divRelative {
  position: relative;
  bottom: 150px; 
  width: 300px;
}

.image-container {
  color: white;
}

.circle-image{
  overflow: hidden;
  border-radius: 100%;
  height: 50px;
  width: 50px;
  margin-right: 10px;
  &:hover{
    cursor: pointer;
  }
}

.circle-image img{
  height: 50px;
  width: 50px;
}

.authorName {
  margin-top: 3px;
  font-size: 1.2rem;
}

.authorDescription {
  font-size: 0.8rem;
}

h5 {
  margin-top: 10px;
  font-weight: bold;
  font-family: 'Graphik';
}

</style>