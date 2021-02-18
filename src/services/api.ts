import axios from 'axios'

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://tools-bossabox-challenge.herokuapp.com/'
      : 'http://localhost:3333/',
  responseType: 'json',
  headers: { 'content-type': 'application/json' }
})

export default api
