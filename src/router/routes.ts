import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('@/pages/IndexPage.vue') },
      { path: 'Products', component: () => import('@/pages/ProductsPage.vue') },
      { path: 'Cart', component: () => import('@/pages/CartPage.vue') },
      { path: 'Wallet', component: () => import('@/pages/WalletPage.vue') },
    ],
  },
];

export default routes;
