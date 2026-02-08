# 📌 Profile Card UI (1-3-1)

React 기반의 카드 인터랙션 프로젝트입니다.  
ProfileCard 컴포넌트를 분리하여  
props를 통한 데이터 전달과  
상태(state) 기반 카드 뒤집기 인터랙션을 구현했습니다.

---

## ✨ Features

- 👤 ProfileCard 컴포넌트 분리
- 🔁 카드 클릭 시 앞/뒤 전환 (useState)
- ❤️ 좋아요 버튼 상태 관리
- 💾 좋아요 수 새로고침 후에도 유지 (localStorage)
- 🚫 이벤트 전파 제어 (stopPropagation)
- 🎨 테마별 스타일 분기 (themeLight / themeDark)
- ✨ Hover Glow 효과
- 📱 반응형 레이아웃 적용

---

## 🎬 Live Demo

🌐 https://winter-haeum.github.io/homework-repo/1-3-1/

---

## 🛠 Tech Stack

- React
- useState
- Props
- Conditional Rendering
- CSS
- Flexbox
- Responsive Design

---

## 🧠 What I Focused On

- 상태 기반 UI 전환 구조 이해
- 부모 → 자식 props 데이터 전달 흐름 학습
- 이벤트 버블링 제어 및 stopPropagation 이해
- 테마별 스타일 분리 설계
- 반응형 UI 구성
- 재사용 가능한 카드 컴포넌트 구조 설계

---

## 📂 Folder Structure

```txt
src
├─ assets
│  ├─ diana.webp
│  └─ eclipse.webp
├─ components
│  └─ ProfileCard.jsx
├─ App.jsx
└─ index.css
```

---

## 🚀 Run Locally

```bash
npm install
npm run dev
```

