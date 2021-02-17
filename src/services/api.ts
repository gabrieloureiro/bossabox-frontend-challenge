import axios from 'axios'

const api = axios.create({
  baseURL: !process.env.NODE_ENV
    ? 'http://localhost:3333/'
    : 'https://run.mocky.io/v3/05db9280-b534-40e9-884d-8c1953d993f8',
  responseType: 'json',
  headers: { 'content-type': 'application/json' }
})

export default api
