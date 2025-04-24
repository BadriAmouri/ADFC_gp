import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/index.css";
import App from "./App";
import { ThemeToggleProvider } from "./contexts/ThemeContext";
import { CssBaseline } from "@mui/material";
import { SnackProvider } from "./components/Calander/SnackProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeToggleProvider>
      <CssBaseline />
      <SnackProvider> {/* ⬅️ wrap it here */}
        <Router>
          <App />
        </Router>
      </SnackProvider>
    </ThemeToggleProvider>
  </React.StrictMode>
);
