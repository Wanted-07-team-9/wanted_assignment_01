import { Navigate } from 'react-router-dom';

const RedRedirect = ({ to }) => <Navigate replace to={to} />;

export const withAuthGuard = (type, Component) => {
  return (() => {
    const token = localStorage.accessToken;
    if (!token && type === 'member') {
      return <RedRedirect to="/" />;
    }
    if (token && type === 'guest') {
      return <RedRedirect to="/todo" />;
    }
    return Component;
  })();
};
