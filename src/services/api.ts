import axios from 'axios'

const api = axios.create({
  baseURL: 'https://tools-bossabox-challenge.herokuapp.com/',
  responseType: 'json',
  headers: { 'content-type': 'application/json' }
})

export default api
