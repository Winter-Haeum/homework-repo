import styled from "@emotion/styled";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostList from "./pages/PostList";
import PostDetail from "./pages/PostDetail";

const Layout = styled.div`
  min-height: 100vh;
  background: #0f172a;
  padding: 80px 40px;
`;

const Container = styled.div`
  max-width: 600px;
  min-height: 00px;
  margin: 0 auto;
  background: #0b1a33;
  border-radius: 16px;
  padding: 60px;
  opacity: 1; /* 흐릿함 방지 */
`;

function App() {
  return (
    <Layout>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostList />} />
          <Route
            path="/posts/:id"
            element={<PostDetail />}
          />
        </Routes>
      </Container>
    </Layout>
  );
}

export default App;
