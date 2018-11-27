<template>
  <section class="grid-container" v-if="posts.length > 0">
    <div class="wrapper">
      <h4 class="section-title">Últimos artigos lidos</h4>
    </div>  
    <div class="grid wrapper last-read-carousel medium-col-3">
      <div class="article" v-for="post in posts" :key="post.id">
        <p class="tag">BASE DE CONHECIMENTO</p>
        <p class="post-title">{{post.title.rendered}}</p>
        <p class="last-read">Lido em {{post.modified | normalizeDate }}</p>
        <router-link :to="{name: 'KnowledgeBasePost', params: { id: post.id, title: post.title.rendered }}">Ler agora</router-link>
      </div>
    </div>
  </section>  
</template>
<script>
import moment from 'moment'
moment.locale("PT-BR")
export default {
  computed: {
    posts: function () { return this.$store.getters["support:recent-posts"] }
  },
  filters: {
    normalizeDate: function (date) {
      return moment(date).format("DD MMMM [às] HH:mm")
    }
  }
}
</script>
<style lang="scss" scoped>
section {
  border-top: 2px solid rgb(240,240,240);
  border-bottom: 2px solid rgb(240,240,240);
  padding: 50px 0px;
}

.section-title {
  margin-bottom: 40px;
  font-size: var(--font-size);
}

h4 {
  margin: 0px;
}

.wrapper {
  grid-column: 2/3;
}

.last-read-carousel {
  grid-gap: 50px;
}

.title,
.tag,
.last-read {
  margin-bottom: 10px;
}

h4,
.article .title {
  font-size: 32px;
  font-weight: 600;
  font-family: "Graphik";
  
}
.post-title {
  font-size: calc(var(--font-size) / 2);
  margin-bottom: 10px;
  color: rgb(30,30,30);
  font-weight: 600;
}
.tag {
  color: rgb(200,200,200);
  letter-spacing: calc(var(--font-size) * 100 / 1000);
  font-size: 12px;
}

.last-read {
  font-size: 16px;
  color: rgb(200,200,200);
}

a {
  text-decoration: none;
  color: #29aae1
}


</style>
