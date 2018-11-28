<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
 -moz-osx-font-smoothing: grayscale;
-webkit-font-smoothing: antialiased;
}

.grid-container {
  display: grid;
  grid-template-columns: 12.5% auto 12.5%;
  @media(max-width: 720px) {
    grid-template-columns: 20px calc(100vw - 40px) 20px !important;
  }
}

:root {
  --font-size: calc(16px * 2.618);
}

.header-title {
  font-size: var(--font-size);
  @media (max-width: 1280px) {
    font-size: calc(var(--font-size) + 6 * ((100vw - 720px) / 340));
  }
  color: #2d2d2d;
  font-weight: 600;
  font-family: "Graphik", "sans-serif";
}

.title-tracked {
  font-size: calc(var(--font-size) / 2);
  
  color: #cecece;
  font-family: "Graphik", sans-serif;
  font-weight: 400;
  letter-spacing: calc(var(--font-size) * 150 / 1000)
}

a.text,
a.router-link {
  color: #29aae1;
  text-decoration: none;
}

.text {
  font-size: calc(var(--font-size) / 2);
  color: #2d2d2d;
  font-family: "Graphik", sans-serif;
  font-weight: 400;
}

.text-center {
  text-align: center;
}

html {
  font-size: 16px;
  overflow-x: hidden !important;
}

.hide-responsive {
  @media screen and (max-width: 800px) {
    display: none !important;
  }
}

// ESTA PORÇÃO PERTENCE AO BLOG POST DA BASE DE CONHECIMENTO
</style>
