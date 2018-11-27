<template>
  <div class="card">
    <slot></slot>
  </div>  
</template>
<script>
export default {
  name: 'page-card'
}
</script>
<style lang="scss" scoped>
.card {
  background: #EDEDED;
  text-align: center;
  border-radius: 5px;
  padding: 100px 100px;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
}
</style>
