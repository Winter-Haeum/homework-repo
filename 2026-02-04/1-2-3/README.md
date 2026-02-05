# 📘 React Assignment - Profile Card & SNS Post

---

## 1️⃣ Overview (과제 개요)

This assignment practices React component structure and props usage.
이 과제는 React 컴포넌트 구조와 props 전달을 연습하기 위한 학습 과제입니다.

Two reusable components were created:
두 개의 재사용 가능한 컴포넌트를 제작했습니다.

- `ProfileCard`
- `Post`

---

## 2️⃣ What This Assignment Covers (학습 내용)

- Component separation (컴포넌트 분리)
- Props passing (props 전달)
- Reusable UI structure (재사용 가능한 UI 구조)
- Basic styling with CSS (CSS 기본 스타일링)

---

## 3️⃣ Folder Structure (폴더 구조)

```
src/
 ┣ components/
 ┃ ┣ ProfileCard.jsx
 ┃ ┗ Post.jsx
 ┣ App.jsx
 ┣ index.css (or App.css)
 ┗ main.jsx (Vite) / index.js (CRA)
```

---

## 4️⃣ Component Description (컴포넌트 설명)

### 🔹 ProfileCard
Displays profile information.
프로필 정보를 카드 형태로 출력합니다.

**Props**
- `name` (string)
- `age` (number)
- `job` (string)

Example:

```jsx
<ProfileCard name="장미진" age={39} job="육아맘 학생" />
```

---

### 🔹 Post
Displays a simple SNS-style post card.
SNS 형식의 게시글 카드를 출력합니다.

**Props**
- `author` (string)
- `content` (string)

Example:

```jsx
<Post author="장미진" content="육퇴가 점점 늦어지는 이유는 겨울이기 때문일까?" />
<Post author="장미진" content="시간만 되면 일주일 내내 복습 공부만 하고 싶다." />
```

---

## 5️⃣ What I Learned (배운 점)

- Components make UI structure clearer.
  → 컴포넌트로 나누면 구조가 명확해진다.

- Props allow dynamic data rendering.
  → props를 사용하면 같은 구조에 다른 데이터를 쉽게 적용할 수 있다.

- Reusability reduces repetitive code.
  → 재사용이 가능해지면 반복 코드를 줄일 수 있다.

---

## 6️⃣ Next Practice Step (다음 연습 단계)

- Render posts using an array and `map()`
  → 배열과 map으로 게시글 출력하기

- Add basic interaction (e.g., like button)
  → 간단한 인터랙션 기능 추가

---

This README is structured for assignment documentation purposes.
이 README는 학습 과제 기록용으로 작성되었습니다.