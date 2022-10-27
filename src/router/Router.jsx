import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import Todo from '../pages/Todo';
import NotFound from '../pages/NotFound';
import Layout from '../components/elements/Layout';

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={withAuthGuard('guest', <Main />)} />
        <Route element={withAuthGuard('member', <Layout />)}>
          <Route path="/todo" element={withAuthGuard('member', <Todo />)} />
          <Route path="*" element={withAuthGuard('member', <NotFound />)} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
