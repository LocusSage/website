<template>
  <section class="grid-container">
    <div class="wrapper">
      <h2 class="header-title">Fale conosco por outros canais</h2>
      <p class="text">Estes canais te ajudam a entrar em contato diretamente com a MPS Cloud nos horários de atendimento. Nosso atendimento funciona de maneira simples e direta. Se for possível resolver seu problema na hora, tentaremos resolver ele na hora. 
Para entender como nosso atendimento funciona leia as <router-link class="router-link" to="">diretrizes de atendimento</router-link></p>
    </div>
    <div class="wrapper">
      <ul>
        <li>
          <icon class="hide-responsive" name="envelope" scale="1.5"/>
          <p>Contato por email em: <a class="text" href="mailto:support@mpscloud.com.br">support@mpscloud.com.br</a></p>
        </li>
        <li>
          <icon class="hide-responsive" name="brands/whatsapp" scale="1.7"></icon>
          <p>Você também pode falar conosco via WhatsApp
<a class="text" href="">clicando aqui</a> ou utilizando o telefone <a class="text" href="tel:+5531711165132">+55 31 7111 65132</a></p>
        </li>
        <li>
          <icon class="hide-responsive" name="phone" scale="1.5"></icon>
          <p>Se você precisar de uma resposta imediata, entre
em contato pelo número: <a class="text" href="tel:+5531711165312">+55 31 7111 65132</a></p>
          
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
section {
  border-bottom: 2px solid rgb(240,240,240);
  padding: 50px 0px;
}

.wrapper {
  grid-column: 2/3
}

h2{
  margin: 0;
  margin-bottom: 30px
}

ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  li {
    display: grid;
    grid-template-columns: 40px auto;
    font-size: calc(var(--font-size) / 2);
    margin-bottom: 30px;
    @media (max-width: 800px) {
      grid-template-columns: auto;
    }
    p {
      margin-left: 20px;
      @media (max-width: 800px) {
        margin-left: 0px;
      }
    }
  }
}

</style>
