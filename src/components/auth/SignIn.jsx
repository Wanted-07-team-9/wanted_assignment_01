import React, { useEffect, useState } from 'react';
import { useCallback } from 'react';
import InputBox from '../common/InputBox';
import { validatePswReg } from '../../utils/validation';
import { validateEmailReg } from './../../utils/validation';
import ContentsContainer from '../common/ContentContainer';
import Button from './../common/Button';
import tw from 'tailwind-styled-components';

const SignIn = ({ signIn, signUp }) => {
  const [userForm, setUserForm] = useState({ email: '', password: '' });
  const [formValError, setFormValError] = useState({
    emailErr: false,
    passwordErr: false,
  });

  useEffect(() => {
    const [emailValidation, passwordValidation] = validateInputForm(
      userForm.email,
      userForm.password
    );
    setFormValError({
      emailErr: emailValidation,
      passwordErr: passwordValidation,
    });
  }, [userForm.email, userForm.password]);

  const validateInputForm = (email, password) => {
    const emailValidation = !validateEmailReg(email);
    const passwordValidation = !validatePswReg(password);
    return [emailValidation, passwordValidation];
  };
  const onChangeInfo = e => {
    setUserForm({ ...userForm, [e.target.type]: e.target.value });
  };

  const checkFormErr = useCallback(() => {
    let _err = false;
    if (formValError.emailErr || formValError.passwordErr) {
      _err = true;
      return _err;
    }

    return _err;
  }, [formValError.emailErr, formValError.passwordErr]);

  const onClickSignIn = () => {
    const errState = checkFormErr();
    if (errState) {
      alert('formValue error');
      return;
    }
    signIn(userForm);
  };

  const onClickSignUp = () => {
    const errState = checkFormErr();
    if (errState) {
      alert('formValue error');
      return;
    }
    signUp(userForm);
  };

  return (
    <ContentsContainer>
      <Container>
        <TitleBlokc>Sign In</TitleBlokc>
        <div className="mt-10">
          <InputBox type="email" placeholder="Email" onChange={onChangeInfo} />
          {formValError.emailErr && userForm.email.length > 1 && (
            <ErrorBlock> 이메일이 올바르지 않습니다.</ErrorBlock>
          )}
          <InputBox type="password" placeholder="password" onChange={onChangeInfo} />
          {formValError.passwordErr && userForm.password.length > 1 && (
            <ErrorBlock> 패스워드가 올바르지 않습니다</ErrorBlock>
          )}
          <Button
            $fullWidth
            $disabled
            className="h-8 text-center bg-slate-100 hover:border-black hover:border-collapse "
            disabled={checkFormErr()}
            onClick={onClickSignIn}
          >
            로그인
          </Button>
          <div className="text-center my-1"> or </div>
          <Button
            $fullWidth
            $disabled
            className="h-8 bg-slate-100 hover:border-black hover:border-collapse"
            disabled={checkFormErr()}
            onClick={onClickSignUp}
          >
            회원가입
          </Button>
        </div>
      </Container>
    </ContentsContainer>
  );
};

const Container = tw.div`
flex 
justify-center 
items-center 
flex-col
`;

const TitleBlokc = tw.div`
text-3xl 
font-bold
`;

const ErrorBlock = tw.div`
mb-2 
text-red-400 
text-sm
`;

export default SignIn;
