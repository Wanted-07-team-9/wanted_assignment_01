import { useRef } from "react"
import { ChangeMode } from "./ChangeMode"
import {InputWrapper} from "./InputWrapper"
import { SubmitBtn } from "./SubmitBtn"
import { FormContainer } from "./FormContainer"
import {signIn} from '../../api/auth'

const SignIn = ({isSignInMode, handleChangeMode, hadleModalOpen}) => {
  const emailInputRef = useRef()
  const pwdInputRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    const email = emailInputRef.current.value;
    const password = pwdInputRef.current.value
    signIn(email, password, hadleModalOpen)
  }
    const handleEnterPress = (e) =>{
    if(e.key === 'Enter'){
      handleSubmit()
    }else{
      return
    }
  }
  return (
    <FormContainer onSubmit={handleSubmit}>
    <h1>{isSignInMode}</h1>
      <InputWrapper key='1'>
        <label id="email">이메일</label>
        <input id="email" ref={emailInputRef} required />
      </InputWrapper>
      <InputWrapper key='2'>
        <label id="password">비밀번호</label>
        <input
          id="password"
          type="password"
          ref={pwdInputRef}
          onKeyDown={handleEnterPress}
          autoComplete="off"
          required
        />
      </InputWrapper>
      <ChangeMode type='button' onClick={(e) => handleChangeMode(e)}>회원가입하러가기</ChangeMode>
      <SubmitBtn >{isSignInMode}</SubmitBtn>
    </FormContainer>

  )
}


export default SignIn