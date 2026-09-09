<template>
  <q-page>
    <h1 class="title">{{ t('cart') }} :</h1>
  </q-page>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>
<style scoped>
.title {
  margin-left: 30px;
}
</style>
