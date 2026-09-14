import type { Product } from './product-store';
import { defineStore } from 'pinia';

type CartItem = Product & {
  quantity: number;
};

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [] as CartItem[],
  }),
  getters: {
    cartCount: (state) => state.cartItems.length,
    totalPrice: (state) =>
      state.cartItems.reduce<number>((total, item) => total + item.price * item.quantity, 0),
  },
  actions: {
    addToCart(product: Product) {
      this.cartItems.push({ ...product, quantity: 1 });
    },
    clearCart() {
      this.cartItems = [];
    },
  },
});
