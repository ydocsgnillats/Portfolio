import { WiDaySunny } from "react-icons/wi";
import { MdOutlineModeNight } from "react-icons/md";
import { BsArrowLeftCircle } from "react-icons/bs";
import Profile from "../assets/profile.jpeg";
import { useState } from "react";

const Navbar = (props) => {
  const [dark, setDark] = useState(false);
  const [nav, setNav] = useState(true);

  const toggleDark = () => {
    setDark(!dark);
    props.toggleDarkMode();
  };

  const toggleNav = () => {
    setNav(!nav);
    props.toggleNavOpen();
  };

  return (
    <nav className="flex md:block md:flex-initial md:h-screen rounded-md md:rounded-none h-[8vh] bg-primary dark:bg-darkPrimary text-text1 dark:text-darkText1 p-4 md:-ml-1 pb-8 md:pb-4">
      <div className="font-semibold md:text-3xl text-xl">
        <a href="/" className="md:block hidden">
          Cody Stallings
        </a>
        <a href="/" className="mr-[18px] w-24 md:hidden block">
          Cody S
        </a>
      </div>
      <div>
        <img
          className="rounded-xl mt-8 hidden md:block pointer-events-none border border-secondary dark:border-primary"
          src={Profile}
        />
      </div>
      <div className="-ml-8 md:ml-0 md:text-center">
        <div className="text-lg md:font-bold md:pt-1 md:mt-4 flex md:block -mt-6">
          <a href="/projects" className="">
            <div className="p-2 m-4 md:border rounded-xl border-secondary dark:border-primary md:p-4 hover:bg-button bg-secondary text-primary dark:bg-primary dark:text-secondary">
              Projects
            </div>
          </a>
          <a href="/resume" className="">
            <div className="p-2 m-4 md:border rounded-xl border-secondary dark:border-primary md:p-4 hover:bg-button bg-secondary text-primary dark:bg-primary dark:text-secondary">
              Resume
            </div>
          </a>
        </div>
      </div>
      <button
        className="md:float-right right-8 md:left-1 md:fixed w-8 md:mt-0 -mt-3 ml-2"
        onClick={() => toggleDark()}
      >
        {dark ? (
          <WiDaySunny
            className="md:pt-0 pt-2 md:ml-0 md:ml-4 md:fixed md:bottom-2"
            size="2.5em"
          />
        ) : (
          <MdOutlineModeNight
            className="md:pt-0 mt-1 md:mt-0 pt-2 md:ml-0 md:ml-4 md:fixed md:bottom-3"
            size="2em"
          />
        )}
      </button>
      <button
        className="-mt-2 md:bottom-3 left-[12.5%] fixed hidden md:block"
        onClick={() => toggleNav()}
      >
        <BsArrowLeftCircle className="md:pt-0 pt-2 -ml-2 lg:ml-2" size="2em" />
      </button>
    </nav>
  );
};

export default Navbar;
