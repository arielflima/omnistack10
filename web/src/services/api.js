import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4433'
});

export default api;