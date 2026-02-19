import React from "react";
import { ThemeProvider } from "@emotion/react";

const theme = {
  colors: {
    primary: "#6366f1",
    secondary: "#ec4899",
    text: "#111827",
    background: "#ffffff",
    border: "#e5e7eb",
  },
};

export function CustomThemeProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
}
