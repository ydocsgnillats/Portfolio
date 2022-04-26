const Navbar = () => {
    return (
            <nav class="flex items-center justify-between flex-wrap bg-stone-100 p-6 m-2 rounded">
                <div class="flex items-center flex-shrink-0 text-black mr-8">
                    <a href="/" class="font-semibold text-3xl">Cody Stallings</a>
                </div>
                <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto">
                    <div class="text-black text-md lg:flex-grow">
                    <a href="/projects" class="mt-4 lg:inline-block lg:mt-0 mr-6 p-2 hover:border-black border-stone-100 border-b">
                        Projects
                    </a>
                    <a href="/resume" class="mt-4 lg:inline-block lg:mt-0 mr-6 p-2 hover:border-black border-stone-100 border-b">
                        Resume
                    </a>
                    <a href="https://www.github.com/ydocsgnillats" target="_blank" class="mt-4 lg:inline-block lg:mt-0 mr-6 p-2 hover:border-black border-stone-100 border-b">
                        Github
                    </a>
                    </div>
                </div>
            </nav>
    )}

export default Navbar;