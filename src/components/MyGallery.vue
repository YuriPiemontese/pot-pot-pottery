<template>
  <div class="grid lg:columns-3 columns-1 gap-5 space-y-5 gallery-wrapper">
    <MyProduct
      @open-overlay="$emit('open-overlay')"
      @close-overlay="$emit('close-overlay')"
      productName="Lemme Lemme"
      productPrice="€ 40,00"
      productImg="https://firebasestorage.googleapis.com/v0/b/pot-pot-pottery.appspot.com/o/12-lemme-lemme.png?alt=media&token=b1e6c6b0-3cd7-46b6-8e33-5572bbee3239"
    />
    <MyProduct
      @open-overlay="$emit('open-overlay')"
      @close-overlay="$emit('close-overlay')"
      productName="Carved Pot"
      productPrice="€ 70,00"
      productImg="https://firebasestorage.googleapis.com/v0/b/pot-pot-pottery.appspot.com/o/11-carved-pot.png?alt=media&token=aac71805-f83c-4b70-8812-c1d31bd4a615"
    />
    <MyProduct
      @open-overlay="$emit('open-overlay')"
      @close-overlay="$emit('close-overlay')"
      productName="Verdefono"
      productPrice="€ 120,00"
      productImg="https://firebasestorage.googleapis.com/v0/b/pot-pot-pottery.appspot.com/o/10-verdefono.png?alt=media&token=b02c11ea-e92b-4881-8ac5-0145b84c1b42"
    />
  </div>
</template>

<script>
import MyProduct from "./MyProduct.vue";

export default {
  name: "MyGallery",
  components: {
    MyProduct,
  },
};
</script>

<style scoped>
.gallery-wrapper {
  margin-left: 20px;
  margin-right: 20px;
  display: block;
}

a {
  font-size: 36px;
  line-height: 36px;
  letter-spacing: -0.03em;
  font-weight: 500;
}
</style>
