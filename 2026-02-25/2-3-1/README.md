📌 Toggle Button Practice with TDD (2-3-1)

React에서 useState를 활용해 ON/OFF 상태를 전환하는 토글 버튼을 구현한 학습 과제입니다.
조건부 렌더링과 이벤트 핸들링의 기본 동작을 이해하는 데 목적을 두었습니다.
Jest와 React Testing Library를 사용해 테스트를 작성하며 TDD 흐름을 연습했습니다.

---

## ✨ Features

- 🔘 ON / OFF 토글 버튼 구현
- 🔁 버튼 클릭 시 상태 반전 (Boolean Toggle Pattern)
- 🎨 상태에 따른 배경색 변경 (gray ↔ green)
- 📏 고정 너비 적용으로 UI 흔들림 방지
- 🧪 Jest + React Testing Library로 테스트 작성
- ♻️ 안전한 상태 업데이트 패턴 사용 (prev 기반 업데이트)

---

## 🎬 Live Demo

🌐 https://winter-haeum.github.io/homework-repo/2-3-1/

---

## 🛠 Tech Stack

- React
- useState
- JavaScript (삼항연산자)
- Jest
- React Testing Library
- user-event
- CSS (inline style)
- Flexbox

---

## 🧠 What I Focused On

- Boolean Toggle Pattern 구조 이해
- 상태 변경(setIsOn)과 리렌더링 관계 학습
- 안전한 상태 업데이트 방식 `setIsOn((prev) => !prev)` 적용
- 조건부 렌더링 구조 이해 (ON / OFF 전환)
- 테스트의 AAA 패턴(Arrange / Act / Assert) 구조 학습
- UI와 로직 분리 사고 훈련
- 중복 코드 제거 및 파생 값(label) 분리

---

## 📂 Folder Structure

```
src
├─ components
│  └─ Toggle.jsx
├─ tests
│  └─ Toggle.test.jsx
├─ App.jsx
└─ index.css
```

---

## 🚀 Run Locally

```bash
npm install
npm test
npm run dev
```
