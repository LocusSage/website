<template>
  <tags class="container"/>  
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
.container {
  width: 960px;
}

</style>