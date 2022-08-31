import { projContent } from "../content/projectContent";

function Project({ option }) {
  return (
    <>
      <div className="bg-primary dark:bg-darkPrimary md:grid md:grid-cols-3 rounded-md border border-border1 dark:border-darkBorder1 m-2 md:mt-4 md:mb-4 md:pl-24 p-12 md:p-18">
        <div className="text-xl inline-flex place-items-center">
          <img
            className="rounded-md border border-border1"
            src={projContent[option].image}
          />
        </div>
        <div className="text-center">
          <h1 className="mb-4 md:mb-12 mt-4 md:mt-0 text-4xl font-bold md:text-4xl text-center">
            {projContent[option].title}
          </h1>
          <div className="md:min-h-[250px]">{projContent[option].text}</div>
          <div className="list-none inline-flex place-items-center ml-4 md:mt-4">
            <li className="p-2 md:p-4 rounded-md bg-primary border border-border1 dark:bg-darkPrimary dark:border-darkBorder1 font-bold hover:animate-bounce hover:shadow m-2">
              <a href={projContent[option].site} target="_blank">
                View Site
              </a>
            </li>
            <li className="p-2 md:p-4 rounded-xl border border-border1 dark:border-darkBorder1 dark:text-darkText1 text-text1 bg-primary dark:bg-darkPrimary font-bold hover:animate-bounce hover:shadow m-2">
              <a href={projContent[option].github} target="_blank">
                View Github
              </a>
            </li>
          </div>
        </div>
        <div className=" md:pl-24 pt-8 text-left md:mt-14">
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
