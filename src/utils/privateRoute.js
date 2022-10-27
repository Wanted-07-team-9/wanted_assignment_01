import React from 'react';
import { Navigate } from 'react-router-dom';
import { getLocalStorage } from './token';

const Redirect = ({ to }) => <Navigate to={to} />;

const PrivateRoute = ({ needAuth, component }) => {
  const accessToken = getLocalStorage('access_token');
  // auth가 필요하고, accessToken이 없을땐 / (Login) 페이지로
  // auth가 필요없고, accessToken이 있을땐 /todo 페이지로
  // 그외에는 component 페이지로
  return needAuth && !accessToken ? (
    <Redirect to="/" />
  ) : !needAuth && accessToken ? (
    <Redirect to="/todo" />
  ) : (
    component
  );
};
export default PrivateRoute;
