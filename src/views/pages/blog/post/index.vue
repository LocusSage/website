<template>
  <div class="flex align-center">
    <div class="wrapper">
      <post/>
      <hr>
      <continue-reading/>
    </div>
  </div>
</template>
<script>

import post from './components/post'
import continueReading from './components/continue-reading'

export default {

  components: {
    'post': post,
    'continue-reading': continueReading
  },
  created: function (postId) {
    this.$store.dispatch('blog:post:load-data', this.postId = this.$route.params.id)
  }
}
</script>

<style scoped lang="scss">

.wrapper{
  @media (min-width: 340px) {
    width: 90%;
  }
  @media (max-width: 1920px ) and (min-width: 1366px) {
    width: 50%;
  }
  background: white;
  margin-right: auto;
  margin-left: auto;
}

</style>