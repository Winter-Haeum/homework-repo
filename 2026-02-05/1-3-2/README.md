# 📌 React Signup Form (1-3-2)

React 기반의 회원가입 폼 인터랙션 프로젝트입니다.  
Email / Password / Agreement 컴포넌트를 분리하여  
props를 통한 데이터 전달과  
상태(state) 기반 유효성 검사를 구현했습니다.

---

## ✨ Features

- 📧 이메일 중복 검사 로직 구현
- ✅ 성공 / ❌ 실패 아이콘 및 메시지 출력
- 🔐 비밀번호 · 비밀번호 확인 일치 여부 검사
- 🎨 일치 여부에 따른 테두리 색상 변경 (ok / bad)
- ☑ 약관 동의 체크 상태 관리
- 🚦 모든 조건 충족 시 가입 버튼 활성화
- 🧩 EmailField / PasswordField / AgreeField 컴포넌트 분리
- ✨ 버튼 hover 및 transition 효과 적용
- 📦 상태 기반 조건부 렌더링 적용

---

## 🎬 Live Demo

🌐 https://winter-haeum.github.io/homework-repo/1-3-2/

---

## 🛠 Tech Stack

- React
- useState
- Props
- Conditional Rendering
- CSS
- Flexbox
- Transition & Hover Effects

---

## 🧠 What I Focused On

- 상태 기반 유효성 검사 흐름 설계
- 부모(App) → 자식(Component) props 전달 구조 이해
- 조건부 렌더링(`&&`)을 통한 UI 분기 처리
- 버튼 활성/비활성 제어 로직 설계
- 컴포넌트 단위 구조 분리 연습
- UI 상태에 따른 스타일 분기 처리

---

## 📂 Folder Structure

```txt
src
├─ components
│  ├─ EmailField.jsx
│  ├─ PasswordField.jsx
│  └─ AgreeField.jsx
├─ App.jsx
└─ index.css
```

---

## 🚀 Run Locally

```bash
npm install
npm