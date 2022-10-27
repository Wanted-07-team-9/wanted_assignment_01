import React, { useState } from 'react';
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

  const validateInputForm = useCallback(() => {
    const emailValidation = !validateEmailReg(userForm.email);
    const passwordValidation = !validatePswReg(userForm.password);

    setFormValError({
      ...formValError,
      emailErr: emailValidation,
      passwordErr: passwordValidation,
    });
  }, [formValError, userForm.email, userForm.password]);

  const onInfoChange = e => {
    validateInputForm();
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

  const onSignIn = () => {
    const errState = checkFormErr();
    if (errState) {
      alert('form error');
      return;
    }
    signIn(userForm);
  };

  const onSignUp = () => {
    const errState = checkFormErr();
    if (errState) {
      alert('form error');
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
            <InputBox type="password" placeholder="password" onChange={onInfoChange} />
            <button
              className="w-full bg-slate-100 rounded-md border-2 hover:border-black hover:border-collapse disabled:cursor-not-allowed disabled:text-red-500"
              disabled={checkFormErr()}
              onClick={onSignIn}
            >
              로그인
            </button>
            <div className="text-center my-1"> or </div>
            <button
              className="w-full bg-slate-100 rounded-md border-2 hover:border-black hover:border-collapse disabled:cursor-not-allowed disabled:text-red-500"
              disabled={checkFormErr()}
              onClick={onSignUp}
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
