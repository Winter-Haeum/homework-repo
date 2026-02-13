# 📌 Todo List with useReducer (1-5-2)

React 기반 Todo List 프로젝트입니다.  
기존 useState 방식으로 작성한 Todo 리스트를  
useReducer로 변환하여 상태 관리 구조를 재설계했습니다.

---

## ✨ Features

- ➕ 할 일 추가 기능
- ❌ 할 일 삭제 기능
- 🔁 완료 / 취소 토글 기능
- 📦 useReducer를 활용한 상태 관리
- 🔄 dispatch 기반 액션 처리 구조 구현
- 🎨 기본 카드형 UI 스타일 적용

---

## 🎬 Live Demo

🌐 https://winter-haeum.github.io/homework-repo/1-5-2/

---

## 🛠 Tech Stack

- React
- useReducer
- useState
- JavaScript 배열 메서드 (map, filter)
- Spread Operator (...)
- 조건부 렌더링
- CSS
- Flexbox

---

## 🧠 What I Focused On

- useState → useReducer 구조 전환 과정 이해
- reducer(state, action) 패턴 학습
- action.type 기반 상태 분기 처리 구조 설계
- 불변성 유지 원칙 적용 (새 배열 반환)
- dispatch를 통한 상태 변경 흐름 이해
- 완료 상태(done) 토글 로직 구현

---

## 📂 Folder Structure

```txt
src
├─ components
│  └─ TodoInput.jsx
├─ App.jsx
└─ index.css
```

---

## 🚀 Run Locally

```bash
npm install
npm run dev
```
