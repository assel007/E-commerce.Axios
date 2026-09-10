import { defineStore } from 'pinia';

export const useProductsStore = defineStore('Products', {
  state: () => ({
    products: Array.from({ length: 39 }, (_, index) => ({
      name: [
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
      ][index % 10],
      price: 120 + ((index * 37) % 280),
    })),
  }),
});
