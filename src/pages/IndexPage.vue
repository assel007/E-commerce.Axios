<template>
  <q-page class="page-container">
    <div class="hello">
      <p>{{ t('welcome') }}</p>
    </div>
    <div class="parg">
      <p>{{ t('find') }}</p>
    </div>
    <div class="btn-con">
      <q-btn class="butten" :label="t('show_products')" to="/Products" />
    </div>
  </q-page>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>
<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20;
  min-height: 100vh;
}
.hello {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 70px;
  margin-top: 50px;
}
.butten {
  margin: 50px;
  width: 250px;
  height: 70px;
  background-color: #444343;
  border: solid rgb(231, 222, 222) 1px;
  border-radius: 9px;
  font-size: 22px;
}
.btn-con {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.parg {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
  margin-top: 50px;
}
</style>
