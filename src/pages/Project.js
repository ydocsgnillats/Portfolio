import { projContent } from "../content/projectContent";

function Project({ option }) {
  return (
    <>
      <div className="sm:grid sm:grid-cols-3 rounded-lg border border-stone-200 m-4 sm:pl-24 p-12">
        <div className="text-xl sm:pl-4 sm:pr-4">
          <img
            className="rounded-lg border border-stone-400"
            src={projContent[option].image}
          />
        </div>
        <div className="text-center">
          <h1 className="mb-4 sm:mb-8 mt-4 sm:mt-0 text-3xl font-bold sm:text-3xl text-center">
            {projContent[option].title}
          </h1>
          <div className="">{projContent[option].text}</div>
        </div>
        <div className=" sm:pl-24 sm:pt-16 pt-8 text-left sm:mt-1">
          <h1 className="text-xl font-bold">Technologies Used</h1>
          <div className="mt-2">
            {projContent[option].technologies.map((tech, i) => {
              return (
                <li className="p-2" key={i}>
                  {tech}
                </li>
              );
            })}
          </div>
        </div>
        <div className="list-none flex sm:mr-4 sm:ml-4 mt-8">
          <li className="p-4 rounded border border-stone-200 hover:animate-bounce hover:shadow m-2">
            <a href={projContent[option].site} target="_blank">
              View Site
            </a>
          </li>
          <li className="p-4 rounded border border-stone-200 hover:animate-bounce hover:shadow m-2">
            <a href={projContent[option].github} target="_blank">
              View Github
            </a>
          </li>
        </div>
      </div>
    </>
  );
}

export default Project;
