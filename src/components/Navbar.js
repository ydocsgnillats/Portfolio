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
    <nav className="flex md:block md:flex-initial md:border-border1 dark:border-darkBorder1 md:border-r rounded-sm md:h-screen -mb-2 md:mb-0 bg-primary dark:bg-darkPrimary text-text1 dark:text-darkText1 p-4 pb-8 md:pb-4">
      <div className="font-semibold md:text-3xl text-xl">
        <a href="/" className="md:md:block hidden">
          Cody Stallings
        </a>
        <a href="/" className="mr-[18px] w-24 md:hidden block">
          Cody S
        </a>
      </div>
      <div className="-ml-8 md:ml-0">
        <div className="text-md md:pt-1 md:mt-4 flex md:block -mt-4">
          <div className=" m-4 md:m-0 md:pb-4">
            <a href="/projects" className="hover:border-border1 hover:border-b">
              Projects
            </a>
          </div>
          <div className="m-4 md:m-0">
            <a href="/resume" className="hover:border-border1 hover:border-b">
              Resume
            </a>
          </div>
        </div>
      </div>
      <div>
        <img className="rounded-xl mt-8 hidden md:block" src={Profile} />
      </div>
      <button
        className="md:float-right -mt-2 md:bottom-3 right-3 md:left-3 fixed w-8"
        onClick={() => toggleDark()}
      >
        {dark ? (
          <WiDaySunny className="md:pt-0 pt-2 md:ml-0 md:ml-4" size="2em" />
        ) : (
          <MdOutlineModeNight
            className="md:pt-0 pt-2 md:ml-0 md:ml-4"
            size="2em"
          />
        )}
      </button>
      <button
        className="-mt-2 md:bottom-3 left-[12.5%] fixed hidden md:block"
        onClick={() => toggleNav()}
      >
        <BsArrowLeftCircle className="md:pt-0 pt-2 md:ml-0 ml-4" size="2em" />
      </button>
    </nav>
  );
};

export default Navbar;
