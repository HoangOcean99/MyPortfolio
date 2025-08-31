import { useState, useEffect } from "react";
import MainFile from "./Component/MainFile/MainFile";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [theme, setTheme] = useState("dark"); // dark mặc định

  useEffect(() => {
    // Xóa class cũ và thêm class mới lên body
    document.body.classList.remove("dark-mode", "light-mode");
    document.body.classList.add(`${theme}-mode`);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <MainFile toggleTheme={toggleTheme} mode={theme} />
    </>
  );
}

export default App;
