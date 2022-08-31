import { projContent } from "../content/projectContent";
import Project from "./Project";

function Projects() {
  return (
    <div>
      <div className="pb-4 md:pb-0">
        {projContent.map((key, i) => {
          return <Project key={key} option={i} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
