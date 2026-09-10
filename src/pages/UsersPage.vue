<template>
  <q-page class="q-pa-md">
    <h1>{{ t('users') }} :</h1>
    <div class="row q-col-gutter-md">
      <div v-for="user in users" :key="user.id" class="col-12 col-sm-6 col-md-4 col-lg-4">
        <q-card flat bordered class="user-card">
          <q-card-section>
            <div class="text-h6">{{ user.name }}</div>
            <div class="text-subtitle2">{{ user.username }}</div>
          </q-card-section>

          <q-separator />

          <q-card-section>
            <div>Email: {{ user.email }}</div>
            <div>Phone: {{ user.phone }}</div>
            <div>Website: {{ user.website }}</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getUsers } from '../services';
import { useI18n } from 'vue-i18n';
import type { User } from '../types';

const { t } = useI18n();

const users = ref<User[]>([]);

onMounted(async () => {
  const response = await getUsers();
  users.value = response.data.slice(0, 9);
});
</script>
<style scoped>
.user-card {
  background-color: #444343;
  border: solid white 2px;
  border-radius: 8px;
}
</style>
