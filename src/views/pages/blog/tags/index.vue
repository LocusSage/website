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
  min-width: 960px;
  background: white;
}

</style>