<template>
  <section class="grid large-col-4">
    <div class="description span-4 flex align-middle column">
      <h4 class="text">Gestão e automação inteligente de sistemas de radiologia</h4>
      <p class="text">Movida à desafios, a MPS Cloud busca digitalizar o fluxo de serviço de radiologia, automatizando tarefas repetitivas oferecendo soluções inteligentes, acessíveis e confiáveis</p>
    </div>

    <div class="characteristics-list span-4 flex align-spaced align-justify">
      <div class="info flex column align-middle align-center">
        <img src="@/assets/icons/SVG/design.svg" width="75px" alt="Design">
        <h6>Design</h6>
        <p>Design centrado <br> no usuário</p>
      </div>
      <div class="info flex column align-middle align-center">
        <img src="@/assets/icons/SVG/wifi.svg" width="75px" alt="Design">
        <h6>Acessibilidade</h6>
        <p>Soluções que funcionam <br> online e offline</p>
      </div>
      <div class="info flex column align-middle align-center">
        <img src="@/assets/icons/SVG/earth.svg" width="75px" alt="Design">
        <h6>Disponibilidade</h6>
        <p>Acesso à nuvem de <br> qualquer parte do planeta</p>
      </div>
      <div class="info flex column align-middle align-center">
        <img src="@/assets/icons/SVG/robot.svg" width="75px" alt="Design">
        <h6>Inteligência</h6>
        <p>Desenvolvido por quem <br> entende e tem experiência</p>
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
  padding: 50px 0px 70px;
}
.align-spaced {
  align-items: flex-end
}

.description {
  width: 100%;
  text-align: center;
}

h4.text {
  margin: 0;
  width: 40%;
  font-size: 2rem;
  @media (max-width: 460px) {
    width: 100%;
  }
}

p.text {
  width: 60%;
  font-size: 1.5rem;
  margin-top: 20px;
}

.characteristics-list  {
  margin-top: 80px;
  flex-flow: row wrap;
  width: 100%;
}

h6 {
  margin: 20px 0px;
  font-size: 1.5rem;
}
.info {
  flex-grow: 1;
  margin-top: 30px;
}
.info p {
  text-align: center;
  font-size: 1.5rem;
}

</style>
