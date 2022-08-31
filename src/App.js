import { Routes, Route } from "react-router-dom";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BsArrowRightCircle } from "react-icons/bs";
import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);
  const [nav, setNav] = useState(true);

  return (
    <div className={`${dark ? "dark" : ""} md:flex md:flex-row`}>
      {nav ? (
        <div className="md:h-screen bg-primary dark:bg-darkPrimary md:fixed md:w-1/6">
          <Navbar
            toggleDarkMode={() => setDark(!dark)}
            toggleNavOpen={() => setNav(!nav)}
          />
        </div>
      ) : (
        <div className="fixed bottom-2 left-4 dark:text-darkText1">
          <button onClick={() => setNav(!nav)}>
            <BsArrowRightCircle size="2em" />
          </button>
        </div>
      )}
      <div
        className={`dark:bg-darkPrimary bg-primary text-text1 dark:text-darkText1 ${
          nav ? "md:w-5/6 md:ml-[16.6vw]" : ""
        }`}
      >
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
