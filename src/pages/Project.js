import { projContent } from "../content/projectContent";

function Project({ option }) {
  return (
    <>
      <div className="lg:grid lg:grid-cols-3 rounded-lg border border-stone-200 m-2 lg:mt-4 lg:mb-4 lg:pl-24 p-12 lg:p-18">
        <div className="text-xl inline-flex place-items-center">
          <img
            className="rounded-lg border border-stone-400"
            src={projContent[option].image}
          />
        </div>
        <div className="text-center">
          <h1 className="mb-4 lg:mb-12 mt-4 lg:mt-0 text-4xl font-bold lg:text-4xl text-center">
            {projContent[option].title}
          </h1>
          <div className="lg:min-h-[250px]">{projContent[option].text}</div>
          <div className="list-none inline-flex place-items-center ml-4 lg:mt-4">
            <li className="p-2 lg:p-4 rounded-xl border border-stone-200 hover:animate-bounce hover:shadow m-2">
              <a href={projContent[option].site} target="_blank">
                View Site
              </a>
            </li>
            <li className="p-2 lg:p-4 rounded-xl border border-stone-200 hover:animate-bounce hover:shadow m-2">
              <a href={projContent[option].github} target="_blank">
                View Github
              </a>
            </li>
          </div>
        </div>
        <div className=" lg:pl-24 pt-8 text-left lg:mt-14">
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
      </div>
    </>
  );
}

export default Project;
