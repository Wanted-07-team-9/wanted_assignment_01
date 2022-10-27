import { client } from '../api/client';

export const setToken = jwt => {
  localStorage.setItem('token', jwt);
  client.defaults.headers.common.Authorization = `Bearer ${jwt}`;
};
