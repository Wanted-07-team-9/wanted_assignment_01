import React, { useState } from 'react';
import { Main } from '../styles/login';
import InputForm from '../components/AuthForm';

const RegisterPage = () => {
  const [authInfo, setAuthInfo] = useState({
    email: {
      value: '',
      msg: '',
    },
    password: {
      value: '',
      msg: '',
    },
    passwordCheck: {
      value: '',
      msg: '',
    },
  });

  const onRegisterSubmit = async e => {
    e.preventDefault();
    // console.log(authInfo)
  };

  return (
    <Main>
      <InputForm
        formType="register"
        onSubmit={onRegisterSubmit}
        authInfo={authInfo}
        setAuthInfo={setAuthInfo}
      />
    </Main>
  );
};

export default RegisterPage;
