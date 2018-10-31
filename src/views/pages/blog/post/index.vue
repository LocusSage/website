<template>
  <div class="container">
    <post/>
    <hr>
    <continue-reading/>
  </div>
</template>
<script>

import postId from './components/post'
import continueReading from './components/continue-reading'

export default {

  components: {
    'post': postId,
    'continue-reading': continueReading
  }
}
</script>

<style scoped lang="scss">

.container {
  width: 960px;
  text-align: left;
}

</style>