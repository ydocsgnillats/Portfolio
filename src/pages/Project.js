import { projContent } from "../content/projectContent";

function Project({ option }) {
  return (
    <>
      <div className="bg-primary dark:bg-darkPrimary md:grid md:grid-cols-2 md:h-[98vh] rounded-md border border-border1 dark:border-darkBorder1 m-2 md:mt-2 md:mb-4 md:pl-24 p-12 md:p-18 grid place-items-center">
        <div className="text-center">
          <h1 className="mb-4 md:mb-12 mt-4 md:mt-0 text-4xl font-bold md:text-5xl font-bold text-center">
            {projContent[option].title}
          </h1>
          <div className="md:min-h-[250px] md:mb-0 mb-8">
            {projContent[option].text}
          </div>
          <h1 className="text-xl font-bold md:block hidden">
            Technologies Used
          </h1>
          <div className="mt-2 md:block hidden">
            {projContent[option].technologies.map((tech, i) => {
              return (
                <li className="p-2 md:text-left md:ml-[30%]" key={i}>
                  {tech}
                </li>
              );
            })}
          </div>
        </div>
        <div className="text-xl grid place-items-center">
          <img
            className="rounded-md border border-border1 md:w-[30vw]"
            src={projContent[option].image}
          />
          <div className="list-none inline-flex place-items-center ml-4 md:mt-4">
            <li className="md:p-6 p-4 rounded-xl bg-secondary border border-border1 dark:bg-button dark:border-darkBorder1 text-primary dark:text-secondary font-bold hover:bg-button hover:shadow m-4 mt-8">
              <a href={projContent[option].site} target="_blank">
                View Site
              </a>
            </li>
            <li className="md:p-6 p-4 rounded-xl border border-border1 dark:border-darkBorder1 dark:text-secondary text-primary bg-secondary dark:bg-button font-bold hover:bg-button hover:shadow m-4 mt-8">
              <a href={projContent[option].github} target="_blank">
                View Github
              </a>
            </li>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
