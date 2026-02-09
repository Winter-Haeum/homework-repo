# 📌 Timer UI (Clock Project)

React 기반의 Timer 프로젝트입니다.  
현재 시간을 표시하고  
state와 effect를 활용해  
Start / Stop 기능을 구현했습니다.

---

## ✨ Features

- ⏰ 현재 시간 표시 (Date 객체 활용)
- ▶ Start 버튼으로 시간 흐름 시작 (useState)
- ⏸ Stop 버튼으로 시간 정지
- 🔁 1초 간격 업데이트 (setInterval)
- 🧹 Cleanup 처리 (clearInterval)
- 🔄 상태 기반 조건 렌더링 (삼항 연산자)
- 🎨 오전/오후 분리 스타일링
- 📏 숫자 고정폭 처리로 레이아웃 흔들림 방지
- 💅 카드형 레이아웃 및 기본 스타일 적용 (CSS)

---

## 🎬 Live Demo

🌐 https://winter-haeum.github.io/homework-repo/1-4-2/

---

## 🛠 Tech Stack

- React
- useState
- useEffect
- setInterval
- clearInterval
- 조건부 렌더링 (Ternary Operator)
- CSS
- Flexbox

---

## 🧠 What I Focused On

- 상태(state) 변경에 따른 화면 재렌더링 흐름 이해
- useEffect 실행 조건과 의존성 배열 개념 학습
- setInterval 사용 시 Cleanup 필요성 이해
- 상태 기반 UI 분리 및 조건 렌더링 구조 정리
- 파생 값과 상태 값의 차이 구분

---

## 📂 Folder Structure

```txt
src
├─ components
│  └─ Timer.jsx
├─ App.jsx
└─ index.css
```

---

## 🚀 Run Locally

```bash
npm install
npm