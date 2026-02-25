import { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prev) => !prev);
  };

  const label = isOn ? "ON" : "OFF";
  const backgroundColor = isOn ? "green" : "gray";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <button
        onClick={handleToggle}
        style={{
          width: "120px", // 🔥 고정 너비
          height: "50px",
          backgroundColor,
          color: "white",
          border: "none",
          borderRadius: "5px",
          fontSize: "16px",
        }}
      >
        {label}
      </button>
    </div>
  );
}

export default Toggle;
