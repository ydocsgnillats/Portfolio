import Container from "../components/Container";
import { projContent } from "../content/projectContent";
import Project from "./Project";

function Projects() {
  return (
    <>
      {projContent.map((key, i) => {
        return <Project key={key} option={i} />;
      })}
    </>
  );
}

export default Projects;
