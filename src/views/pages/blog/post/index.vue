<template>
 <post :post="post"/>
</template>
<script>

import postId from './components/post'

export default {

  components: {
    'post': postId
  }
}
</script>

<style scoped lang="scss">

</style>