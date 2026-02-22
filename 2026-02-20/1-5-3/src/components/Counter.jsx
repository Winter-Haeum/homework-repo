import useCounterStore from "../store/useCounterStore";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  gap: 20px;
  box-sizing: border-box;
  border: 2px solid #e5e7eb;
  padding: 30px;
  border-radius: 12px;
  font-size: 48px;
  font-weight: 700;
  color: #1f2937;

  background-color: #fff;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 10px 18px;
  font-size: 18px;
  font-weight: 600;

  border: none;
  border-radius: 8px;
  background-color: #8b86e5;
  color: white;

  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #4338ca;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

function Counter() {
  const { count, increment, decrement, reset } =
    useCounterStore();

  return (
    <Wrapper>
      <div>{count}</div>

      <ButtonGroup>
        <Button onClick={increment}>+</Button>
        <Button onClick={decrement}>−</Button>
        <Button onClick={reset}>⟲</Button>
      </ButtonGroup>
    </Wrapper>
  );
}

export default Counter;
