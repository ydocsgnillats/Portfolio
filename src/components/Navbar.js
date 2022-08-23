import { FiSettings } from "react-icons/fi";
import { useState } from "react";

const Navbar = () => {
  const { settingsOpen, setSettingsOpen } = useState(false);

  return (
    <>
      <nav className="flex sm:items-center border-stone-200 border p-4 m-2 rounded-lg">
        <div className="font-semibold sm:text-3xl text-xl">
          <a href="/" className="sm:mr-8 sm sm:block hidden">
            Cody Stallings
          </a>
          <a href="/" className="mr-12 sm sm:hidden block">
            Cody S
          </a>
        </div>
        <div className="sm:flex-grow -ml-8 sm:ml-0">
          <div className="text-md pt-1">
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
              className="float-right sm:pr-2 sm:pl-0 pl-4"
              onClick={() => setSettingsOpen(!settingsOpen)}
            >
              <FiSettings size="1.5em" />
            </button>
          </div>
        </div>
      </nav>
      {settingsOpen && <div>Open!</div>}
    </>
  );
};

export default Navbar;
