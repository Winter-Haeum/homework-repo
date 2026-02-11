# 📌 Counter with Custom Hook (1-4-4)

React 기반의 Counter 프로젝트입니다.  
커스텀 훅(useCounter)을 직접 구현하여  
증가 / 감소 / 초기화 기능과  
최소값(min)·최대값(max) 제한 로직을 적용했습니다.

---

## ✨ Features

- 🔢 숫자 증가 / 감소 기능 구현
- 🔄 Reset 버튼으로 초기값 복원
- 🔒 최소값(min) 이하로 감소 방지
- 🔒 최대값(max) 이상으로 증가 방지
- ♻️ 커스텀 훅(useCounter)로 로직 분리
- 📦 상태 로직과 UI 컴포넌트 분리 구조
- 🎨 파스텔톤 기반 유리 카드 UI 디자인 적용

---

## 🎬 Live Demo

🌐 https://winter-haeum.github.io/homework-repo/1-4-4/

---

## 🛠 Tech Stack

- React
- Custom Hook (useCounter)
- useState
- JavaScript 조건문
- CSS
- Flexbox
- backdrop-filter (Glass UI)

---

## 🧠 What I Focused On

- 상태 관리 로직을 커스텀 훅으로 분리하는 구조 설계
- 재사용 가능한 훅 설계 (initialValue, min, max 옵션 지원)
- 상태 업데이트 시 이전 값(prev)을 기반으로 처리
- UI와 비즈니스 로직을 분리하는 컴포넌트 구조 이해
- 조건부 제한 로직을 통해 안정적인 상태 관리 구현
- Glassmorphism(글래스모피즘) 스타일 UI 적용

---

## 📂 Folder Structure

```txt
src
├─ hooks
│  └─ useCounter.js
├─ components
│  └─ Counter.jsx
├─ App.jsx
└─ index.css
```

---

## 🚀 Run Locally

```bash
npm install
npm run dev
```