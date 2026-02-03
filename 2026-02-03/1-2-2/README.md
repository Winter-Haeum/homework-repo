# 🧩 React Profile Card Project

React를 사용하여 자기소개 프로필 카드를 만들고
컴포넌트 분리 연습을 진행한 프로젝트입니다.

---

## 📌 프로젝트 목표

* JSX 문법 이해
* 변수 및 계산식 JSX에서 출력하기
* 배열 `join()` 활용
* 컴포넌트 분리 (Header, Card, Footer)
* import / export 구조 이해
* 이미지 hover 효과 구현

---

## 🏗️ 프로젝트 구조

```
src
 ├── App.jsx
 ├── App.css
 ├── assets
 │    ├── basic.png
 │    └── wave.png
 └── components
      ├── Header.jsx
      ├── Card.jsx
      └── Footer.jsx
```

---

## 🚀 주요 기능

### 1️⃣ 컴포넌트 분리

App.jsx에서 Header, Card, Footer를 분리하여 재사용 가능한 구조로 구성

### 2️⃣ 나이 자동 계산

```js
const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;
```

### 3️⃣ 취미 배열 출력

```js
hobbies.join(", ")
```

### 4️⃣ 이미지 Hover 효과

CSS로 두 이미지를 겹쳐 hover 시 전환 구현

---

## 🛠️ 사용 기술

* React
* JSX
* CSS
* Git & GitHub

---

## 📚 배운 점

* JSX에서 `{}`는 JavaScript 표현식을 넣는 자리
* 배열은 `join()`으로 문자열로 변환 가능
* 컴포넌트 분리의 중요성
* import 경로와 폴더 구조 이해

---

## 🔮 향후 개선 예정

* props를 활용한 동적 데이터 전달
* 여러 카드 렌더링
* map() 활용
* 스타일 개선
