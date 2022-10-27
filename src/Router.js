import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage';
import ToDoPage from './page/ToDoPage';
import { getToken } from './utils/localStorage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={withAuthGuard('beforeAuth', <HomePage />)} />
      <Route path="/todo" element={withAuthGuard('afterAuth', <ToDoPage />)} />
    </Routes>
  );
};

const withAuthGuard = (state, Component)  => {
  const isLoggedIn = getToken()
  if(!isLoggedIn && state==='afterAuth'){
    return<Navigate replace to='/' />
  }
  if(isLoggedIn && state === 'beforeAuth'){
    return <Navigate replace to='/todo' />
  }
  return Component
}

export default Router;
