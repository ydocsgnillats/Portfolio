import { projContent } from '../content/projectContent'

function Project({option}) {

      return (
        <>
            <a href="/projects" className="absolute text-lg hover:animate-ping left-12 top-32">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
            </a>
            <div class="grid grid-cols-3 ml-12 mt-24 rounded-md bg-stone-100 p-1 w-full"> 
                <div class="block ml-24 w-full text-xl">
                    <img src={projContent[option].image}/>
                </div>
                <div class="w-auto -ml-20">
                    <h1 className="mb-8 text-3xl">{projContent[option].title}</h1>
                    {projContent[option].text}
                    <div className="list-none flex -ml-4 m-2">
                        <li className="p-4 rounded border border-black hover:animate-bounce hover:shadow m-4"><a href={projContent[option].site} target="_blank">View Site</a></li>
                        <li className="p-4 rounded border border-black hover:animate-bounce hover:shadow m-4"><a href={projContent[option].github} target="_blank">View Github</a></li>
                    </div>
                </div>
                <div class="w-1/2 mt-2 ml-24">
                    <h1 className="text-xl">Technologies Used</h1>
                    <div className="mt-4">
                        {
                            projContent[option].technologies.map((tech, i) => {
                                return (
                                    <li className="p-2" key={i}>
                                        {tech}
                                    </li>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            </>
      );
  }

export default Project;