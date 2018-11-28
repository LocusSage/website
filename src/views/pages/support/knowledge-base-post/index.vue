<template>
  <section class="grid-container">
    <!-- <meta name="description" v-if="post" :content="post.content.rendered"> -->
    <div class="wrapper">
      <div class="breadcrumb">
        <p class="title-tracked">BASE DE CONHECIMENTO</p>
      </div>

      <div class="post-body" v-if="post">
        <div class="post-header">
          <div class="usefullness">
            <p>67 pessoas acharam este post útil</p>
          </div>
          <h2 class="header-title">{{post.title.rendered}}</h2>
          <p class="updated-at">Atualizado em {{post.modified | normalizeDate}}</p>
        </div>
        <div class="text post-text" v-html="post.content.rendered">
          <!-- AQUI VEM O TEXTO DO POST INTEIRO -->
        </div>
      </div>
      <div v-else class="loading-post">
        <p>Carregando seu post</p>
      </div>

    </div>
    <div class="usefullness-opinion grid-container">
      <div class="opinion-wrapper">
        <p class="text">Este artigo foi útil?</p>
        <div class="flex choice">
          <p>Sim</p>
          <p>Não</p>
        </div>
      </div>
    </div>
    <!-- PARA PROBLEMAS NÃO RESOLVIDOS -->
    <not-solved class="grid-container full"/>

    <!-- FORMALÁRIO DE CONTATO COM MPS -->
    <div class="contact grid-container full">
      <div class="opinion-wrapper">
        <div class="title">
          <h4 class="header-title">Entrar em contato com a MPS Cloud</h4>
          <p class="text">Se mesmo após ler nossa base de conhecimento, você continua sem conseguir resolver o problema, você pode falar conosco usando nossos canais de atendimento</p>
        </div>
        <form @submit.prevent>
          <label for="input">Assunto</label>
          <div class="flex">
            <input type="text" id="input">
            <button>Solicitar suporte</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
import moment from 'moment'
import NotSolved from './components/not-solved'
import db from 'nedb-shelter'

moment.locale('PT-BR')

export default {
  components: {
    'not-solved': NotSolved
  },
  mounted: async function () {
    window.scrollTo(0,0)
    await this.$store.dispatch('support:fetch-single-post', { id: this.$route.params.id, name: this.$route.params.title })
    this.$store.dispatch('support:fetch-recommended-posts')
    this.$store.dispatch('support:save-recent-posts')
  },
  computed: {
    post: function () { return this.$store.getters['support:single-post'] }
  },
  filters: {
    normalizeDate: function (date) {
      return moment(date).format('DD MMMM [de] YYYY')
    }
  },
  destroyed: function () {
    this.$store.dispatch("support:clear-single-post")
  }
}
</script>
<style scoped lang="scss">
.loading-post {
  padding: 100px 0px;
  @media (max-width: 800px) {
    padding: 50px 0px;
  }
}
.breadcrumb {
  margin-top: 30px;
}
.opinion-wrapper {
  grid-column: 2/3;
  padding: 50px 0px;
}

.usefullness-opinion {
  grid-column: span 3;
  border-top: 2px solid rgb(220,220,220);
}

.full {
  grid-column: span 3
}

.choice {
  margin-top: 20px;
   p {
     margin-right: 30px;
   }
}

.grid-container {
  grid-template-columns: auto 960px auto;
}

.wrapper {
  grid-column: 2/3;
}

h2, h4 {
  margin: 0;
  margin: 10px 0px 20px;
}

.post-header {
  padding: 50px 0px;
  border-bottom: 2px solid rgb(220,220,220);
  h2 {
    width: 80%;
  }
}

.usefullness,
.updated-at {
  color: rgb(147,147,147)
}

.post-text /deep/ {
  padding: 50px 0px;
  p {
    line-height: 1.6
  }
  figure, img {
    width: 100% !important;
    margin: 0px;
    height: auto;
    margin: 30px 0px;
    figcaption {
      color: rgb(200,200,200);
      font-size: calc(var(--font-size) / 3.5);
    }
  }
}

img {
  opacity: .4;
}

form {
  margin-top: 50px;
  button {
    height: 40px;
    width: 350px;
    margin-left: 20px;
    border: 1px solid rgb(200,200,200);
    border-radius: 3px;
    color: rgb(200,200,200);
    @media(max-width: 720px) {
      margin-left: 0px;
      width: 100%;
    }
  }

  .flex {
    @media(max-width: 720px) {
      flex-direction: column;
    }
  }
}
</style>
