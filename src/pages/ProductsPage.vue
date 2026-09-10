<template>
  <q-page class="q-p-md">
    <h1 class="title">{{ t('products') }} :</h1>
    <div class="product-con">
      <div v-for="product in products" :key="product.id" class="product-item">
        <q-card flat bordered>
          <q-img :src="product.image" :alt="product.title" ratio="1" />

          <q-card-section class="product-info">
            <div class="product-name">{{ product.name }}</div>
            <div class="product-price">{{ product.price }} $</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { getPhotos } from '../services';
import type { Photo } from '../types';

interface ProductWithPhoto extends Photo {
  name: string;
  price: number;
  image: string;
}

const { t } = useI18n();
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
}

.product-name {
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 4px;
  text-transform: capitalize;
  color: #f2c037;
}

.product-price {
  color: #f2c037;
  font-weight: 600;
  font-size: 30px;
}
</style>
