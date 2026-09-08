<template>
  <q-page>
    <div>
      <q-btn class="butten" :label="t('show_products')" to="/Products" />
    </div>
  </q-page>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>
<style scoped>
.butten {
  margin: 50px;
  width: 250px;
  height: 70px;
  background-color: #444343;
  border: solid rgb(231, 222, 222) 1px;
  border-radius: 9px;
  font-size: 22px;
}
</style>
