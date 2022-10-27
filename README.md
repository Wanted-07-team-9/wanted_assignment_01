## commit msg 규칙

### 1. 커밋 유형 지정하기

⭐ feat : 새로운 기능에 대한 커밋

🛠 fix : 버그 수정에 대한 커밋

🧱 build : 빌드 관련 파일 수정에 대한 커밋

👏 chore : 그 외 자잘한 수정에 대한 커밋

⚒ refactor :  코드 리팩토링에 대한 커밋

🎨 style : 코드 스타일 혹은 포맷 등에 관한 커밋

✏ docs : 문서 수정에 대한 커밋

💡 ci : CI관련 설정 수정에 대한 커밋


### 전체 폴더구조
```
|   App.js
|   index.js
|
+---api
|       api.js
|       axios.js
|
+---components
|   +---elements
|   |       Button.jsx
|   |       Header.jsx
|   |       Icon.jsx
|   |       Input.jsx
|   |       Label.jsx
|   |       Layout.jsx
|   |       Toggle.jsx
|   |
|   +---signin
|   |       SignIn.jsx
|   |
|   +---signup
|   |       SignUp.jsx
|   |
|   \---todo
|           CreateForm.jsx
|           Todo.jsx
|           TodoList.jsx
|
+---pages
|       Main.jsx
|       NotFound.jsx
|       Todo.jsx
|
+---router
|       Router.jsx
|
+---styles
|       GlobalStyle.jsx
|       Theme.jsx
|
\---utils
        jwt.js
        regex.js
```


# 1. 아이디 비밀번호 유효성 검사 

## 🔒 회원가입 & 로그인
### 회원가입
![회원가입](https://user-images.githubusercontent.com/72599761/198223715-aa018c06-7ba9-49c7-a505-412333becc09.gif)

### 로그인
![로그인](https://user-images.githubusercontent.com/72599761/198223948-99c8aa24-606d-4efb-ba51-98bb6ddf5701.gif)

```javascript
 const [emailMsg, setEmailMsg] = useState('');
 const [pwMsg, setPwMsg] = useState('');
 const [emailMsgColor, setEmailMsgColor] = useState('');
 const [pwMsgColor, setPwMsgColor] = useState('');
 const [pwValidCheck, setPwVaildCheck] = useState(false);
 const [emailValidCheck, setEmailVaildCheck] = useState(false);
  
  const validation = (name, value) => {
    if (name === 'email') {
      if (!emailCheck(value)) {
        setEmailMsg('@를 포함해주세요.');
        setEmailMsgColor('#FF1F2F');
        setEmailVaildCheck(false);
      } else {
        setEmailMsg('올바른 형식입니다.');
        setEmailMsgColor('#5D5FEF');
        setEmailVaildCheck(true);
      }
    }

    if (name === 'password') {
      if (passwordCheck(value)) {
        setPwMsg('올바른 형식입니다.');
        setPwMsgColor('#5D5FEF');
        setPwVaildCheck(true);
      } else {
        setPwMsg('8자리 이상 입력해주세요.');
        setPwMsgColor('#FF1F2F');
        setPwVaildCheck(false);
      }
    }
  };
```

```javascript
 return (
    <Wrapper>
    ...
     {pwValidCheck && emailValidCheck ? (
            <Button
              width={'100%'}
              height={'1.5rem'}
              content={'로그인'}
              fontSize={'0.8rem'}
              borderRadius={'0.3rem'}
              padding={'1.1rem'}
              onClick={onSubmitHandler}
              cursor={'pointer'}
            />
          ) : (
            <Button
              width={'100%'}
              height={'1.5rem'}
              content={'로그인'}
              fontSize={'0.8rem'}
              borderRadius={'0.3rem'}
              padding={'1.1rem'}
              color={'gray'}
              onClick={e => {
                e.preventDefault();
                setIsToggled(false);
              }}
            />
          )}
```

- 토글 버튼을 누르면 회원가입과 로그인이 전환됩니다.
- 이메일에는 @가 포함되지 않으면 에러메세지를 띄우며 실시간으로 유효성 검사를 해줍니다.
- 패스워드는 8자리 이상이 아니면 에러메세지를 띄우며 실시간으로 유효성 검사를 해줍니다.
- 유효성 검사를 통과했을 때 올바른 형식이라는 메세지가 뜹니다. 
- 유효성 검사를 통과하지 못하면 회원가입 버튼이 비활성화 됩니다.
- 유효성 검사를 통과하면 회원가입이 완료됐으므로 로그인 페이지로 이동합니다.

<br>
<hr>
<br>

# 2. 정규식 파일 분리 
```javascript
// 이메일 정규식 검사
// @만 포함되면 true
export const emailCheck = email => {
  let regExp = /[@]/;

  return email.trim() !== '' && email !== 'undefined' && regExp.test(email);
};

// 패스워드 정규식 검사
// 6자 이상이면 true
export const passwordCheck = password => {
  let regExp = /.{8,}/;

  return password.trim() !== '' && password !== 'undefined' && regExp.test(password);
};
```

<br>
<hr>
<br>


# 3. jwt토큰 값 로컬 스토리지에 저장 

```javascript
// Token 가져오기
export const getJwtToken = tokenName => {
  return localStorage.getItem(tokenName);
};

// Token 저장
export const setJwtToken = (tokenName, tokenData) => {
  localStorage.setItem(tokenName, tokenData);
  return 0;
};
```

<br>
<hr>
<br>


# 4. 컴포넌트 확장성을 고려한 elements 설계 
- input, button, label, icon, Toggle 등 
- 자주 사용하는 컴포넌트들을 재사용 가능하도록 컴포넌트를 설계했습니다. 


```javascript
function Button({
  content,
  size,
  onClick,
  width,
  height,
  fontWeight,
  fontSize,
  color,
  borderRadius = '0.5rem',
  padding = '1rem',
  cursor,
}) {
  return (
    <Wrapper onClick={onClick}>
      {content && (
        <Btn
          size={size}
          fontWeight={fontWeight}
          width={width}
          height={height}
          fontSize={fontSize}
          color={color}
          padding={padding}
          borderRadius={borderRadius}
          cursor={cursor}
        >
          {content}
        </Btn>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: ${props => props.width};
`;

const Btn = styled.button`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.padding};
  width: ${props => props.width};
  height: ${props => props.height};
  font-weight: ${props => props.fontWeight};
  color: ${props => (props.color === 'subColor' ? props.theme.mainColor : props.theme.white)};
  border-radius: ${props => props.borderRadius};
  transition: ${props => props.theme.transition};
  border: ${props => (props.color === 'subColor' ? `1px solid ${props.theme.mainColor}` : 'none')};
  background-color: ${props =>
    props.color === 'subColor'
      ? props.theme.white
      : props.color === 'gray'
      ? props.theme.gray
      : props.theme.mainColor};
  font-size: ${props => props.fontSize};
  cursor: ${props => props.cursor};
`;

export default Button;
```

- 위의 코드는 만능버튼을 구현한 것입니다.

<br>
<hr>
<br>

# 5. GlobalStyle 및 Theme 적용 

- GlobalStyle
```javascript
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
* {
	box-sizing: border-box;
}
html {
  font-size: 62.5%;
}
body {
	background-color: #5D5FEF;
  font-family: 'Nanum Gothic Coding', monospace;
}
body * {
	background-color: transparent;
	letter-spacing: -0.5px;
}
h1 {
  font-family: 'Roboto', sans-serif;
}
a {
	text-decoration: none;
  color: inherit;
}
`;
export default GlobalStyle;
```

<br>
<hr>
<br>
