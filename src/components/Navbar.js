const Navbar = (props) => {
    return (
        <nav class="flex items-center justify-between flex-wrap bg-zinc-800 p-6 opacity-80">
            <div class="flex items-center flex-shrink-0 text-zinc-50 mr-8">
                <span class="font-semibold text-2xl">Cody Stallings</span>
            </div>
            <div class="block lg:hidden">
                <button class="flex items-center px-3 py-2 border rounded text-zinc-200 border-zinc-400 hover:text-zinc-50 hover:border-zinc-50">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-md lg:flex-grow">
                <a href="#" class="block mt-4 text-base lg:inline-block lg:mt-0 text-zinc-50 hover:rounded-lg mr-6 p-2 hover:border-transparent hover:text-zinc-600 hover:bg-zinc-50">
                    About
                </a>
                <a href="#" class="block mt-4 text-base lg:inline-block lg:mt-0 text-zinc-50 hover:text-zinc-50 hover:rounded-lg mr-6 p-2 hover:border-transparent hover:text-zinc-600 hover:bg-zinc-50">
                    Projects
                </a>
                <a href="#" class="block mt-4 text-base lg:inline-block lg:mt-0 text-zinc-50 hover:text-zinc-50 hover:rounded-lg mr-6 p-2 hover:border-transparent hover:text-zinc-600 hover:bg-zinc-50">
                    Resume
                </a>
                <a href="#" class="block mt-4 text-base lg:inline-block lg:mt-0 text-zinc-50 hover:text-zinc-50 hover:rounded-lg mr-6 p-2 hover:border-transparent hover:text-zinc-600 hover:bg-zinc-50">
                    Contact Me
                </a>
                </div>
            </div>
        </nav>
    )}

export default Navbar;