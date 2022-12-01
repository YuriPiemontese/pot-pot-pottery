<template>
  <CompleteGallery
    @open-overlay="openOverlay()"
    @close-overlay="closeOverlay()"
  />
</template>

<script>
import CompleteGallery from "../components/CompleteGallery.vue";

export default {
  name: "MyArchive",
  components: {
    CompleteGallery,
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
  },
};
</script>
