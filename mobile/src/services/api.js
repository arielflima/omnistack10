import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.15.16:4433',
})

export default api