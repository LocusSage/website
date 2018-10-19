<template>
<div>
  <carrousel/>
  <div class="flex align-center">
    <div class="wrapper">
      <hr/>
      <subscribe/>
      <hr/>
      <post-resume/>
      <hr/>
      <carrousel-post/>
    </div>
  </div>
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
 
.wrapper {
  min-width: 980px;
  width: 75%;
  background: white;
}

hr {
  box-sizing:border-box;
  width:100%;  
}

</style>

