import { useState, useEffect } from "react";
import MainFile from "./Component/MainFile/MainFile";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./Component/Admin/Login";
import MainDashboard from "./Component/Admin/MainDashboard";
import { Protected } from "./Component/Admin/Protected";
import { getProject } from "./Api/ProjectApi";
import './loading.css';
import 'animate.css';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || 'dark'
  });
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProject();
        setData(response.data);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    document.body.classList.remove("dark-mode", "light-mode");
    document.body.classList.add(`${theme}-mode`);
    localStorage.setItem('theme', theme)
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };
  if (loading) {
    return (
      <div class="contain-loading">
        <h1>Please wait about 30 seconds</h1>
        <p>Server is opening...</p>
        <div class="loader"></div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainFile toggleTheme={toggleTheme} mode={theme} />} />
        <Route path="/admin-login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <Protected>
              <MainDashboard />
            </Protected>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
