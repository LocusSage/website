<template>
<div>
  <carrousel/>
  <div class="flex align-center">
    <div class="wrapper">
      <hr/>
      <subscribe/>
      <hr/>
      <post-resume/>
    </div>
  </div>
</div>  
</template> 
<script>
 
 import carrousel from './components/carrousel'
 import postResume from './components/post-resume'
 import subscribe from './components/subscribe'

export default {
   components: {
     'carrousel': carrousel,
     'post-resume': postResume,
     'subscribe': subscribe
   },
   created: function () {
     this.$store.dispatch('blog:load-data')
   }
}
</script>
<style scoped lang="scss">
 
.wrapper {
  @media (min-width: 340px) and (max-width: 768px){
    width: 90%;
  }
  @media (min-width: 1024px) and (max-width: 1920px) {
    width: 50%;
  }
  background: white;
  margin-right: auto;
  margin-left: auto;
}

hr {
  box-sizing:border-box;
  width:100%;  
}

</style>

