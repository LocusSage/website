<template>
  <nav class="flex align-center">
    <div class="wrapper grid large-col-4">
      <div class="span-3">
        <ul class="menu left flex align-middle">
          <li class="logo">
            <router-link class="flex align-middle" :to="{name: 'Home'}">
            <img src="@/assets/logo/cloud-logo.svg" width="37.5px" alt="">
            <span>MedCloud</span>
          </router-link></li>
          <li>Produtos</li>
          <li><router-link to="{name: 'Blog'}">Blog</router-link></li>
          <li>Receba Atualizações</li>
        </ul>
      </div>
      <div class="span-1 flex align-middle align-right">
        <ul class="menu">
          <li>Login</li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'main-navbar'
}
</script>
<style scoped lang="scss">

  nav {
    position: fixed;
    width: 100%;
    background: white;
  }

  .wrapper {
    min-width: 980px;
    width: 75%;
    background: white;
  }

  .menu.left li {
    margin-right: 75px;
  }

  .logo span{
    font-family: "Circular", sans-serif;
    font-weight: 600;
    font-size: 16px;
    margin-left: 10px;
    color: var(--font-color)
  }
</style>
