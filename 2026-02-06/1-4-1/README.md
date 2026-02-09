# 📌 Shopping Cart UI (1-4-1)

React 기반의 Shopping Cart 프로젝트입니다.  
고정 상품 데이터를 기반으로  
state를 활용한 장바구니 추가 / 삭제 및  
총 금액 계산 기능을 구현했습니다.

---

## ✨ Features

- 🛒 고정 상품 목록 데이터 구성
- ➕ 버튼 클릭으로 장바구니 추가 (useState)
- ❌ 개별 항목 삭제 기능 (Array.filter)
- 🔁 배열 반복 렌더링 (Array.map)
- 🧮 총 금액 자동 계산 (Array.reduce)
- ♻️ 불변성 유지 (Spread Operator)
- 🎨 기본 카드 레이아웃 스타일 적용 (CSS)

---

## 🎬 Live Demo

🌐 https://winter-haeum.github.io/homework-repo/1-4-1/

---

## 🛠 Tech Stack

- React
- useState
- Array.map
- Array.filter
- Array.reduce
- Spread Operator
- CSS
- Flexbox

---

## 🧠 What I Focused On

- 상태(state)를 기반으로 한 데이터 흐름 이해
- 함수형 업데이트 패턴을 활용한 안전한 상태 변경
- 배열 불변성 유지 방식 학습
- 이벤트 처리 흐름 이해 (onClick)
- 반복 렌더링 시 key 개념 이해
- 파생 값(total)을 state로 저장하지 않고 계산하는 구조 이해

---

## 📂 Folder Structure

```txt
src
├─ components
│  └─ ShoppingCart.jsx
├─ App.jsx
└─ index.css
```

---

## 🚀 Run Locally

```bash
npm in