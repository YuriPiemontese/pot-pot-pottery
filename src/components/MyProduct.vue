<template>
  <Teleport to="#portal-target">
    <SingleOverlay
      v-if="showSingleOverlay"
      @close-clicked="closeOverlay()"
      :productName="productName"
      :productPrice="productPrice"
      :productImg="productImg"
    />
  </Teleport>

  <div @click="openOverlay()" class="product-wrapper">
    <div class="img-wrapper">
      <img :src="productImg" class="heroImg" />
    </div>
    <div class="product-info">
      <a class="product-name">{{ productName }}</a>
      <br />
      <a class="product-price">{{ productPrice }}</a>
    </div>
  </div>
</template>

<script>
import SingleOverlay from "./SingleOverlay.vue";

export default {
  name: "MyProduct",
  props: {
    productName: String,
    productPrice: String,
    productImg: String,
  },
  components: {
    SingleOverlay,
  },
  data() {
    return {
      showSingleOverlay: false,
    };
  },
  methods: {
    openOverlay() {
      this.showSingleOverlay = !this.showSingleOverlay;
      this.$emit("open-overlay");
    },
    closeOverlay() {
      this.showSingleOverlay = !this.showSingleOverlay;
      this.$emit("close-overlay");
    },
  },
};
</script>

<style scoped>
a {
  font-size: 36px;
  line-height: 36px;
  letter-spacing: -0.03em;
  font-weight: 500;
}

.product-wrapper {
  position: relative;
  overflow: hidden;
  background-color: #d9d9d9;
  height: 634px;
  width: 100%;
  top: 0%;
  left: 0%;
  padding: 0;
  border: 0;
  margin: 0;
}
.img-wrapper {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 0;
  border: 0;
  margin: 0;
}

img {
  object-fit: cover;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  object-position: center;
  vertical-align: middle;
  min-width: 100%;
  min-height: 100%;
}

.product-info {
  background-color: none;
  position: absolute;
  bottom: 0;
  margin-bottom: 15px;
  margin-left: 18px;
}
</style>
