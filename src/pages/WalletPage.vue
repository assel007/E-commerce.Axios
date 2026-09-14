<template>
  <q-page>
    <h1 class="title">{{ t('wallet') }} :</h1>
    <div class="page-container">
      <p class="parg">Choose a payment method</p>
      <div class="box-container">
        <div class="away-container">
          <form>
            <div class="form">
              <label>inter your bank number </label>
              <input class="input" />
            </div>
            <div class="form">
              <label>inter the Amount </label>
              <input class="input" />
            </div>
          </form>
          <q-btn class="button" label="Top Up Wallet" />
        </div>
        <div class="wallet-balance">
          <p class="balance">your balance</p>
          <p></p>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>
<style lang="css" scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  margin: 30px;
}
.parg {
  font-size: 70px;
  margin-bottom: 40px;
}
.away-container {
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
