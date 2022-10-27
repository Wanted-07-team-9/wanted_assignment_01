import React, { useState } from 'react';
import { Main } from '../styles/login';
import InputForm from '../components/AuthForm';

const LoginPage = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: {
      value: '',
      msg: '',
    },
    password: {
      value: '',
      msg: '',
    },
  });

  const loginSubmit = async e => {
    e.preventDefault();
    // console.log(loginInfo)
  };

  return (
    <Main>
      <InputForm
        formType="login"
        onSubmit={loginSubmit}
        authInfo={loginInfo}
        setAuthInfo={setLoginInfo}
      />
    </Main>
  );
};

export default LoginPage;
