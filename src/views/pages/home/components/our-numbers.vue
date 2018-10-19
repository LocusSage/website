<template>
  <section class="grid large-col-5">
    <div class="description span-2 grid">
      <div class="span-1 flex align-center column">
        <h4 class="text">Você está muito bem acompanhado</h4>
        <p class="text">Diversos médicos trabalham diariamente conosco e já conhecem o poder que a ferramenta da MPS tem</p>
      </div>
      <div class="span-1 info flex column align-middle align-center span-1">
        <div class="flex column align-middle align-center span-1">
          <img src="@/assets/icons/SVG/transfer.svg" width="75px" alt="Design">
          <h6>+6000 GB</h6>
          <p>Transferidos do nosso servidor para clínicas por mês</p>
        </div>
      </div>
    </div>

    <div class="characteristics-list span-3 grid large-col-2 small-col-1">
      <div class="info flex column align-middle align-center span-1">
        <img src="@/assets/icons/SVG/hospital.svg" width="75px" alt="Design">
        <h6>+90</h6>
        <p>Design centrado <br> no usuário</p>
      </div>
      <div class="info flex column align-middle align-center span-1">
        <img src="@/assets/icons/SVG/medicine.svg" width="75px" alt="Design">
        <h6>+500</h6>
        <p>Soluções que funcionam <br> online e offline</p>
      </div>
      <div class="info flex column align-middle align-center span-1">
        <img src="@/assets/icons/SVG/reports.svg" width="75px" alt="Design">
        <h6>+1000</h6>
        <p>Acesso à nuvem de <br> qualquer parte do planeta</p>
      </div>
      <div class="info flex column align-middle align-center span-1">
        <img src="@/assets/icons/SVG/records.svg" width="75px" alt="Design">
        <h6>+500.000</h6>
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
  padding: 50px 0px;
  grid-gap: 10px;
}
.align-spaced {
  align-items: flex-end
}
.description {
  grid-template-rows: 1fr 1fr;
  grid-gap: 10px;
}
h4.text {
  margin: 0;
  font-size: 3rem;
  line-height: 1;
  @media (max-width: 460px) {
    width: 100%;
  }
}

p.text {
  font-size: 1.5rem;
  margin-top: 20px;
}

.characteristics-list  {
  flex-flow: row wrap;
  width: 100%;
  grid-gap: 10px;
}

h6 {
  margin: 20px 0px 0px;
  font-size: 2rem;
}
.info {
  flex-grow: 1;
  border: 1px solid lightgray;
  border-radius: 3px;
  padding: 60px 0px;
  transition: all ease-in-out .2s;
  &:hover {
    background: rgb(245, 245, 245)
  }
}
.info p {
  text-align: center;
  font-size: 1.5rem;
}
</style>
