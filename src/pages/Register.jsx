import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Main } from '../styles/login';
import InputForm from '../components/AuthForm';
import { reqAuth } from '../api/auth';
import { setStorageItem } from '../utils/localStorage';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [authInfo, setAuthInfo] = useState({
    email: "",
    password: "",
    passwordCheck: "",
    msg: {
      email: "",
      password: "",
      passwordCheck: ""
    }
  });

  const onRegisterSubmit = async e => {
    e.preventDefault();
    try {
      const response = await reqAuth.signUp({
        email: authInfo.email,
        password: authInfo.password
      });
      if(response.status === 201)
      {
        setStorageItem("access_token", response.data.access_token);
        alert("회원 가입이 완료되었습니다.")
        navigate('/todo');
      }
    }
    catch(error) {
      if(error.response.status === 400)
        alert(error.response.data.message);
        // data: {statusCode: 400, message: "동일한 이메일이 이미 존재합니다.", error: "Bad Request"}
    }
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
