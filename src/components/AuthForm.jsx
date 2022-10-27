import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { InputDiv } from '../styles/login';
import { validCheck } from '../utils/validCheck';

const AuthForm = ({ formType, onSubmit, authInfo, setAuthInfo }) => {
  const formInfo = {
    login: {
      title: '로그인',
      linkTitle: '회원 가입',
      url: '/register',
    },
    register: {
      title: '회원 가입',
      linkTitle: '로그인 페이지로',
      url: '/',
    },
  };

  const [isValid, setIsValid] = useState(false);
  const onInputChange = e => {
    const { name, value } = e.target;

    let msg = '';
    if (name === 'passwordCheck' && authInfo.password !== value)
      msg = '동일한 비밀번호를 입력해주세요.';

    const validResult = validCheck(name, value);

    if (!validResult) {
      if (name === 'email') msg = '잘못된 이메일 형식입니다.';
      else if (name === 'password' || name === 'passwordCheck') msg = '8자리 이상 입력해주세요.';
    }
    setAuthInfo(prevState => ({
      ...prevState,
      [name]: value,
      msg: {
        ...prevState.msg,
        [name]: msg,
      },
    }));
  };

  useEffect(() => {
    const isMsg = !Object.values(authInfo.msg)
      .map(msg => msg === '')
      .includes(false);
    const isValue = !Object.values(authInfo).some(val => val === '');
    // value가 모두 있거나 msg가 모두 비워져있을때 true
    setIsValid(isMsg && isValue);
  }, [authInfo]);

  return (
    <form onSubmit={isValid ? onSubmit : null}>
      <h1>{formInfo[formType].title}</h1>
      <InputDiv>
        <input
          type="email"
          name="email"
          onChange={onInputChange}
          placeholder="이메일 주소"
          required
        />
        <p>{authInfo.msg.email}</p>
      </InputDiv>
      <InputDiv>
        <input
          type="password"
          name="password"
          onChange={onInputChange}
          placeholder="비밀번호"
          required
        />
        <p>{authInfo.msg.password}</p>
      </InputDiv>
      {formType === 'register' && (
        <>
          <InputDiv>
            <input
              type="password"
              name="passwordCheck"
              onChange={onInputChange}
              placeholder="비밀번호 확인"
              required
            />
            <p>{authInfo.msg.passwordCheck}</p>
          </InputDiv>
        </>
      )}
      <button type="submit" disabled={!isValid}>
        {formInfo[formType].title}
      </button>
      <p>
        <Link to={formInfo[formType].url}>{formInfo[formType].linkTitle}</Link>
      </p>
    </form>
  );
};
export default AuthForm;
