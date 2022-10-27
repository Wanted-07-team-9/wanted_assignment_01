# Best Practice

# [💙배포링크💙](https://sparkling-taiyaki-9de7c5.netlify.app/)

### API 폴더와 파일 생성

```

📂 api
 ┣ 📜 auth.js
 ┣ 📜 http.js
 ┗ 📜 todo.js

```

- auth.js: 회원가입, 로그인 api 요청
- http.js: interceptors를 사용하여 토큰값, 에러처리
- todo.js: todo CRUD api 요청

---

### 이메일, 비밀번호 유효성 검사 기능

```

📂 utils
 ┗ 📜 authValidation.js

```

#### 정규식 유효성 검사 함수

```
export const emailCheck = email => {
  let regExp = /[@]/;
  return email.trim() !== '' && email !== 'undefined' && regExp.test(email);
};

export const passwordCheck = password => {
  let regExp = /.{8,}/;
  return password.trim() !== '' && password !== 'undefined' && regExp.test(password);
};

```

- 정규식 표현으로 유효성 검사 함수를 이메일과 패스워드 두가지를 생성 하였습니다.

---

### 유효성 검사 / 버튼 활성화

```
📂 components
┣📂 User
 ┗ 📜 SignUp.js

```

#### 유효성 함수를 가져와 인풋의 value 검사

```
  const Check = () => {
    if (email === '' &&  password === '') {
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
```

- 회원가입 유효성 체크에 정규표현식 함수를 임포트 하여 이메일과 패스워드 인풋 value를 검사를 진행 합니다.

#### 버튼 활성화

```
{check ? (
          <button type="submit">회원가입</button>
        ) : (
          <button type="button" style={{ backgroundColor: 'grey' }}>
            회원가입
          </button>
        )}
```

- 이전 회원가입 버튼 활성화는 버튼의 disabled를 사용 했다면 유효성 검사의 조건에 따른 버튼 컴포넌트 렌더링으로 수정 하여 UI 적인 부분을 개선 했습니다.

---

### 리다이렉트

```

📂 utils
 ┗ 📜 PrivateRouter.js

```

#### 리다이렉트 함수를 생성

```
const RedRedirect = ({ to }) => <Navigate replace to={to} />;

export const withAuthGuard = (type, Component) => {
  return (() => {
    const token = localStorage.accessToken;
    if (!token && type === 'member') {
      return <RedRedirect to="/" />;
    }
    if (token && type === 'guest') {
      return <RedRedirect to="/todo" />;
    }
    return Component;
  })();
};
```

- 개선하기전 Route컴포넌트 element에 토큰 여부의 조건부 렌더링으로 작성 했는데 토큰 값과 멤버인지 게스트인지에 따른 리다이렉트 함수를 만들었습니다

---

#### todo 인풋 유효성 검사

```

📂 utils
 ┗ 📜 todoValidation.js

```

```
  export const validateTodo = todo => {
  return todo.replace(/ /g, '').length >= 3;
};

```

- todo 입력 input에 유효성 검사 함수를 따로 만들어 사용 하였습니다.

#### todo 추가, todo 수정 빈칸 입력시 제출 못함

```
📂 Pages
 ┗ 📜 TodoListPage.js

```

```
//추가
  const onInsertTodo = text => {
    if (validateTodo) {
      return alert('할일을 입력해 주세요');
    } else {
      createTodo(text);
    }
  };
//수정
  const onUpdate = (id, todo, isCompleted) => {
    if (validateTodo) {
      return alert('수정할 할일을 입력해 주세요');
    }
    updateTodo(id, todo, isCompleted);
  };
```

- 수정, 추가시에 유효성 검사를 통가에 따른 함수의 실행과 에러가 활성화 되도록 개선 하였습니다.

---

### pagenation 구현

```

📂 utils
 ┗ 📜 todoValidation.js

```

```
<PageNav>
        <PageClick onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </PageClick>
        {Array.from({ length: numPages }, (_, i) => i + 1).map((i, _) => (
          <PageNum key={i} onClick={() => setPage(i)} aria-current={page === i ? 'page' : null}>
            {i}
          </PageNum>
        ))}
        <PageClick onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &gt;
        </PageClick>
      </PageNav>
```

- 10개 씩 하나의 페이지로 보이도록 페이지 네이션을 구현 하였습니댜.
