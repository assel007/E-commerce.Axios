<template>
  <q-page class="q-p-md">
    <h1 class="title">{{ t('products') }} :</h1>
    <div class="product-con">
      <div v-for="product in products" :key="product.id" class="product-item">
        <q-card flat bordered>
          <q-img :src="product.image" :alt="product.title" ratio="1" />

          <q-card-section class="product-info">
            <div>
              <div class="product-name">{{ product.name }}</div>
              <div class="product-price">{{ product.price }} $</div>
            </div>
            <q-btn class="button" :label="t('add_to_cart')" @click="addToCart(product)" />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { getPhotos } from '../services/photos.services';
import type { Photo } from '../types';
import { useCartStore } from '../stores/Cart-store';

interface ProductWithPhoto extends Photo {
  name: string;
  price: number;
  image: string;
}

const { t } = useI18n();
const cartStore = useCartStore();
const products = ref<ProductWithPhoto[]>([]);
const getPhotoSrc = (photo: Photo) => `https://picsum.photos/id/${photo.id}/300/300`;

const productNames = [
  'nike',
  'adidas',
  'puma',
  'reebok',
  'new balance',
  'under armour',
  'converse',
  'vans',
  'skechers',
  'fila',
];

onMounted(async () => {
  const response = await getPhotos();
  const randomNames = [...productNames].sort(() => Math.random() - 0.5);

  products.value = response.data.slice(0, 39).map((photo, index) => {
    const productName: string =
      randomNames[index % randomNames.length] ?? productNames[0] ?? 'nike';

    return {
      ...photo,
      name: productName,
      price: 120 + ((index * 37 + Math.floor(Math.random() * 100)) % 280),
      image: getPhotoSrc(photo),
    };
  });
});

const addToCart = (product: ProductWithPhoto) => {
  cartStore.addToCart({
    name: product.name,
    price: product.price,
    image: product.image,
  });
};
</script>
<style scoped>
.title {
  margin-left: 30px;
}
.product-con {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 100px;
  margin: 0 50px;
}
.product-item {
  width: 100%;
}

.product-info {
  background: var(--q-primary);
  padding: 12px 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.product-name {
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 4px;
  text-transform: capitalize;
  color: #f2c037;
  margin-left: 10px;
}

.product-price {
  color: #f2c037;
  font-weight: 600;
  font-size: 30px;
  margin-left: 10px;
}
.button {
  background-color: rgb(27, 27, 25);
  height: 80px;
  width: 200px;
  margin-top: 14px;
  border: solid white 1px;
  border-radius: 10px;
  font-size: 20px;
}
</style>
