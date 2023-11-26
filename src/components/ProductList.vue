<template>
  <div v-if="products.length">
    <paginate name="products" :list="products" :per="perPage">
      <b-card-group columns>
        <ProductItem
          v-for="product in paginated('products')"
          :product="product"
          :key="product.id"
          @addToCart="addProductToCart"
        >
        </ProductItem>
      </b-card-group>
    </paginate>
    <paginate-links
      for="products"
      :classes="{
        ul: 'pagination',
        li: 'page-item',
        'li > a': 'page-link',
      }"
    ></paginate-links>
  </div>
  <b-alert v-else show variant="info">No hay productos que mostrar</b-alert>
</template>

<script>
import products from "@/modules/products";
import { mapActions, mapMutations, mapState } from "vuex";

import ProductItem from "./ProductItem.vue";

export default {
  data() {
    return {
      paginate: ["products"],
      perPage: 3,
    };
  },
  components: {
    ProductItem,
  },

  mounted() {
    this.fetchProducts();
  },

  computed: {
    ...mapState("products", ["products"]),
  },

  methods: {
    ...mapActions("products", ["fetchProducts"]),
    ...mapMutations("cart", ["addProduct"]),
    addProductToCart(product) {
      this.addProduct(product);
    },
  },
};
</script>

<style scoped></style>
