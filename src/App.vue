<template>
  <MyHeader />
  <router-view></router-view>
  <MyFooter />
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyFooter from "./components/MyFooter.vue";

export default {
  name: "App",
  components: {
    MyHeader,
    MyFooter,
  },
};
</script>

<style>
@font-face {
  font-family: "NeueHaasGrotesk";
  src: url("./assets/fonts/NHaasGroteskDSPro-65Md.woff") format("woff");
  font-weight: 500;
}

body {
  position: static;
  display: block;
  margin: 0;
  font-style: Helvetica;
}

#app {
  overflow: hidden;
  font-family: "NeueHaasGrotesk";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.logo {
  color: #000;
  text-decoration: none;
}
</style>
