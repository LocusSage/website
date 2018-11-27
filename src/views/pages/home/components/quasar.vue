<template>
  <section class="grid-container">
    <div class="wrapper">
      <h4 class="title-tracked text-center">QUASAR</h4>
      <h2 class="header-title text-center">Gerenciamento inteligente
de laudos e controle de imagens PACS</h2>
      <p class="text text-center">Permite você gerenciar tudo em um aplicativo. De alterações em dados de pacientes à como os laudos são visualizados e escritos. Controle total do começo ao fim</p>
      <div class="link text-center">
        <router-link class="text-center text" :to="{ name: 'quasar'}">Conheça</router-link>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
section {
  margin-top: 150px;
}

.wrapper {
  grid-column: 2/3;
}

h4 {
  margin: 0px;
}

.header-title,
.text {
  width: 75%;
  margin: 0 auto;
}

.header-title {
  margin-bottom: 50px; 
}

.link {
  margin-top: 20px;
}
</style>
