<template>
<div class="grid full-width grid-template">
  <carrousel-post/>
  <carrousel/>
  <post-resume/>
  <subscribe/>
</div>
</template>
<script>
 
import carrouselPost from './components/carrousel-post'
import carrousel from './components/carrousel'
import postResume from './components/post-resume'
import subscribe from './components/subscribe'

export default {
   components: {
     'carrousel-post': carrouselPost,
     'carrousel': carrousel,
     'post-resume': postResume,
     'subscribe': subscribe
   }
}
</script>
<style scoped lang="scss">

</style>

