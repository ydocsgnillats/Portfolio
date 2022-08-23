const Navbar = () => {
  return (
    <nav className="flex sm:items-center border-stone-200 border p-4 m-2 rounded-lg">
      <div className="font-semibold sm:text-3xl text-xl">
        <a href="/" className="sm:mr-8">
          Cody Stallings
        </a>
      </div>
      <div className="sm:flex-grow">
        <div className="text-md sm:pt-1 pt-4">
          <a
            href="/projects"
            className="hover:border-black border-stone-100 m-4"
          >
            Projects
          </a>
          <a href="/resume" className="hover:border-black border-stone-100 m-4">
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
