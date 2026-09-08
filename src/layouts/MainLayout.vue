<template>
  <q-layout>
    <NavBar />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
import NavBar from '../components/NavBar.vue';
</script>
