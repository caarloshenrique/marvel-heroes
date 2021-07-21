import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gateway.marvel.com:443/v1/public/',
});

api.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    apikey: '1b576cc1298716f1ac706bc2a403e77f',
    hash: '00ae853d31de6a0c082ce5c8c566c12d',
    ts: '1626741064929',
  };
  return config;
});

export default api;
