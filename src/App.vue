<template>
  <div id="app" class="mt-5">
    <ShopLayout>
      <template slot="product-list">
        <ProductList></ProductList>
      </template>
      <template slot="cart">
        <Cart></Cart>
      </template>
    </ShopLayout>
  </div>
</template>

<script>
import ProductList from "./components/ProductList.vue";
import ShopLayout from "./components/ShopLayout.vue";
import Cart from "./components/Cart.vue";

export default {
  name: "App",
  components: {
    ProductList,
    ShopLayout,
    Cart,
  },
};
</script>

<style></style>
