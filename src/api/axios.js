import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_HTTPS_URI,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  function (config) {
    const auth = localStorage.getItem('access_token');
    if (auth) config.headers.common['Authorization'] = `Bearer ${auth}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response && error.response.data.statusCode) {
      switch (error.response.data.statusCode) {
        case 400:
        case 401:
        case 402:
        case 500:
          alert(error.response.data.message);
          break;
        default:
          return;
      }
    }
    return Promise.reject(error);
  }
);
