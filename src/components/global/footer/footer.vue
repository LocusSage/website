<template>
  <footer class="grid-container">
    <hr class="span">
    <div class="grid footer-menus">
      <div class="left">
        <ul class="menu vertical">
          <li class="list-title">MPS Cloud</li>
          <li>Nossa História</li>
          <li>Suporte</li>
          <li>Solicitar uma demonstração</li>
        </ul>
      </div>
      <div>
        <ul class="menu vertical">
          <li class="list-title">Produtos</li>
          <li><a target="blank" href="https://www.facebook.com/mpscloud/">Quasar</a></li>
          <li><a target="blank" href="https://www.instagram.com/mpsclouds/?hl=pt-br">Talker</a></li>
        </ul>
      </div>

      <div>
        <ul class="menu vertical">
          <li class="list-title">Segurança</li>
          <li>Diretrizes de Segurança</li>
          <li>Diretrizes de Tecnologia</li>
        </ul>
      </div>

      <div>
        <ul class="menu vertical">
          <li class="list-title">Contato</li>
          <li><a target="blank" href="https://www.facebook.com/mpscloud/"><icon name="brands/facebook" scale="1" />Facebook</a></li>
          <li><a target="blank" href="https://www.linkedin.com/company/mps-cloud/"><icon name="brands/linkedin" scale="1" />Linkeding</a></li>
          <li><a target="blank" href="https://www.instagram.com/mpsclouds/?hl=pt-br"><icon name="brands/instagram" scale="1" />Instagram</a></li>
          <li><a href=""><icon name="phone"></icon>+55 (31) 3166 - 3511</a></li>
          <li><a href=""><icon name="envelope"></icon>contato@mpscloud.com.br</a></li>
        </ul>
      </div>

      <div>
        <ul class="menu vertical">
          <li class="list-title">Sistema</li>
          <li>Login</li>
          <li>Suporte</li>
        </ul>
      </div>
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
  font-size: 12px;
  margin-bottom: 50px;
}
hr {
  border-top: 1px solid rgb(240,240,240);
  display: block;
  width: 100%;
}

.wrapper, .span {
  grid-column: 2/3;
  @media (max-width: 720px) {
    grid-column: span 3
  }
}

.menu {
  font-size: 1em;
  color: rgb(100,100,100);
  .list-title {
    font-weight: normal;
    color: rgb(200,200,200)
  }
  li {
    margin-top: 15px;
    a {
      display: flex;
      align-items: center;
      font-size: 12px;
      svg {
        margin-right: 10px;
      }
    }
  }
}

.footer-menus {
  grid-column: 2/3;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-content: space-between;
  @media (max-width: 720px) {
    grid-column: span 3;
    grid-template-columns: 1fr;
    padding: 0px 20px;
  }
}

.copyrights {
  grid-column: 1/6;
  text-align: center;
}
</style>
