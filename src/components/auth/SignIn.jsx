import React, { useEffect, useState } from 'react';
import { useCallback } from 'react';
import InputBox from './InputBox';
import { validatePswReg } from '../../utils/validation';
import { validateEmailReg } from './../../utils/validation';

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
  const onInfoChange = e => {
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
    <div className="flex justify-center items-center w-full h-full">
      <div className="flex justify-center items-center w-[720px] h-full bg-slate-500 min-h-screen">
        <div className="flex justify-center items-center flex-col">
          <div className="text-3xl font-bold">Sign In</div>
          <div className="mt-10">
            <InputBox type="email" placeholder="Email" onChange={onInfoChange} />
            {formValError.emailErr && userForm.email.length > 6 && (
              <div className="mb-2 text-red-400 text-sm"> 이메일이 올바르지 않습니다.</div>
            )}
            <InputBox type="password" placeholder="password" onChange={onInfoChange} />
            {formValError.passwordErr && userForm.password.length > 1 && (
              <div className="mb-2 text-red-400 text-sm"> 패스워드가 올바르지 않습니다</div>
            )}
            <button
              className="w-full bg-slate-100 rounded-md border-2 hover:border-black hover:border-collapse disabled:cursor-not-allowed disabled:text-red-500"
              disabled={checkFormErr()}
              onClick={onClickSignIn}
            >
              로그인
            </button>
            <div className="text-center my-1"> or </div>
            <button
              className="w-full bg-slate-100 rounded-md border-2 hover:border-black hover:border-collapse disabled:cursor-not-allowed disabled:text-red-500"
              disabled={checkFormErr()}
              onClick={onClickSignUp}
            >
              회원가입
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
