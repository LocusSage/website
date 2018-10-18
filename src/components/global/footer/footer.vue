<template>
  <footer>
    <div class="logo flex align-center">
      <div class="svg flex align-middle column">
        <img src="@/assets/logo/cloud-logo-white.svg" width="45px" alt="">
        <span class="logo-mark">MedCloud</span>
      </div>
    </div>

    <div class="flex align-center">
      <ul class="menu base align-justify">
        <li>Nossa História</li>
        <li>Suporte</li>
        <li>Demo</li>
        <li>Políticas de segurança</li>
      </ul>
    </div>
    <div class="flex align-center">
      <ul class="menu social  align-justify">
        <li><a target="blank" href="https://www.facebook.com/mpscloud/"><icon name="brands/facebook" scale="1.5" /></a></li>
        <li><a target="blank" href="https://www.linkedin.com/company/mps-cloud/"><icon name="brands/linkedin" scale="1.5" /></a></li>
        <li><a target="blank" href="https://www.instagram.com/mpsclouds/?hl=pt-br"><icon name="brands/instagram" scale="1.5" /></a></li>
      </ul>
    </div>

    <div class="flex align-middle column">
      <div class="title">
        <h4>Contato</h4>
      </div>
      <div class="info">
        Fone: +55 (31) 3166 - 3511 <br />
        Email: contato@mpscloud.com.br <br>
        Atendimento das 8:00 às 18:00
      </div>
    </div>

    <div class="flex align-center copyrights">
      <small>2011-{{date}} Todos os direitos reservados</small>
    </div>
  </footer>
</template>
<script>
export default {
  data: function () {
    return {
      date: new Date().getFullYear()
    }
  }
}
</script>
<style lang="scss" scoped>
  footer {
    background: var(--theme-color);
    padding: 90px 0px;
    width: 100%;
    color: white;
  }
  .logo-mark {
    margin-top: 15px;
    font-size: 2rem;
    font-family: "Circular", sans-serif;
    opacity: 1
  }

  .base  {
    width: 40%;
    opacity: .9;
  }

  .social {
    width: 10%;
    a {
      color: white !important;
    }
  }

  h4 {
    margin-bottom: 10px;
  }
  .info {
    text-align: center;
    line-height: 1.6;
    font-size: 16px;
  }

  .copyrights {
    margin-top: 50px;
  }
</style>
