import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TodoListPage from './Pages/TodoListPage';
import SignIn from './components/User/SignIn';
import SignUp from './components/User/SignUp';
import Heading from './components/Nav/Heading';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Pages/HomePage';
import Footer from './components/Footer/Footer';
import { withAuthGuard } from './utils/PrivateRouter';

const App = () => {
  // const login = localStorage.getItem('accessToken');
  return (
    <>
      <Heading />
      <Routes>
        <Route path="/" element={withAuthGuard('guest', <HomePage />)} />
        <Route path="/todo" element={withAuthGuard('member', <TodoListPage />)} />
        <Route path="/signin" element={withAuthGuard('guest', <SignIn />)} />
        <Route path="/signup" element={withAuthGuard('guest', <SignUp />)} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
