import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { StudentProvider } from "./context/StudentContext.jsx";
import AuthProvider from "./context/AuthContext.jsx";
import ThemeProvider from "./context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <StudentProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </StudentProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
