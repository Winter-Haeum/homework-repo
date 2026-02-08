import { useState } from "react";
import EmailField from "./components/EmailField";
import PasswordField from "./components/PasswordField";
import AgreeField from "./components/AgreeField";

function App() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);


  function handleClick() {
    if (email.includes("usertest.com")) {
      setStatus("error");
      setMessage("이미 사용중인 이메일입니다.");
      return;
    }

    setStatus("success");
    setMessage("사용할 수 있는 이메일입니다.");
  }

  const canSubmit = status === "success" && password !== "" && password === passwordConfirm && isAgreed;

  return (
      <div className="card">
          <h1>회원가입</h1>
          <EmailField
            email={email}
            onChangeEmail={(e) => {
              setEmail(e.target.value);
              setStatus("idle");
              setMessage("중복을 확인해 주세요.");
            }}
            onClickCheck={handleClick}
            message={message}
            status={status}
          />

          <PasswordField
              password={password}
              onChangePassword={(e) => setPassword(e.target.value)}
              passwordConfirm={passwordConfirm}
              onChangePasswordConfirm={(e) => setPasswordConfirm(e.target.value)}
              confirmClassName={
                  passwordConfirm === ""
                      ? ""
                      : password === passwordConfirm
                          ? "ok"
                          : "bad"
              }
              showMatchMessage={passwordConfirm !== ""}
              isMatched={password === passwordConfirm}
          />

          <AgreeField
              isAgreed={isAgreed}
              onChangeAgreed={(e) => setIsAgreed(e.target.checked)}
          />

          <button 
            type="button" 
            disabled={!canSubmit}
            onClick={() => alert("가입 완료")}
            >
            가입하기
          </button>
      </div>
  );
}

export default App;
