import { useEffect, useRef, useState } from "react"
import { ChangeMode } from "./ChangeMode"
import {InputWrapper} from "./InputWrapper"
import { SubmitBtn } from "./SubmitBtn"
import { FormContainer } from "./FormContainer"
import { emailCheck, passwordCheck, rePasswordCheck  } from "../../utils/regex"
import {signUp} from '../../api/auth'

const SignUp = ({isSignInMode, handleChangeMode, hadleModalOpen}) => {
  const emailInputRef = useRef()
  const pwdInputRef = useRef()
  const rePwdInputRef = useRef()
  const [btnCondition, setBtnCondition] = useState(false)
  const [emailValid, setEmailValid] = useState(false)
  const [passwordValid, setPasswordValid] = useState(false)
  const [rePasswordValid, setRePasswordValid] = useState(false)
  const [emailDesc, setEmailDesc] = useState('이메일은 @를 포함하셔야합니다.')
  const [pwdDesc, setPwdDesc] = useState('비밀번호는 8글자 이상이어야 합니다.')
  const emailValidation = () => {
    if (emailCheck(emailInputRef.current.value)) {
      setEmailValid(true)
      setEmailDesc('ㅤ')
    } else {
      setEmailValid(false)
      setEmailDesc('이메일은 @를 포함하셔야합니다.')
    }
  }

  
  const passwordValidation = (e) => {
    if (passwordCheck(e.target.value)) {
      setPasswordValid(true)
      setPwdDesc('ㅤ')
      return
    }
    setPasswordValid(false)
    setPwdDesc('비밀번호는 8글자 이상이어야 합니다.')
    return
  }
  const rePasswordValidation = () => {
    const password = pwdInputRef.current.value
    const rePassword =  rePwdInputRef.current.value
    if (rePasswordCheck(password, rePassword)) {
      return setRePasswordValid(true)
    }
    return setRePasswordValid(false)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const email = emailInputRef.current.value;
    const password = pwdInputRef.current.value
    signUp(email, password,handleChangeMode, hadleModalOpen)
  }
  useEffect(() => {
    if (emailValid && passwordValid && rePasswordValid) {
      setBtnCondition(true)
    } else {
      setBtnCondition(false)
    }
  }, [emailValid, passwordValid, rePasswordValid])
  return(
    <FormContainer onSubmit={handleSubmit}>
    <InputWrapper key='1'>
      <label id="email">이메일</label>
      <input id="email" ref={emailInputRef} onKeyUp={emailValidation} required />
      <span>{emailDesc}</span>
    </InputWrapper>
    <InputWrapper key='2'>
      <label id="password">비밀번호</label>
      <input
        id="password"
        type="password"
        ref={pwdInputRef}
        onKeyUp={passwordValidation}
        autoComplete="off"
        required
      />
      <span>{pwdDesc}</span>
    </InputWrapper>
    <InputWrapper key='3'>
      <label id="rePassword">비밀번호확인</label>
      <input
        id="rePassword"
        type="password"
        ref={rePwdInputRef}
        onKeyUp={rePasswordValidation}
        autoComplete="off"
        required
      />
    </InputWrapper>
    <ChangeMode type='button' onClick={() => handleChangeMode()}>로그인하러가기</ChangeMode>
    <SubmitBtn disabled={!btnCondition}>
      {isSignInMode}
    </SubmitBtn>
    </FormContainer>
  )
}

export default SignUp