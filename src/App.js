import { Routes, Route } from "react-router-dom";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BsArrowRightCircle } from "react-icons/bs";
import { WiDaySunny } from "react-icons/wi";
import { MdOutlineModeNight } from "react-icons/md";
import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);
  const [nav, setNav] = useState(true);

  return (
    <div
      className={`${
        dark ? "dark bg-primary" : ""
      } md:flex md:flex-row pt-2 md:pt-0`}
    >
      {nav ? (
        <div className="md:h-11/12 md:fixed md:w-1/6 -mt-2 md:m-1 md:mt-0 ml-2 md:ml-0 mr-2 md:m-0">
          <Navbar
            toggleDarkMode={() => setDark(!dark)}
            toggleNavOpen={() => setNav(!nav)}
          />
        </div>
      ) : (
        <>
          <button
            className="dark:text-darkText1 "
            onClick={() => setDark(!dark)}
          >
            {dark ? (
              <WiDaySunny
                className="md:pt-0 pt-2 md:bottom-16 md:left-3 fixed md:ml-4"
                size="2.5em"
              />
            ) : (
              <MdOutlineModeNight
                className="md:pt-0 pt-2 md:left-4 md:bottom-16 fixed md:ml-4"
                size="2em"
              />
            )}
          </button>
          <div className="fixed bottom-2 left-8 dark:text-darkText1 hidden md:block">
            <button onClick={() => setNav(!nav)}>
              <BsArrowRightCircle size="2em" />
            </button>
          </div>
        </>
      )}
      <div
        className={`dark:bg-primary bg-darkPrimary text-text1 dark:text-darkText1 pb-2 md:pb-0 ${
          nav ? "md:w-5/6 md:ml-[16.5vw]" : ""
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
