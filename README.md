# wanted_assignment_01

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

## 📁 폴더 구조

```
└── src
    ├── App.js
    ├── index.js
    ├── components
    │   ├── common
    │   │     ├── Background.jsx
    │   │     ├── ContentContainer.jsx
    │   │     ├── Nav.jsx
    │   │     ├── Button.jsx
    │   ├── auth
    │   │     ├── InputBox.jsx
    │   │     └── SignIn.jsx
    │   └── todo
    │         ├── TodoItem.jsx
    │         └── TodoList.js
    ├── containers
    │   ├── MainContainer.jsx
    │   └── TodoContainer.jsx
    ├── context
    │   └── AuthContext.js
    ├── utils
    │   ├── token.js
    │   └── validation.js
    ├── api
    │   ├── auth.js
    │   ├── client.js
    │   ├── todo.js
    └── pages
        ├── MainPage.jsx
        └── TodoPage.jsx
```

## 프로젝트 실행 방법

```
git clone git@github.com:Wanted-07-team-9/wanted_assignment_01.git
npm install
npm start
open http://localhost:3000
```

## 주요 기능

#### 로그인/로그아웃 기능구현

- 메인경로("/") 에서 로그인 및 회원가입기능을 구현하였습니다
- email과 psw를 정규식을 통하여 값을 검증하여 값을 제한하였습니다.
- form의 인풋값을 검증하여 버튼 활성화가 됩니다.
- 로그인 및 회원가입 버튼 입력시 추가로 한번 더 검증을 통하여 로직이 실행되도록 하였습니다.
- 로그인 시 토큰값을 이용하여 컨텍스트에 로그인정보를 저장합니다.
- 로그인시 로그아웃 버튼이 노출되며, 로그아웃 버튼을 클릭시 토큰값 제거 및 로그인 정보가 변경됩니다.
- 로그인후 "/" 경로로 이동시 자동으로 "/todo"경로로 이동하도록 하였습니다.

#### Todo기능구현

- todo경로("/")로 이동시 DB서버를 통해 todos값들을 불러오도록 하였습니다.
- todo경로에서 todo의 불러오기,추가,제거,수정기능을 구현하였습니다.
- todo의 수정은 토글기능의 완료/비완료 체크와, 수정 버튼을 클릭하여 텍스트를 수정하는 두가지 버전을 구현하였습니다.
- 진행중인 todo와 완료된 todo의 갯수를 표시하도록 하였습니다.
- 토도의 입력 및 수정은 공백을 제외한 3글자이상으로 제한하도록 하였습니다.

## BestPactice

✨ 선정 기준

✨ 선정 이유

## 개선 결과

- 로그인,로그아웃 화면에서 각 인풋의 errMsg를 노출하기 위하여, 정규식 파일을 분리하였습니다.
- 회원가입 및 로그인 버튼 클릭시 함수내부에서 다시한번 검증하여 실행되도록 하였습니다.
- 폼 값이 정규식 값을 통과하지 못할시 errMsg를 노출하도록 하였습니다.
- 함수이름 및 변수이름을 조금 더 직관적이고 명확하게 보일 수 있도록 노력하였습니다. (ex: item => todoObj / onSignIn => onClickSignIn / data => todoData etc.. )

#### 추가적 옵션

- 팀 단위로 일관된 ESlint, prettier와 husky를 사용한 자동화를 진행하였습니다.
- gitmessage template을 사용하여, 커밋전 msg 규칙 및 커밋 내용을 손쉽게 작성할 수 있도록 하였습니다.
- 팀 단위로 CRA의 필요없는 파일은 모두 지우고 사용하기로 하였습니다.
- 팀 단위로 react의 주요 기능과 관련되지 않은 함수는 utils 폴더에 관련된 파일에서 생성하여 이용할수있도록 하였습니다.
- 팀 resetCSS를 적용하기로 하였습니다. 하지만 제가 사용하는 tailwindCSS는 resetCSS를 적용할 수 없기때문에 적용하지 않았습니다.

#### Bug

현재 제 로컬환경에서 npm이 실행은 되지만, husky 사용시 node 에러가 발생하여 임시적으로 husky 자동화 부분을 주석처리하였습니다.  
대부분의 환경에서는 주석 부분을 빼고 실행하시면 husky가 제대로 실행 됩니다.
