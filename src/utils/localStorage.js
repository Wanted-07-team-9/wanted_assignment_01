import axiosInstance from './axiosInstance';

export const setToken = token => {
  window.localStorage.setItem('token', token);
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const getToken = () => {
  return window.localStorage.getItem('token')
};

