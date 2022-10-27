# Best Practice

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
```

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

---

### 투두 리스트

```

📂 Pages
 ┗ 📜 TodoListPage.js

```

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
