# 📌 Todo List UI (1-3-4)

React 기반의 Todo List 프로젝트입니다.  
컴포넌트 분리를 통해  
props를 통한 데이터 전달과  
state 기반 추가 / 삭제 기능을 구현했습니다.

---

## ✨ Features

- 📝 TodoInput 컴포넌트 분리
- ➕ 버튼 클릭 및 Enter 입력으로 할 일 추가 (useState)
- ❌ 개별 항목 삭제 기능 (filter)
- 🧠 부모 → 자식 props 데이터 전달 구조
- ♻️ 불변성 유지 (spread 연산자)
- ⌨️ Enter 키 이벤트 처리 (onKeyDown)
- 🎨 미니멀 카드 UI 스타일 적용
- 📱 기본 반응형 레이아웃

---

## 🎬 Live Demo

🌐 https://winter-haeum.github.io/homework-repo/1-3-4/

---

## 🛠 Tech Stack

- React
- useState
- Props
- Conditional Rendering
- Array.map
- Array.filter
- Spread Operator
- CSS
- Flexbox

---

## 🧠 What I Focused On

- 상태 기반 데이터 관리 구조 이해
- 부모(App)에서 상태 관리 후 자식 컴포넌트로 props 전달
- 이벤트 흐름 이해 (onChange, onClick, onKeyDown)
- 배열 불변성 유지 방식 학습
- 조건부 로직으로 공백 입력 방지 처리
- UI와 로직 분리 구조 설계

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

