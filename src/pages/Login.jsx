import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Main } from '../styles/login';
import InputForm from '../components/AuthForm';
import { reqAuth } from '../api/auth';
import { setStorageItem } from '../utils/localStorage';

const LoginPage = () => {
  const navigate = useNavigate();
  const [authInfo, setAuthInfo] = useState({
    email: '',
    password: '',
    msg: {
      email: '',
      password: '',
    },
  });

  const loginSubmit = async e => {
    e.preventDefault();
    try {
      const response = await reqAuth.signIn({
        email: authInfo.email,
        password: authInfo.password,
      });

      if (response.status === 200) {
        // 로그인 성공
        setStorageItem('access_token', response.data.access_token);
        navigate('/todo');
      }
    } catch (error) {
      const statusCode = error.response.status;
      if (statusCode === 401) alert('이메일 또는 비밀번호가 틀렸습니다.');
      else if (statusCode === 404) alert('해당 사용자가 존재하지 않습니다.');
    }
  };

  return (
    <Main>
      <InputForm
        formType="login"
        onSubmit={loginSubmit}
        authInfo={authInfo}
        setAuthInfo={setAuthInfo}
      />
    </Main>
  );
};

export default LoginPage;
