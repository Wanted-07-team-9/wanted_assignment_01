import { instance } from './http';

export const signIn = async userInfo => {
  const authSignIn = await instance.post('/auth/signin', userInfo);
  return authSignIn;
};

export const signUp = async body => {
  const authSignUp = await instance.post('/auth/signup', body);
  return authSignUp;
};

export const emailCheck = email => {
  let regExp = /[@]/;
  return email.trim() !== '' && email !== 'undefined' && regExp.test(email);
};

export const passwordCheck = password => {
  let regExp = /.{8,}/;
  return password.trim() !== '' && password !== 'undefined' && regExp.test(password);
};
