<template>
  <div class="wrapper">
    <div class="hero">
      <div class="inner-hero">
        <div class="bold">QUASAR</div>
        <div class="title">O poder do PACS nas suas mãos</div>
        <p>Automação e controle de imagens PACS em qualquer parte do mundo. Dentro da sua clínica ou no conforto da sua casa, o poder é seu.</p>
      </div> 
   </div>
    <div class="cards">

      <!-- LEFT COLUMN -->
      <div class="column">
        <page-card class="profile span-1">
          <div class="sub">AVANÇOS</div>
          <div class="title">Manuseio de Perfil</div>
          <p>Seu perfil pode ser editado, redefinido, apagado ou alterado com facilidade. Adicione ou retire qualquer informação, a qualquer momento.</p>
          <img class="profile-card" src="@/assets/images/macbook.svg" width="800px" height="auto" alt="">
        </page-card>
        <page-card class="patient-edit">
          <div class="sub">RECURSOS</div>
          <div class="title">Edição de Pacientes</div>
          <p>Edite  erros  nos  dados  dos  pacientes  comfacilidade.  Trocas  são  sincronizadascom  o  sistema  e  o  servidor.  Tenha  mais  poder  e  torne  sua  vida  mais  prática</p>
        </page-card>
        <page-card class="security">
          <img src="@/assets/images/macbook.svg"  alt="">
          <div class="sub">SEGURANÇA</div>
          <div class="title">Use sem Medo</div>
          <p>Sistema  é  servido  em  HTTPS,  utiliza  TLS  paracomunicação  com  servidores  locais  e  remotos.Derrube  usuários,  revogue  acessos,  criee  edite  permissões  do  usuário  em  tempo  real</p>
        </page-card>
      </div>


      <!-- RIGHT COLUMN -->

      <div class="column">
        <page-card class="portability span-1">
          <img src="@/assets/images/iphone.svg" width="300px" alt="">
          <div class="sub initial">PORTABILIDADE</div>
          <div class="title">Dispositivos móveis</div>
          <p>Desenvolvendo  uma  versão  melhorada,  especialmente  para  celulares,  providenciando  a  melhor  experiência  que  você  vai  encontrar  em  um  aplicativo  móvel</p>
        </page-card>
        
        <page-card class="locus-box">
          <img src="@/assets/images/safari.svg" alt="">
          <div class="sub">Recursos</div>
          <div class="title">Locus Box</div>
          <p>Sistema  inteligente  de  distribuição  de  exames  por  demandaintegrado  e  configurável  diretamente  no  sistema  em  várias  camadas</p>
        </page-card>

        <page-card class="multiplatform">
          <img src="@/assets/images/macbook.svg"  alt="">
          <div class="sub">RECURSOS</div>
          <div class="title">Multiplataforma</div>
          <p>Não  importa  seu  sistema  operacional.  O  Quasar  consegue  atender  os  interesses  tanto  de  usuários  dos  sistemas  apple  quanto  dos  sistemas  Windows</p>
        </page-card>
      </div>
    </div>
    <section class="span-1 resources">
      <div class="section-header">
        <p class="sub">SEGURANÇA</p>
        <p class="title">Principais Recursos</p>
        <p>A MPS refez o sistema e apresenta recursos inéditos que facilitam e agilizam o fluxo de entrega de laudos no sistema inteiro</p>
      </div>
    </section>
  </div>
</template>
<script>
import Card from './components/card'

export default {
  components: {
    'page-card': Card
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: 15% auto 15%;
  background: rgb(250,250,250);
  @media(max-width: 1280px) {
    grid-template-columns: 5% auto 5%;
  }
  color: #515151;
}
.hero {
  padding: 20px 50px;
  box-sizing: border-box;
  display: grid;
  grid-column: 2/3;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 70% 30%;
  background: #161616;
  min-height: 450px;
  border-radius: 3px;
  color: #EDEDED;
  
  .bold {
    font-size: 2.618em;
    font-weight: 400;
  }
  
  .title {
    font-size: 2.618em;
    font-weight: 400;
  }

  p {
    font-size: 1.618em;
  }
  .inner-hero {
    grid-row: 2/3;
    grid-column: 1/2
  }
}

.title {
  font-size: 2.618rem;
  margin-bottom: 25px;
}

.sub {
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  color: rgb(180,180,180);
  margin-bottom: 10px;
}

.cards {
  display: grid;
  grid-column: 2/3;
  grid-template-columns: 1fr 1fr;
  grid-gap: 45px;
  grid-auto-rows: minmax(100px, auto);
  grid-auto-flow: dense;
  font-size: 16px;
  color: #515151;
  margin-top: 45px;
  @media(max-width: 1280px) {
    grid-template-columns: 1fr;
  }
  img {
    position: absolute;
    left: -130px;
  }
  p {
    font-size: 1.618rem;
    margin-bottom: 50px;
  }
}

.column {
  grid-column: span 1;
  display: grid;
  grid-gap: 45px;
}

.profile {
  // height: 750px;
  grid-row: 1fr;
}

.portability {
  height: 700px;
  img{
    position: absolute;
    top: -350px;
    left: 50%;
    transform: translateX(-50%)
  }
  .initial {
    margin-top: 240px;
  }
}

.locus-box {
  height: 850px;
  img {
    position: absolute;
    left: 50%;
    transform: translateX(-50%)
  }
  .sub {
    margin-top: 350px;
  }
}

.patient-edit {
  height: 1000px;
}

.security { 
  img {
    left: 50%;
    transform: translateX(-50%);
    width: 550px;
  }
  .sub{
    margin-top: 380px;
  }
}

.multiplatform {
  height: 800px;
  img {
  position: absolute;
  width: 100%;
  top: 5%;
  left: 20%;
  }
  .sub {
    margin-top: 380px;
  }
}

.resources {
  grid-column: 2/3;
  text-align: center;
  margin-top: 150px;
  .section-header {
    display: grid;
    justify-items: center;
  }
  p {
    font-size: 1.618em;
    width: 60%;
  }
  .title {
    font-size: 2.618em;
  }
  .sub {
    font-size: 1em;
  }
}

</style>
