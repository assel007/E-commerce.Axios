<template>
  <q-header elevated>
    <q-toolbar class="navbar-toolbar">
      <q-toolbar-title class="navbar-title bg-primary"> dragon store </q-toolbar-title>

      <div class="navbar-actions">
        <q-btn-group flat>
          <q-btn text-color="warning" rounded color="primary" label="product" />
          <q-btn text-color="warning" rounded color="primary" label="cart" />
          <q-btn text-color="warning" rounded color="primary" label="wallet" />
        </q-btn-group>
      </div>
    </q-toolbar>
  </q-header>
</template>

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
