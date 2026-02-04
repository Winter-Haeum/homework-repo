import { useState, useEffect } from "react";
import ThemeToggle from "./components/ThemeToggle";
import ProfileDisplay from "./components/ProfileDisplay";


function App() {

  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark";
  })

  useEffect(() => {
    const theme = isDark ? "dark" : "light";

    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [isDark]);

  const [name, setName] = useState("장미진");
  const [statusMessage, setStatusMessage] = useState("오늘도 한걸음만 더 ✍️");
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className={isDark ? "dark" : "light"}>
      <ProfileDisplay
        name={name}
        statusMessage={statusMessage}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        setName={setName}
        setStatusMessage={setStatusMessage}
        isDark={isDark}
        setIsDark={setIsDark}
      />
    </div>
  );
}

export default App;