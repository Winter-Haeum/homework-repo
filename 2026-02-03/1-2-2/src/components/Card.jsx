import basicHaEum from "../assets/기본 겨울하음.png";
import waveHaEum from "../assets/인사하는 겨울하음.png";

function App() {
  const name = "장미진";
  const birthYear = 2000;
  const hobbies = ["독서", "음악감상"];
  const MBTI = "ISFP";

  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;

  return (
    <div
      className="card"
      style={{
        width: "300px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "20px",
        textAlign: "center"
      }}
    >
      <div>
        <div className="imgBox">
          <img className="img basic" src={basicHaEum} alt="기본 겨울하음" />
          <img className="img wave" src={waveHaEum} alt="인사하는 겨울하음" />
        </div>
        <h2 className= "name" style={{ color: "#232323" }}>{name}</h2>
      </div>

      <p className= "info">나이 : {age}세</p>
      <p className= "info">취미 : {hobbies.join(", ")}</p>
      <p className= "info">MBTI : {MBTI}</p>
    </div>
  );
}

export default App;
