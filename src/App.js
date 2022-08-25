import { Routes, Route } from "react-router-dom";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="lg:pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

// TODO center home page and width smaller, fix projects mobile and regular/reimagine projects all on one page in cards, update project descriptions, fix project card, pick better fonts, better colors
// TODO fix ccme for mobile and update styles
// TODO create tetrachrome website
// TODO fix finally forever and finish it
// TODO jump into nutrition site
// TODO inquire about doing some web work
