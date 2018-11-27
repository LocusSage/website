<template>
  <section class="grid-container">
    <div class="wrapper">
      <h4 class="title-tracked text-center">GAMMA</h4>
      <h2 class="header-title text-center">Servidor PACS configurado para
suprir as necessidades da clínica</h2>
      <p class="text text-center">O aplicativo GAMMA para servidores PACS permite configurações finas de rotinas de imagens nas clínicas, resolvendo problemas de gerenciamento e exclusão de imagens ao criar rotinas automatizadas. </p>
      <div class="link text-center">
        <router-link class="text-center text" :to="{ name: 'quasar'}">Em fase Alpha</router-link>
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
  background: rgb(240,240,240);
  padding: 100px 0px;
}

.wrapper {
  grid-column: 2/3
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
