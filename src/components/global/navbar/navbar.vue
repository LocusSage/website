<template>
  <nav class="grid-container">
    <div class="inner flex align-justify visible-tablet-desktop">
      <div class="left-menu">
        <ul>
         <router-link :to="{ name: 'Support' }"><li>MPS Cloud</li></router-link>
         <a><li>Produtos</li></a>
         <router-link :to="{ name: 'Blog' }"><li>Blog</li></router-link>
        </ul>
      </div>
      <div class="right-menu">
        <ul>
          <router-link :to="{ name: 'Support' }"><li>Suporte</li></router-link>
          <a href=""><li>Login</li></a>
        </ul>
      </div>
    </div>

    <div class="inner visible-cellphone">
      <div class="bar"><icon name="bars" scale="1.5"/></div>
      <ul class="inner-ul-cellphone">
        <router-link :to="{name: 'Home'}"><li>MPS</li></router-link>
        <router-link :to="{name: 'Support'}"><li>Suporte</li></router-link>
        <router-link to=""><li>Produtos</li></router-link>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'main-navbar',
  data: function () {
    return {
      subMenuOpen: false
    }
  }
}
</script>
<style scoped lang="scss">
nav {
  position: fixed;
  width: 100vw;
  background: rgb(50,50,50);
  z-index: 99;
  height: 60px;
}

.inner {
  grid-column: 2/3;
  display: flex;
  align-items: center;
  @media(max-width: 720px) {
    grid-column: span 3;
    padding: 0px 20px;
  }
}

.bar {
  color: rgb(245,245,245)
}

ul {
  list-style: none;
  display: flex;
  a {
    color: rgb(245, 245, 245);
    text-decoration: none;
    li {
      margin-right: 20px;
    }
    &:last-child li{
      margin-right: 0px;
    }
  }

}

.visible-tablet-desktop {
  @media(max-width: 720px) {
    display: none;
  }
}

.inner-ul-cellphone {
  margin-left: 20px;
}

.visible-cellphone {
  @media (min-width: 720px) {
    display: none
  }
}

</style>
<!--
<div class="inner-nav">
      <div class="wrapper grid">
        <div>
          <ul class="menu left flex align-middle">
            <li class="logo">
              <router-link class="flex align-middle" :to="{name: 'Home'}">
                <span>MPS Cloud</span>
              </router-link>
            </li>
            <li @mouseover="subMenuOpen = true" @mouseout="subMenuOpen = false" class="with-submenu"><a href="#">Produtos</a>
              <transition name="fadeInDown" mode="out-in">
                <ol v-if="subMenuOpen" class="submenu">
                  <li><router-link :to="{name: 'quasar'}">Quasar</router-link></li>
                  <li><router-link to="">Talker</router-link></li>
                </ol>
              </transition>
            </li>
            <li><router-link :to="{name: 'Blog'}">Blog</router-link></li>
            <li>Receba Novidades</li>
          </ul>
        </div>
        <div class="span-1 flex align-middle align-right">
          <ul class="menu">
            <router-link :to="{name: 'Support'}"><li>Suporte</li></router-link>
            <router-link to=""><li>Login</li></router-link>
          </ul>
        </div>
      </div>
    </div>
    -->