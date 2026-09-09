import { defineBoot } from '#q-app'
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
})

export default defineBoot(({ app }) => {
  app.config.globalProperties.$axios = api
})

export { api }
