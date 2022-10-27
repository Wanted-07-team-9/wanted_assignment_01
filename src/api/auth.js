import { instance } from './http';

export const signIn = async userInfo => {
  const authSignIn = await instance.post('/auth/signin', userInfo);
  return authSignIn;
};

export const signUp = async body => {
  const authSignUp = await instance.post('/auth/signup', body);
  return authSignUp;
};
