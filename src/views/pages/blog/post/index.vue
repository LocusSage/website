<template>
  <div class="flex align-center">
    <div class="wrapper-blog">
      <post/>
      <hr>
      <continue-reading/>
    </div>
  </div>
</template>
<script>

import post from './components/post'
import continueReading from './components/continue-reading'
import store from '@/store'

export default {
  components: {
    'post': post,
    'continue-reading': continueReading
  },
  beforeRouteEnter: async (to, from, next) => {
    await store.dispatch('blog:post:load-data', to.params.id)
      .then(reponse => next())
      .catch(err => console.log(err))
  }
}
</script>

<style lang="scss">

.wrapper-blog{
  @media (max-width: 768px){
    width: 90%;
  }
  width: 740px;
  background: white;
  margin-right: auto;
  margin-left: auto;
}


.post {
  p {
    color: rgb(50,50,50);
    line-height: 1.6;
    img {
      width: 100%;
      height: auto !important;
      margin: 50px 0px;
    }
    strong {
      display: block;
      margin-top: 30px;
      font-size: 1.618em;
      color: rgb(200,200,200)
    }
  }
}
</style>