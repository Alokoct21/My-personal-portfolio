import "./App.css";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />

        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
