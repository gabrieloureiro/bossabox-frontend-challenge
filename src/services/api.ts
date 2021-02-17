import axios from 'axios'

const api = axios.create({
  baseURL: !process.env.NODE_ENV
    ? 'http://localhost:3333/'
    : 'https://my-json-server.typicode.com/gabrieloureiro/fake-api-bossabox/tools',
  responseType: 'json',
  headers: { 'content-type': 'application/json' }
})

export default api
