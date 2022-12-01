<template>
  <footer>
    <div>
      <router-link to="/" @click="scrollToTop()" class="logo">
        <a>Pot Pot Pottery</a>
      </router-link>
    </div>
    <div class="social-links">
      <a class="subtitle">Instagram</a>
      <a class="subtitle">Facebook</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "MyFooter",
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>
footer {
  overflow: hidden;
  background-color: white;
  min-height: 36px;
  margin-top: 120px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 16px;
  font-size: 36px;
  line-height: 36px;
  letter-spacing: -0.03em;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
}

.social-links {
  right: 0;
}

.subtitle {
  padding-left: 10px;
  color: #999999;
}
</style>
