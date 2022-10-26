import axios from 'axios';

export const instance = axios.create({
  baseURL: `https://pre-onboarding-selection-task.shop`,
});

instance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('accessToken');
    config.headers['Content-Type'] = 'application/json';
    config.headers.Authorization = `Bearer ${token}`;
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
