import * as Styled from './style';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NotValidContent from '../../Atom/NotValidContent';
import { noTokenClient } from '../../../utils/axios';
import { emailCheck, passwordCheck } from '../../../utils/regex';

const Auth = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleShowButton = () => {
    setIsSignUp(!isSignUp);
    setEmail('');
    setPassword('');
    setIsValidEmail(true);
    setIsValidPassword(true);
  };
  useEffect(() => {
    const accessToken = localStorage.getItem('AccessToken');
    if (accessToken) navigate('/todos');
  }, []);

  //유효성 검사
  const handleUserData = event => {
    //입력값이 이메일일 때
    if (event.target.name === 'email') {
      setEmail(event.target.value);
      if (emailCheck(event.target.value)) {
        return setIsValidEmail(true);
      } else {
        return setIsValidEmail(false);
      }
    } else if (event.target.name === 'password') {
      setPassword(event.target.value);
      if (passwordCheck(event.target.value)) {
        return setIsValidPassword(true);
      } else {
        return setIsValidPassword(false);
      }
    }
  };
  const handleFetchData = async event => {
    let endPoint = event.target.name;
    if (!emailCheck(email) || !passwordCheck(password))
      return alert('이메일과 8자리 이상의 비밀번호를 입력해주세요');
    try {
      await noTokenClient('post', `/auth/${endPoint}`, {
        data: {
          email,
          password,
        },
      }).then(res => {
        if (res.status === 200 || res.status === 201) {
          alert('로그인 되었습니다');
          localStorage.setItem('AccessToken', res.data.access_token);
          navigate('/todos');
        }
      });
    } catch (e) {
      if (e.response.status === 404) {
        alert('해당 사용자가 존재하지 않습니다');
      } else if (e.response.status === 401) {
        alert('정확한 아이디와 비밀번호를 입력해주세요');
      } else if (e.response.status === 400) {
        alert('동일한 이메일이 이미 존재합니다');
      } else {
        alert('잘못된 요청입니다');
      }
    }
  };

  return (
    <Styled.PageContainer>
      <Styled.PageTitle>회원정보를 입력해주세요</Styled.PageTitle>
      <Styled.UserEmail
        name="email"
        placeholder="email"
        onChange={handleUserData}
        isValid={isValidEmail}
        value={email}
      />
      <div>
        {!isValidEmail && !emailCheck(email) && (
          <NotValidContent>이메일 형식(@)의 아이디를 입력해주세요</NotValidContent>
        )}
      </div>

      <Styled.UserPassword
        name="password"
        placeholder="password"
        onChange={handleUserData}
        isValid={isValidPassword}
        value={password}
        type="password"
      />
      <div>
        {!isValidPassword && !passwordCheck(password) && (
          <NotValidContent>비밀번호는 8자리 이상 입력해주세요</NotValidContent>
        )}
      </div>

      {isSignUp ? (
        <Styled.SignInBtn name="signin" onClick={handleFetchData}>
          로그인
        </Styled.SignInBtn>
      ) : (
        <Styled.SignInBtn name="signup" onClick={handleFetchData}>
          회원가입
        </Styled.SignInBtn>
      )}
      {isSignUp ? (
        <Styled.Link onClick={handleShowButton}>회원가입 하기</Styled.Link>
      ) : (
        <Styled.Link onClick={handleShowButton}>로그인 하기</Styled.Link>
      )}
    </Styled.PageContainer>
  );
};

export default Auth;
