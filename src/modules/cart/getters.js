import products from "../products";

export function totalCost(state) {
  return state.cart.reduce((sum, products) => {
    return parseFloat(products.price) * products.qty + sum;
  }, 0);
}
