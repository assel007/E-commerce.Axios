<template>
  <q-header elevated>
    <q-toolbar class="navbar-toolbar">
      <q-toolbar-title class="navbar-title bg-primary">{{ $t('dragon_store') }}</q-toolbar-title>

      <div class="navbar-actions">
        <q-btn-group flat>
          <q-btn text-color="warning" rounded color="primary" :label="t('home')" to="/" />
          <q-btn
            text-color="warning"
            rounded
            color="primary"
            :label="t('products')"
            to="/Products"
          />
          <q-btn text-color="warning" rounded color="primary" :label="t('cart')" to="/Cart" />
          <q-btn text-color="warning" rounded color="primary" :label="t('wallet')" to="/Wallet" />
          <q-btn text-color="warning" rounded color="primary" :label="t('users')" to="/users" />
          <q-btn
            text-color="warning"
            rounded
            color="primary"
            @click="ChangeLanguage"
            :label="locale === 'en-US' ? 'ENGLISH' : 'عربيه'"
          />
        </q-btn-group>
      </div>
    </q-toolbar>
  </q-header>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { locale, t } = useI18n();
const ChangeLanguage = () => {
  locale.value = locale.value === 'en-US' ? 'ar' : 'en-US';
};
</script>
<style scoped>
.navbar-toolbar {
  min-height: 88px;
  padding: 0 24px;
  color: #f2c037;
}
.navbar-title {
  font-size: 2rem;
  font-weight: 700;
}
.navbar-actions :deep(.q-btn) {
  min-height: 52px;
  padding: 0 18px;
  font-size: 1.1rem;
}
</style>
