<template>
  <header class="grid-container">
    <div class="wrapper">
      <h2 class="header-title">Base de Conhecimento</h2>
      <div class="search">
        <form @submit.prevent >
          <label class="text" for="search">Pesquise um termo e tecle enter</label>
          <input type="search" @input="searchPost" v-model="searchKeyword" tabindex="0" id="search">
          <div class="filtered-posts" v-if="searchKeyword">
            <div v-for="post in filteredPosts" :key="post.id">
              <router-link class="router-link" :to="{name: 'KnowledgeBasePost', params: { id: post.id, title: post.title.rendered }}">
                <li>{{post.title.rendered}}</li>  
              </router-link>
            </div>
          </div>
        </form>
      </div>
      <div class="description">
        <p class="text">A base de conhecimento é sua. Pesquise à vontade. Caso não consiga encontrar alguma resposta ou ainda fique em dúvida, estamos disponíveis das 08 às 18 horas de segunda à sexta para atender sua demanda.</p>
      </div>
    </div>
  </header>
</template>
<script>
import store from "@/store"
export default {
  data: function () {
    return {
      searchKeyword: ""
    }
  },
  methods: {
    searchPost: function () {
      console.log('input')
      let keyword = this.searchKeyword
      this.$store.getters["support:search-posts"](keyword)
    }
  },
  computed: {
    filteredPosts: function () { return this.$store.getters["support:filtered-posts"] }
  }
}
</script>

<style lang="scss" scoped>

.filtered-posts {
  border-radius: 3px;
  border: 1px solid rgb(220,220,220);
  padding: 10px 0px;
  box-shadow: 0px 5px 10px 2px rgba(240,240,240,.5), 0px 5px 10px 2px rgba(220,220,220, .5);
  a {
    text-decoration: none;
  }
  li {
    padding: 10px 20px;
    list-style: none;
    &:hover {
      background: rgba(220,220,220,.2);
      cursor: pointer;
    }
  }
}

header {
  padding: 50px 0px;
}

.wrapper {
  grid-column: 2/3;
  @media(max-width: 720px) {
    grid-column: span 4;
    padding: 0px 20px;
  }
}

label {
  color: rgb(200,200,200);
  font-size: calc(var(--font-size) / 3);
}

h2 {
  margin: 0;
  margin-bottom: 30px;
}

input{
  border-radius: 3px;
  font-size: 16px;
  min-height: 50px;
  border-radius: 5px;
  margin-bottom: 5px;
  -webkit-appearance: none;
  @media(max-width: 1280px) {
    border-radius: 0px !important;
  }
  &:focus {
    outline: none;
    box-shadow: 1px 0px 3px 1px rgba(200,200,200, .6);
  }
}

.description {
  margin-top: 20px;
  width: 75%;
  @media (max-width: 920px) {
    width: 100%;
  }
  .text {
    color: rgb(90,90,90);
    font-size: calc(var(--font-size) / 2);
  }
}

</style>
