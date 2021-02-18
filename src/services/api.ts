import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BOSSABOX_API,
  responseType: 'json',
  headers: { 'content-type': 'application/json' }
})

export default api
