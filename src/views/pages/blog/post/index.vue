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

import postId from './components/post'
import continueReading from './components/continue-reading'

export default {

  components: {
    'post': postId,
    'continue-reading': continueReading
  },
  mounted: function (postId) {
    this.$store.dispatch('blog:post:load-data', this.postId = this.$route.params.id)
  },
  created: function () {
    this.$store.dispatch('blog:post:continue-reading')
  }
}
</script>

<style scoped lang="scss">

.wrapper {
  min-width: 980px;
  width: 960px;
  background: white;
}

</style>