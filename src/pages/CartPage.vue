<template>
  <q-page class="q-pa-md">
    <h1 class="title">{{ t('cart') }} :</h1>

    <div v-if="cartStore.cartItems.length === 0" class="empty-cart">{{ t('cart') }} is empty</div>

    <div v-else class="cart-list">
      <div v-for="item in cartStore.cartItems" :key="item.name" class="cart-item">
        <q-item-section avatar class="images">
          <q-img :src="item.image" style="width: 100px" />
        </q-item-section>
        <div class="item-name">{{ item.name }}</div>
        <div class="item-price">{{ item.price }} $</div>
        <div class="item-quantity">Quantity: {{ item.quantity }}</div>
      </div>

      <div class="total-price">Total: {{ cartStore.totalPrice }} $</div>
      <div class="button-contaner">
        <q-btn class="button" :label="t('empty_cart')" @click="cartStore.clearCart()" />
        <q-btn class="button" :label="t('pay_product')" @click="payCart" />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useCartStore } from '../stores/Cart-store';
import { useWalletStore } from '@/stores/wallet-store';

const { t } = useI18n();
const cartStore = useCartStore();
const walletStore = useWalletStore();

const payCart = () => {
  const total = cartStore.totalPrice;

  if (total <= 0) {
    return;
  }

  const paid = walletStore.pay(total);

  if (paid) {
    cartStore.clearCart();
  }
};
</script>

<style scoped>
.title {
  margin-left: 30px;
}

.empty-cart {
  margin-left: 30px;
  font-size: 1.2rem;
  color: #666;
}

.cart-list {
  margin: 20px 30px;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 10px;
}

.item-name {
  font-weight: 700;
}

.item-price,
.item-quantity {
  color: #555;
}

.total-price {
  margin-top: 20px;
  font-size: 1.3rem;
  font-weight: 700;
}

.cart-list {
  width: 70%;
  min-height: 400px;
}

.button {
  background-color: #444343;
  width: 200px;
  height: 70px;
  border: solid white 1px;
  border-radius: 8px;
  margin-top: 20px;
}
.button-contaner {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
