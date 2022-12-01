<template>
  <div class="grid columns-1 gap-x-5 space-y-5 lg:space-y-0 gallery-wrapper">
    <div class="row lg:columns-3 columns-1 space-y-5">
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
    <div class="row lg:columns-3 columns-1 space-y-5">
      <MyProduct
        @open-overlay="$emit('open-overlay')"
        @close-overlay="$emit('close-overlay')"
        productName="WackoCups"
        productPrice="€ 240,00"
        productImg="https://firebasestorage.googleapis.com/v0/b/pot-pot-pottery.appspot.com/o/9-wackocups.png?alt=media&token=4a8a6beb-3d25-4466-aac1-31d974e211f3"
      />
      <MyProduct
        @open-overlay="$emit('open-overlay')"
        @close-overlay="$emit('close-overlay')"
        productName="Signor Baba Puntolo"
        productPrice="€ 70,00"
        productImg="https://firebasestorage.googleapis.com/v0/b/pot-pot-pottery.appspot.com/o/8-signor-baba-puntolo.png?alt=media&token=70e0737d-ed03-4912-b0a1-0e1861ab8bd7"
      />
      <MyProduct
        @open-overlay="$emit('open-overlay')"
        @close-overlay="$emit('close-overlay')"
        productName="Cipicciolo"
        productPrice="€ 40,00"
        productImg="https://firebasestorage.googleapis.com/v0/b/pot-pot-pottery.appspot.com/o/7-cippicciolo.png?alt=media&token=638d3c6e-c080-41dd-913b-943366cff557"
      />
    </div>
    <div class="row lg:columns-3 columns-1 space-y-5">
      <MyProduct
        @open-overlay="$emit('open-overlay')"
        @close-overlay="$emit('close-overlay')"
        productName="Just a wizard bag"
        productPrice="€ 70,00"
        productImg="https://firebasestorage.googleapis.com/v0/b/pot-pot-pottery.appspot.com/o/6-just-a-wizard-bag.png?alt=media&token=afe2f637-0231-4079-9916-6906a3a5a846"
      />
      <MyProduct
        @open-overlay="$emit('open-overlay')"
        @close-overlay="$emit('close-overlay')"
        productName="Fricchiolo"
        productPrice="€ 40,00"
        productImg="https://firebasestorage.googleapis.com/v0/b/pot-pot-pottery.appspot.com/o/5-fricchiolo.png?alt=media&token=d10b3e72-76b3-4b39-8473-8b115219c620"
      />
      <MyProduct
        @open-overlay="$emit('open-overlay')"
        @close-overlay="$emit('close-overlay')"
        productName="Mr. Cappellino"
        productPrice="€ 70,00"
        productImg="https://firebasestorage.googleapis.com/v0/b/pot-pot-pottery.appspot.com/o/4-mr-cappellino.png?alt=media&token=a8635d4a-0a2e-441c-93e2-2a894ef97558"
      />
    </div>
    <div class="row lg:columns-3 columns-1 space-y-5">
      <MyProduct
        @open-overlay="$emit('open-overlay')"
        @close-overlay="$emit('close-overlay')"
        productName="Bombolot"
        productPrice="€ 40,00"
        productImg="https://firebasestorage.googleapis.com/v0/b/pot-pot-pottery.appspot.com/o/3-bombolot.png?alt=media&token=dfdaf8e4-4d4e-4291-9fe2-55063e8519ce"
      />
      <MyProduct
        @open-overlay="$emit('open-overlay')"
        @close-overlay="$emit('close-overlay')"
        productName="Vlad"
        productPrice="€ 40,00"
        productImg="https://firebasestorage.googleapis.com/v0/b/pot-pot-pottery.appspot.com/o/2-vlad.png?alt=media&token=13ea13af-b7bb-4ee5-9a93-a09dc6c39d8c"
      />
      <MyProduct
        @open-overlay="$emit('open-overlay')"
        @close-overlay="$emit('close-overlay')"
        productName="Ring O"
        productPrice="€ 70,00"
        productImg="https://firebasestorage.googleapis.com/v0/b/pot-pot-pottery.appspot.com/o/1-ring-o.png?alt=media&token=1fa1cdd3-c767-4a58-9b5f-f66dfa7d006b"
      />
    </div>
  </div>
</template>

<script>
import MyProduct from "./MyProduct.vue";

export default {
  name: "CompleteGallery",
  components: {
    MyProduct,
  },
};
</script>

<style scoped>
.gallery-wrapper {
  padding-left: 20px;
  padding-right: 20px;
  display: block;
}

a {
  font-size: 36px;
  line-height: 36px;
  letter-spacing: -0.03em;
  font-weight: 500;
}
</style>
