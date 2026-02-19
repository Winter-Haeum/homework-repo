import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { POSTS } from "../data/posts";

const Title = styled.h1`
  font-size: 48px;
  font-weight: 800;
  color: white;
  margin-bottom: 30px;
`;

const List = styled.ul`
  list-style: square;
  padding-left: 20px;
`;

const Item = styled.li`
  margin-bottom: 18px;
`;

const PostLink = styled(Link)`
  color: #60a5fa;
  text-decoration: none;
  font-size: 22px;

  &:hover {
    text-decoration: underline;
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const Footer = styled.div`
  margin-top: auto;
  padding-top: 28px;
`;

const HomeButton = styled(Link)`
  display: inline-block;
  background: #475569;
  color: white;
  padding: 14px 18px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    background: #334155;
  }
`;

function PostList() {
  return (
    <div>
      <Title>✏️ 글 목록</Title>

      <List>
        {POSTS.map((post) => (
          <Item key={post.id}>
            <PostLink to={`/posts/${post.id}`}>
              {post.id}. {post.title}
            </PostLink>
          </Item>
        ))}
      </List>

      <Footer>
        <HomeButton to="/">&lt; 홈으로</HomeButton>
      </Footer>
    </div>
  );
}

export default PostList;
