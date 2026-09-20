<template>
  <q-page>
    <h1 class="title">{{ t('wallet') }} :</h1>
    <div class="page-container">
      <p class="parg">fill your wallet</p>
      <div class="box-container">
        <div class="fill-container">
          <form>
            <div class="form">
              <label>inter your bank number </label>
              <input class="input" v-model="bankNumber" />
            </div>
            <div class="form">
              <label>inter the Amount </label>
              <input class="input" type="number" v-model="amount" />
            </div>
          </form>
          <q-btn class="button" label="Top Up Wallet" @click="addToBalance" />
        </div>
        <div class="wallet-balance">
          <p class="balance">your balance</p>
          <p class="balance">{{ walletStore.balance }}</p>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';
import { useWalletStore } from '../stores/wallet-store';

const { t } = useI18n();

const walletStore = useWalletStore();

const bankNumber = ref('');
const amount = ref('');

const addToBalance = () => {
  const value = Number(amount.value);

  if (!bankNumber.value || !Number.isFinite(value) || value <= 0) {
    return;
  }

  walletStore.addMoney(value);
  localStorage.setItem('bankNumber', bankNumber.value);
  localStorage.setItem('amount', amount.value);

  console.log('Bank Number:', bankNumber.value);
  console.log('Amount:', amount.value);
  amount.value = '';
  bankNumber.value = '';
};
</script>
<style lang="css" scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  margin: 30px;
  font-size: 100px;
  font-weight: 500;
}
.parg {
  font-size: 100px;
  margin-bottom: 40px;
  font-weight: 500;
}
.fill-container {
  min-height: 500px;
  width: 80%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.form {
  margin: 20px 40px 20px;
  font-size: 30px;
}
.button {
  width: 200px;
  height: 50px;
  font-size: 20px;
  background-color: #444343;
  border: solid white 2px;
  border-radius: 7px;
  margin: 20px 40px 20px;
}
.input {
  background-color: #444343;
  border: solid white 2px;
  border-radius: 7px;
}
.box-container {
  border: solid white 2px;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(255, 255, 255, 0.5);
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 380px;
}
.wallet-balance {
  border-left: 2px solid #777;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.balance {
  font-size: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
