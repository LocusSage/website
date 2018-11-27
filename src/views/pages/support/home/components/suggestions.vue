<template>
  <section class="grid-container">
    <div class="wrapper">
      <h4 class="section-title">Sugestões ou reclamações ?</h4>
    </div>  
    <div class="wrapper">
      <p class="text">Estamos focados em melhorar nossos serviços e estamos dispostos a ouvir atentamente seu feedback. Acredita que pode nos ajudar ? Tem uma sugestão de como podemos melhorar nossos produtos e serviços ? <a class="text"> Mande uma sugestão </a></p>
      <button>Enviar uma sugestão</button>
    </div>
  </section>  
</template>
<script>
export default {
  mounted: function () {
    this.$store.dispatch("support:recent-posts")
  }
}
</script>
<style lang="scss" scoped>
section {
  padding: 100px 0px;
}

.section-title {
  margin-bottom: 40px;
}

h4 {
  margin: 0px;
}

.wrapper {
  grid-column: 2/3;
}


.title { 
  margin-bottom: 10px;
}

h4 {
  font-weight: 600;
  font-family: "Graphik";
}

a {
  text-decoration: none;
  color: #29aae1
}

button {
  margin-top: 30px;
  border: 1px solid rgb(180,180,180);
  padding: 15px 60px;
  border-radius: 3px;
  color: rgb(180,180,180);
  &:hover {
    cursor: pointer;
    background: rgb(220,220,220);
    color: white;
  }
}


</style>
