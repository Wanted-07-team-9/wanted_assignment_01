import { instance } from '../utils/axios';

export const reqAuth = {
  signUp: body => {
    return instance.post('/auth/signup', body);
  },
  signIn: body => {
    return instance.post('/auth/signin', body);
  },
};
