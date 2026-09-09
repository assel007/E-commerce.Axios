<template>
  <q-page class="q-pa-md">
    <h1>{{ t('products') }}</h1>

    <div class="row q-col-gutter-md">
      <div v-for="photo in photos" :key="photo.id" class="col-12 col-sm-6 col-md-4 col-lg-3">
        <q-card flat bordered>
          <q-img :src="getPhotoSrc(photo)" :alt="photo.title" ratio="1" />

          <q-card-section>
            <div class="text-subtitle2">{{ photo.title }}</div>
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

const { t } = useI18n();
const photos = ref<Photo[]>([]);

const getPhotoSrc = (photo: Photo) => `https://picsum.photos/id/${photo.id}/300/300`;

onMounted(async () => {
  const response = await getPhotos();
  photos.value = response.data.slice(0, 40);
});
</script>
