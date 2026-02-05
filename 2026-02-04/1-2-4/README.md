## 📌 Profile Editor

React 기반으로 구현한 프로필 편집 UI 프로젝트입니다.  
Light / Dark 테마 전환과 상태 메시지 유효성 검증을 포함한  
인터랙티브 컴포넌트를 설계하고 구현했습니다.


---

## ✨ Features
- 🌗 Light / Dark mode toggle (localStorage 저장)
- ✏️ Profile name editing
- 📝 Status message validation (max 20 chars)
- 💾 Persistent state (새로고침 유지)
- 🪟 Glassmorphism UI
- 🎨 Smooth hover & transition effects

---

## 🎬 Live Demo

🌐 https://winter-haeum.github.io/homework-repo/1-2-4/

---

## 🛠 Tech Stack
- React
- useState / useEffect
- LocalStorage
- CSS (Glassmorphism, Theme transition, Hover animation)

---

## 🧠 What I Focused On

- 상태 관리 흐름 분리 (Display / Edit 컴포넌트 분리)
- 테마 전환 시 UI 일관성 유지
- localStorage 동기화 로직 설계
- 사용자 경험을 고려한 인터랙션 디테일
- 재사용 가능한 컴포넌트 구조 설계

---

## 📂 Folder Structure

```txt
src
├─ components
│  ├─ ProfileDisplay.jsx
│  ├─ ProfileEditForm.jsx
│  └─ ThemeToggle.jsx
├─ assets
│  └─ profile-demo.webm
├─ App.jsx
├─ main.jsx
└─ index.css
```

---

## 🚀 Run Locally

```bash
npm install
npm run dev
```

---
