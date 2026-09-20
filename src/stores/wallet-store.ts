import { defineStore } from 'pinia';

export const useWalletStore = defineStore('wallet', {
  state: () => ({
    balance: Number(localStorage.getItem('walletBalance')) || 0,
  }),

  actions: {
    addMoney(amount: number) {
      this.balance += amount;
      localStorage.setItem('walletBalance', this.balance.toString());
    },

    pay(amount: number) {
      if (amount > this.balance) {
        return false;
      }

      this.balance -= amount;

      localStorage.setItem('walletBalance', this.balance.toString());

      return true;
    },
  },
});
