<template>
  <MyGallery @open-overlay="openOverlay()" @close-overlay="closeOverlay()" />

  <div class="discover-wrapper">
    <router-link to="/archive" @click="scrollToTop()" class="discover"
      >Discover all</router-link
    >
  </div>
</template>

<script>
import MyGallery from "../components/MyGallery.vue";

export default {
  name: "MyHome",
  components: {
    MyGallery,
  },
  methods: {
    openOverlay() {
      const body = document.querySelector("body");
      body.style.overflow = "hidden";
    },
    closeOverlay() {
      const body = document.querySelector("body");
      body.style.overflow = "auto";
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>
.discover-wrapper {
  text-align: center;
  align-content: center;
  margin-top: 16px;
  margin-bottom: 100px;
}

.discover {
  font-size: 36px;
  line-height: 36px;
  letter-spacing: -0.03em;
  font-weight: 500;
  color: #000;
  text-decoration: none;
}
</style>
