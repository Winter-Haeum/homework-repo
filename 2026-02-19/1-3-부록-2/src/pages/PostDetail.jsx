import {
  useParams,
  useNavigate,
  Link,
} from "react-router-dom";
import styled from "@emotion/styled";
import { POSTS } from "../data/posts";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  color: #e5e7eb;
`;

const Title = styled.h2`
  margin: 0 0 14px;
  font-size: 36px;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #ffffff;
`;

const SubTitle = styled.h3`
  margin: 0 0 12px;
  font-size: 22px;
  font-weight: 700;
  color: #ffffff;
  opacity: 0.95;
`;

const Content = styled.p`
  margin: 0;
  font-size: 18px;
  line-height: 1.7;
  color: #cbd5e1;
`;

const ButtonRow = styled.div`
  margin-top: auto; /* 🔥 아래로 */
  padding-top: 28px; /* 🔥 위 내용과 간격 */
`;

const Button = styled.button`
  margin-top: auto;
  background: #e5e7eb;
  padding: 10px 14px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: #d1d5db;
  }
`;

const ListLink = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  color: #e5e7eb;

  &:hover {
    text-decoration: underline;
    opacity: 0.85;
  }
`;

function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const postId = Number(id);
  const post = POSTS.find((item) => item.id === postId);

  if (!post) {
    return (
      <Wrap>
        <Title>존재하지 않는 글이다</Title>
        <ButtonRow>
          <Button onClick={() => navigate(-1)}>
            뒤로가기
          </Button>
          <ListLink to="/posts">글 목록으로</ListLink>
        </ButtonRow>
      </Wrap>
    );
  }

  return (
    <Wrap>
      <Title>{post.id}번 글 상세 페이지</Title>
      <SubTitle>{post.title}</SubTitle>
      <Content>{post.content}</Content>
      <ButtonRow>
        <Button onClick={() => navigate("/posts")}>
          &lt; 목록으로 돌아가기
        </Button>
      </ButtonRow>{" "}
    </Wrap>
  );
}

export default PostDetail;
