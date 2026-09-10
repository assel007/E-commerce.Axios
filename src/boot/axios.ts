import { defineBoot } from '#q-app'; //importing function from quasar
//  (it is only use it boot folder)
import axios from 'axios'; //importing axios to send HTTP reqists

const api = axios.create({
  //creat axios instant and name it api
  baseURL: 'https://jsonplaceholder.typicode.com/', //base url
});

export default defineBoot(({ app }) => {
  app.config.globalProperties.$axios = api;
});

export { api }; //make instans api is export
