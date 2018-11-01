<template>
<div>
<ul>
  <li v-for="tag in tags" :key="tag.id">
    <div>
      {{tag._embedded['wp:term'][1]}}
    </div>  
  </li>
</ul>
</div>  
</template>
<script>

export default {
  computed: {
    tags: function () { return this.$store.getters['blog:tags'] }
  }
}
</script>

<style scoped lang="scss">


</style>