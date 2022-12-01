<template>
  <div class="cover-wrapper">
    <video
      muted="muted"
      loop="loop"
      playsinline
      autoplay
      src="../assets/video/carousel.mp4"
    ></video>
  </div>
</template>

<script>
export default {
  name: "MyLanding",
};
</script>

<style scoped>
.cover-wrapper {
  overflow: hidden;
  background-color: hsl(0, 0%, 85%);
  height: 654px;
  top: 0%;
  left: 0%;
  position: relative;
  display: block;
  padding: 0;
  border: 0;
  margin: 0;
}

video {
  position: relative;
  height: 100% !important;
  width: auto;
  top: 0;
  object-fit: cover;
  object-position: center;
  overflow: hidden;
}
</style>
