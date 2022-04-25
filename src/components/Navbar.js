const Navbar = () => {
    return (
            <nav class="flex items-center justify-between flex-wrap bg-stone-100 p-6 m-2 rounded">
                <div class="flex items-center flex-shrink-0 text-black mr-8">
                    <a href="/" class="font-semibold text-3xl">Cody Stallings</a>
                </div>
                <div class="block lg:hidden">
                    <button class="flex items-center px-3 py-2 border rounded text-zinc-200 border-zinc-400 hover:text-zinc-50 hover:border-zinc-50">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
                <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div class="text-md lg:flex-grow">
                    <a href="/projects" class="block mt-4 text-base lg:inline-block lg:mt-0 text-black mr-6 p-2 hover:border-black border-stone-100 border-b">
                        Projects
                    </a>
                    <a href="/resume" class="block mt-4 text-base lg:inline-block lg:mt-0 text-black mr-6 p-2 hover:border-black border-stone-100 border-b">
                        Resume
                    </a>
                    <a href="https://www.github.com/ydocsgnillats" target="_blank" class="block mt-4 text-base lg:inline-block lg:mt-0 text-black mr-6 p-2 hover:border-black border-stone-100 border-b">
                        Github
                    </a>
                    </div>
                </div>
            </nav>
    )}

export default Navbar;