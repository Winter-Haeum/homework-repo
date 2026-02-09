# 📌 Stopwatch Timer (1-4-2)

React 기반의 Stopwatch 프로젝트입니다.  
useState, useRef, useEffect를 활용하여  
Start / Stop / Reset 기능과  
분:초:1/100초 형식의 스탑워치를 구현했습니다.

---

## ✨ Features

- ⏱️ 분:초:1/100초 (MM:SS:MS) 형식 구현
- ▶️ Start 버튼으로 타이머 실행
- ⏹ Stop 버튼으로 타이머 정지
- 🔄 Reset 버튼으로 시간 초기화
- 🚫 중복 인터벌 방지 로직 구현
- ♻️ useEffect cleanup 처리 (언마운트 시 인터벌 정리)
- 🔒 실행 중 Start 버튼 비활성화 / Stop 버튼 활성화 처리
- 🎨 파스텔톤 기반 커스텀 UI 디자인 적용

---

## 🛠 Tech Stack

- React
- useState
- useRef
- useEffect
- setInterval / clearInterval
- JavaScript Math 연산
- CSS
- Flexbox

---

## 🧠 What I Focused On

- 상태(state)와 ref의 역할 차이 이해
- 화면에 영향을 주는 값은 useState로 관리
- 렌더링과 무관한 값(인터벌 ID)은 useRef로 관리
- setInterval 중복 실행 방지 로직 구현
- cleanup 함수를 활용한 메모리 누수 방지
- ms(밀리초) 단위를 기준으로 시간 계산 로직 구현
- UI 상태(disabled)는 state 기반으로 제어해야 한다는 점 이해

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
npm run dev
```

