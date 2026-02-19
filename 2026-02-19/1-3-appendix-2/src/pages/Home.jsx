import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const Center = styled.div`
  text-align: center;
`;

const Emoji = styled.div`
  font-size: 48px;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 40px;
`;

const Button = styled.button`
  background: #3b82f6;
  color: white;
  padding: 18px 32px;
  border-radius: 12px;
  border: none;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: #2563eb;
  }
`;

function Home() {
  const navigate = useNavigate();

  return (
    <Center>
      <Emoji>🏠</Emoji>
      <Title>미니 블로그 홈</Title>
      <Button onClick={() => navigate("/posts")}>
        글 목록 보러가기
      </Button>
    </Center>
  );
}

export default Home;
