import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.15.14:4433',
})

export default api