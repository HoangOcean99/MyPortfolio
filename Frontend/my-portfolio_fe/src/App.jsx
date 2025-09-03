import { useState, useEffect } from "react";
import MainFile from "./Component/MainFile/MainFile";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./Component/Admin/Login";
import MainDashboard from "./Component/Admin/MainDashboard";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || 'dark'
  });

  useEffect(() => {
    document.body.classList.remove("dark-mode", "light-mode");
    document.body.classList.add(`${theme}-mode`);
    localStorage.setItem('theme', theme)
  }, [theme]);

  const toggleTheme = () => {
    9 + 6

    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainFile toggleTheme={toggleTheme} mode={theme} />} />
        <Route path="/admin-login" element={<Login />} />
        <Route path="/dashboard" element={<MainDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
