import { FiSettings } from "react-icons/fi";
import { useState } from "react";
import bg1 from "../assets/bg1.jpeg";
import bg2 from "../assets/bg2.jpeg";
import bg4 from "../assets/bg4.jpeg";
import bg7 from "../assets/bg7.jpeg";
import bg8 from "../assets/bg8.jpeg";
import bg9 from "../assets/bg9.jpeg";
import bg10 from "../assets/bg10.jpeg";
import bg11 from "../assets/bg11.jpeg";
import bg12 from "../assets/bg12.jpeg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDark = () => {
    setDarkMode(!darkMode);
    document.body.style.color = `${darkMode ? "black" : "white"}`;
  };

  const changeBackground = () => {
    const bgs = [bg1, bg2, bg4, bg7, bg8, bg9, bg10, bg11, bg12];
    let selection = bgs[Math.floor(Math.random() * 9)];
    document.body.style.backgroundImage = `url(${selection})`;
  };

  return (
    <>
      <nav className="flex lg:fixed lg:w-[99%] lg:items-center border-stone-200 opacity-95 p-4 m-2 rounded-lg">
        <div className="font-semibold lg:text-3xl text-xl">
          <a href="/" className="lg:mr-8 sm lg:block hidden">
            Cody Stallings
          </a>
          <a href="/" className="mr-12 sm pt-1 lg:hidden block">
            Cody S
          </a>
        </div>
        <div className="lg:flex-grow -ml-8 lg:ml-0">
          <div className="text-md lg:pt-1">
            <a
              href="/projects"
              className="hover:border-black border-stone-100 m-4"
            >
              Projects
            </a>
            <a
              href="/resume"
              className="hover:border-black border-stone-100 m-4"
            >
              Resume
            </a>
            <button
              className="lg:float-right lg:pr-2 lg:pl-0 lg:pl-4"
              onClick={() => setToggle(!toggle)}
            >
              <FiSettings className="lg:pt-0 pt-2 lg:ml-0 ml-4" size="1.5em" />
            </button>
          </div>
        </div>
      </nav>
      {toggle && (
        <div>
          <div className="list-none bg-white opacity-95 fixed lg:right-4 ml-2 lg:ml-0 border-stone-200 border text-black p-4 rounded-xl lg:mt-28 lg:w-64 w-[96%]">
            <h1 className="text-xl font-bold">Settings</h1>
            <li>
              <button
                onClick={() => toggleDark()}
                className="border border-stone-600 p-2 m-2 -ml-1 rounded-xl"
              >
                {darkMode ? "Dark" : "Light"} Mode
              </button>
            </li>
            <li>
              <button
                onClick={() => changeBackground()}
                className="border border-stone-600 p-2 m-2 -ml-1 rounded-xl"
              >
                Change Background
              </button>
            </li>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
