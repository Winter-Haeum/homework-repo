import { useState } from "react";

const PRODUCTS = [
  { id: 1, name:"노트북", price: 1200000 },
  { id: 2, name:"마우스", price: 50000 },
  { id: 3, name:"키보드", price: 80000 },
];

function ShoppingCart() {
  const [cart, setCart] = useState([]);
  
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-wrap">
      <h2>상품 목록</h2>
      <ul>
        {PRODUCTS.map((p) => (
          <li key={p.id}>
            {p.name} ({p.price}원)
            <button onClick={() => addToCart(p)}>담기</button>
          </li>
        ))}
      </ul>

      <hr />

      <h2>장바구니 ({cart.length}개)</h2>

      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name}
            <button onClick={() => removeFromCart(index)}>삭제</button>
          </li>
        ))}
      </ul>
      <h3 className="cart-total">총 금액: {total.toLocaleString()}원</h3>
    </div>
  );
}

export default ShoppingCart;