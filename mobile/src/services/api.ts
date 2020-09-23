import axios from 'axios';

const api = axios.create({
  baseURL: 'http://100.25.119.53:3333'
});

export default api;