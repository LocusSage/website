<template>
  <section>
    <div class="wrapper">
      <div>
        <h2 class="header-title">Ainda não resolveu seu problema ?</h2>
        <p class="text">Antes de tentar entrar em contato, temos alguns outros artigos de problemas relacionados com este para que você possa ler</p>
      </div>
      <div class="recommended-posts grid medium-col-3">
        <div class="post span-1" v-for="post in posts" :key="post.id">
          <p class="title">{{post.title.rendered}}</p>
          <router-link class="router-link" to="">Ler agora</router-link>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  computed: {
    posts: function () { return this.$store.getters['support:recommended-posts'] }
  }
}
</script>
<style lang="scss" scoped>

.wrapper {
  grid-column: 2/3;
  padding: 50px 0px;
}

section {
  background: rgb(240,240,240);
}

h2 {
  margin: 0;
  margin-bottom: 20px;
}

.recommended-posts {
  margin-top: 50px;
}

.recommended-posts .title {
  font-size: calc(var(--font-size) / 2);
  font-weight: 600;
  margin-bottom: 10px;
}

</style>
