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
    position: absolute;
    background: var(--theme-color);
    z-index: 3;
    padding: 90px 0px;
    width: 100%;
    color: white;
  }
  .logo-mark {
    margin-top: 15px;
    @media (min-width: 340px) {
    font-size: 1.6rem;
    }
    @media (min-width: 768px) and (max-width:1366px) {
    font-size: 2rem;
    }
   @media (min-width: 1920px)  {
      font-size: 2rem;
    }
    font-family: "Circular", sans-serif;
    opacity: 1
  }

  .base  { 
  @media (min-width: 340px) {
    width: 90%;
    font-size: 12px;
  }
  @media (min-width: 768px) and (max-width:1366px) {
    width: 70%;
    font-size: 14px;
  }
  @media (min-width: 1920px)  {
    width: 40%;
    font-size: 18px;
  }
    opacity: .9;
  }

  .social {
  @media (min-width: 340px) {
    width: 40%;
  }
  @media (min-width: 1920px)  {
    width: 10%;
  }
    
    a {
      color: white !important;
    }
  }

  h4 {
    @media (min-width: 340px) {
    font-size: 1.5rem;
    }
    @media (min-width: 768px) and (max-width:1366px) {
    font-size: 2rem;
    }
   @media (min-width: 1920px)  {
      font-size: 2rem;
    }
    margin-bottom: 10px;
  }
  .info {
    text-align: center;
    @media (min-width: 340px) {
    font-size: 14px;
    }
    @media (min-width: 768px) and (max-width:1366px) {
    font-size: 16px;
    }
   @media (min-width: 1920px)  {
      font-size: 16px;
    }
    line-height: 1.6;
    
  }

  .copyrights {
    margin-top: 50px;
  }
</style>
