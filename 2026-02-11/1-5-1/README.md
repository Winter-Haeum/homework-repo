# 📌 Language Toggle with Context API (1-4-5)

React 기반의 다국어 전환(i18n) 프로젝트입니다.  
Context API와 커스텀 훅(useLanguage)을 직접 구현하여  
한국어 ↔ 영어 전환 기능을 구현했습니다.

---

## ✨ Features

- 🌍 한국어 / 영어 언어 전환 기능 구현
- 🔁 버튼 클릭 시 실시간 언어 변경
- 📦 Context API로 전역 상태 관리
- ♻️ 커스텀 훅(useLanguage)로 로직 분리
- 🔒 상태 변경 시 React 리렌더링 원리 적용
- 🎨 심플 카드 UI 스타일 적용

---

## 🎬 Live Demo

🌐 https://winter-haeum.github.io/homework-repo/1-4-5/

---

## 🛠 Tech Stack

- React
- Context API
- Custom Hook (useLanguage)
- useState
- JavaScript 조건문 (삼항연산자)
- CSS
- Flexbox

---

## 🧠 What I Focused On

- Context API를 활용한 전역 상태 관리 구조 이해
- 상태 변경(setLang)과 리렌더링 관계 학습
- 중첩 객체(translations) 기반 다국어 데이터 구조 설계
- 커스텀 훅을 통한 Context 접근 로직 단순화
- Provider / Consumer 구조 흐름 이해
- UI와 상태 관리 로직 분리 구조 설계

---

## 📂 Folder Structure

```txt
src
├─ contexts
│  └─ LanguageContext.jsx
├─ components
│  └─ Language.jsx
├─ App.jsx
└─ index.css
```

---

## 🚀 Run Locally

```bash
npm install
npm run dev
```

