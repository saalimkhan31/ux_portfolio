import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Work from "./pages/Work";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import FunTime from "./pages/FunTime";
import Resume from "./pages/Resume";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/work" />} />{" "}
        <Route path="/work" element={<Work />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/funtime" element={<FunTime />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
