<template>
  <MyLanding v-show="homePage" />
  <header>
    <router-link to="/" @click="scrollToTop()" class="logo">
      Pot Pot Pottery <br />
      <span class="subtitle">Potteries by Leonardo Romano</span>
    </router-link>
  </header>
</template>

<script>
import MyLanding from "./MyLanding.vue";

export default {
  name: "MyHeader",
  components: {
    MyLanding,
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  computed: {
    homePage() {
      if (this.$route.path === "/") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
header {
  background-color: #fff;
  min-height: 72px;
  margin-top: 16px;
  margin-bottom: 120px;
  text-align: center;
  align-content: center;
  font-size: 36px;
  line-height: 36px;
  letter-spacing: -0.03em;
  font-weight: 500;
}

.subtitle {
  color: #999999;
}
</style>
