import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../utils/auth';
import { emailCheck, passwordCheck } from '../../utils/auth';
import styled from 'styled-components';

function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [check, setCheck] = useState(false);
  const [errMessage, setErrMessage] = useState('');

  const Check = () => {
    if (email === '' || password === '') {
      setErrMessage('양식을 모두 입력해주세요');
      return setCheck(false);
    }

    if (!emailCheck(email)) {
      setErrMessage('이메일 형식을 맞춰 주세요');
      return setCheck(false);
    }

    if (!passwordCheck(password)) {
      setErrMessage('비밀번호는 8자 이상 입니다.');
      return setCheck(false);
    }
    setErrMessage('');
    return setCheck(true);
  };

  const emailOnChange = e => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const passwordOnChange = e => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  const onSubmit = async e => {
    e.preventDefault();
    const body = {
      email,
      password,
    };
    await signUp(body).then(res => {
      if (res.status === 201) {
        alert('회원이 되신것을 축하합니다. 로그인 페이지로 이동합니다');
        navigate('/signin');
      }
    });
  };

  useEffect(() => {
    Check();
  }, [email, password]);

  return (
    <div style={{ height: '80vh' }}>
      <h2 style={{ textAlign: 'center', marginTop: '50px', color: '#555' }}>회원가입</h2>
      <SignUpLayout>
        <form onSubmit={onSubmit}>
          <span style={{ color: '#D1AFE1', textAlign: 'center', fontWeight: '800' }}>
            {errMessage}
          </span>
          <label>
            이메일
            <input
              type="email"
              name="email"
              onChange={emailOnChange}
              placeholder={'@포함된 mail 형식으로 적어주세요'}
            />
          </label>

          <label>
            패스워드
            <input
              type="password"
              name="password"
              onChange={passwordOnChange}
              placeholder={'8개 이상의 패스워드를 적어주세요'}
            />
          </label>
          {check ? (
            <button type="submit">회원가입</button>
          ) : (
            <button type="button" style={{ backgroundColor: 'grey' }}>
              회원가입
            </button>
          )}
        </form>
      </SignUpLayout>
    </div>
  );
}

export default SignUp;

const SignUpLayout = styled.div`
  width: 300px;
  margin: auto;
  margin-top: 10%;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 1px 2px 5px #6c567b;
  form {
    display: flex;
    flex-direction: column;
    input {
      width: 100%;
      border: 1px solid #f67280;
    }
    button {
      margin-top: 10px;
      border-radius: 5px;
      outline: none;
      border: none;
      box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.3);
      background: #f67280;
      color: #fff;
    }
  }
`;
