import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./components/widgets/Sidebar";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import MainTest from "./components/pages/tests/MainTest";
import "./styles/styles.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Tests" element={<MainTest />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
