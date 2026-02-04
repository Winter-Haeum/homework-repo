import ProfileCard from "./components/ProfileCard";
import Post from "./components/Post";

function App() {
  return (
    <div>
      <div>
        <h1 className="title">프로필 카드</h1>
        <ProfileCard name="장미진" age={39} job="육아맘 학생" />
      </div>
      <div>
        <h1 className="title">SNS 게시물</h1>
        <Post author="장미진" content="육퇴가 점점 늦어지는 이유는 겨울이기 때문일까?" />
        <Post author="장미진" content="시간만 되면 일주일 내내 복습 공부만 하고 싶다." />
      </div>
    </div>
  );
}

export default App;