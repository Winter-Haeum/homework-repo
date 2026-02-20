import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { CustomThemeProvider } from "./components/ThemeContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomThemeProvider>
      <BrowserRouter basename="/homework-repo/1-3-appendix-2">
        <App />
      </BrowserRouter>
    </CustomThemeProvider>
  </React.StrictMode>,
);
