function ThemeToggle({ isDark, setIsDark }) {
    return (
        <button 
            className="theme-toggle"
            onClick={() => setIsDark(!isDark)}
        >
            {isDark ? "☀️" : "🌙"}
        </button>
    );
}

export default ThemeToggle;