import { post } from './http';

export const join = async user => {
  const { data } = await post({
    url: '/auth/signup',
    data: user,
  });

  return data;
};
