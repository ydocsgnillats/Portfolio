import { projContent } from "../content/projectContent";
import Project from "./Project";

function Projects() {
  return (
    <div>
      <div className="-mb-2">
        {projContent.map((key, i) => {
          return <Project key={key} option={i} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
