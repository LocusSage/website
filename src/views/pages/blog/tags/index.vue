<template>
  <div class="flex align-center">
    <tags class="wrapper"/> 
  </div> 
</template>
<script>

import Tags from './components/tags'

export default {
  components: {
    'tags': Tags
  },
  created: function (tagId) {
    this.$store.dispatch('blog:tags:load-data', this.tagId = this.$route.params.tag)
  }
}
</script>

<style scoped lang="scss">
.wrapper {
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