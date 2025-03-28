import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        {" "}
        {/* Push content down to avoid navbar overlap */}
        <Routes>
          <Route path="/" element={<Navigate to="/work" replace />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          {/* <Route path="*" element={<Work />} />  */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
