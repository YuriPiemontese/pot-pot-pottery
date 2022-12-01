<template>
  <div id="modal" class="popup-bg" data-aos="slide-up">
    <div class="popup">
      <div class="product-features">
        <a class="product-name">{{ productName }}</a>
        <a @click="[$emit('close-clicked'), fadeUp()]" class="close-button"
          >Close</a
        >
        <a class="product-price">{{ productPrice }}</a>
      </div>

      <div class="image-wrapper">
        <img :src="productImg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleOverlay",
  props: {
    productName: String,
    productPrice: String,
    productImg: String,
  },
  data() {
    return {
      products: [],
    };
  },
};
</script>

<style scoped>
body {
  overflow: hidden;
  overflow-y: hidden;
}

template {
  position: fixed;
  overflow-y: scroll;
  overflow: hidden;
}

@font-face {
  font-family: "NeueHaasGrotesk";
  src: url("../assets/fonts/NHaasGroteskDSPro-65Md.woff") format("woff");
  font-weight: 500;
}

a {
  display: block;
  margin: 0;
  font-style: NeueHaasGrotesk;
  font-family: NeueHaasGrotesk;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 36px;
  line-height: 36px;
  letter-spacing: -0.03em;
  font-weight: 500;
}

.popup-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-content: center;
  z-index: 10;
  overflow: hidden;
  font-style: Helvetica;
  font-family: "NeueHaasGrotesk";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: white;
}

.popup {
  width: 100%;
  height: 100vh;
  position: relative;
  display: block;
}

.image-wrapper {
  display: block;
  position: absolute;
  overflow: hidden;
  top: 20px;
  bottom: 20px;
  width: 42.5vw;
  height: auto;
  margin-left: 28.75vw;
  margin-right: 28.75vw;
}

@media screen and (max-width: 1024px) {
  .image-wrapper {
    top: 92px;
    bottom: 92px;
    width: auto;
    left: 0;
    right: 0;
    display: block;
    margin-left: 20px;
    margin-right: 20px;
  }
}

img {
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #c4c4c4;
  object-fit: cover;
  object-position: center;
  height: 100%;
}

.product-features {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.product-name {
  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: 14px;
  margin-left: 18px;
}

.close-button {
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 16px;
  margin-right: 20px;
}

.product-price {
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: 14px;
  margin-right: 20px;
}
</style>
