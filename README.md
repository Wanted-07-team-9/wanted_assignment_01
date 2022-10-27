# 원티드 프리 온보딩 프론트엔드 리팩토링

![badge](https://img.shields.io/badge/React-61dafb?logo=React&logoColor=white&style=flat-square)
![badge](https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white&style=flat-square)

> 원티드 프리 온보딩 프론트엔드 - 선발 과제 리팩토링

## **Description**

jwt 토큰을 이용한 로그인, 회원가입 그리고 Todo list 페이지입니다.

## **Update Feature & Refactoring**

### 1. 폴더 구조

> 기존 lib, pages, styles에서 api, components, pages, styles, utils로 변경

### 2. 로그인/회원가입 경로 구분

> 기존과 동일 (로그인: /, 회원가입: /register로 구분)

### 3-1. 이메일, 비밀번호 유효성 검사 기능

- 정규식은 파일을 따로 빼서, 함수 만들기 (김수정님)
  > validCheck.js 파일을 따로 만들어서 관리

> type(input창의 name)에 따라 정규식 다르게 적용

```javascript
export const validCheck = (type, value) => {
  const pattern = type === 'email' ? /\S+@\S+\.\S+/ : /.{8,}/;
  return pattern.test(value);
};
```

### 3-2. 위 조건 만족할때만 버튼 활성화

- disabled만으로 조건을 막지말고, 정규식등의 함수를 통해서 재검증 이후 로직 실행이 되도록
- (option) 이벤트가 있는 버튼과 없는 버튼 두가지를 달리 보여주는것도 좋은 방법
  > disabled 옵션과 추가적으로 onSubmit시에 체크된 isValid 값으로 이벤트 유무 처리

```html
<form onSubmit="{isValid" ? onSubmit : null}></form>
```

### 4. 로그인 API 호출 성공시 /todo 이동

- response이 200이면 navigate를 사용하여 이동
  > status 값을 체크하여 200일때만 이동하게 처리

```javascript
if (response.status === 200) {
  // 로그인 성공
  setStorageItem('access_token', response.data.access_token);
  navigate('/todo');
}
```

### 5. JWT 토큰값 로컬 스토리지에 저장

- localStorage를 관리하는 함수를 생성하여 사용
  > 확장성을 위해 key, value와 같이 파라미터 전달로 처리  
  > 로그아웃할때 토큰값을 삭제하기 위해 removeItem 추가

```javascript
export const setStorageItem = (key, value) => {
  localStorage.setItem(key, value);
};
export const getStorageItem = key => {
  return localStorage.getItem(key);
};
export const removeStorageItem = key => {
  localStorage.removeItem(key);
};
```

6. 로그인 여부에 따른 리다이렉트 처리

- 함수를 만들어서 리다이렉트 처리 (Router 부분 / 전이진님,김경훈님 )
  > 기존과 동일, 인증이 필요한 페이지 여부 구분 추가

7. 투두 리스트 목록 (/todo 접속시)

- 값을 받아오는 함수(ex : getTodos) 를 만들어서 useEffect 내부에서 사용 지양
  > 기존과 동일

8. 투두 내용 및 완료 여부 표시

- 수정모드에서 완료 및 수정이 가능하도록 기능구현 (권장)
  > 수정모드에서만 완료/미완료 변경할수 있게 처리 완료

9. 입력/추가 버튼, 추가 버튼 클릭시 입력창 내용 투두 리스트에 추가

- 공백 등의 에러가 없을시 로직 실행
- 에러가 있을시 에러 표시
  > 수정 완료, 공백 에러 추가

10. 투두리스트 수정 버튼 클릭시 수정모드 활성화 및 투두 리스트 내용 수정 가능하게

- 자율선택
  > 기존과 동일

11. 수정모드시 우측에 제출/취소 버튼 표시

- 자율선택
  > 기존과 동일

12. 개별아이템 우측에 삭제 버튼

- 자율선택
  > 기존과 동일

13. 그외 기능(옵션)

- 인풋창 에러메시지 처리 ( )
  > 로그인, 회원가입시 에러 메세지 추가, todo에는 아직 미구현
- modal로 메시지 관리 (이창훈,송슬기님)
  > 일단 alert과 confirm으로...
- errMsg 보여주기 (김수정님, 이진님 )
  > 로그인, 회원가입, todo 추가시 에러 메세지 추가
- 로그아웃 기능
  > 기능 구현 완료
- 페이지네이션 (경훈님)
  > 기존과 동일
- 카운터 기능 or 완료 또는 미완료 필터 처리
  > 미구현..

## **Demo**

Link 예정

### **Directory Structure**

```sh
wanted_assignment_01
├── public
├── src
│   ├── api
│   ├── components
│   ├── pages
│   ├── styles
│   └── utils
├── App.js
└── index.js
```

## **Getting Started**

## Installation

> kimkyunghun를 Local에 Clone후에 IDE에서 실행합니다.

```git
git clone -b kimkyunghun --single-branch https://github.com/Wanted-07-team-9/wanted_assignment_01.git
```

- package.json에 포함된 dependencies와 devDependencies를 설치합니다.

```sh
# npm으로 설치 진행
wanted_assignment_01 % npm install
```

## Usage

- 프로젝트 실행 및 빌드 방법

```sh
# Local Dev Server 실행
wanted_assignment_01 % npm start

# Build
wanted_assignment_01 % npm build
```

```

```
