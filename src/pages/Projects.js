import Card from '../components/Card'
import Container from '../components/Container'
import { projContent } from '../content/projectContent'

function Projects() {

      return (
            <Container
                show={false}
                title="Projects"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            >
                {
                    projContent.map((content, i) => {
                        return (
                            <Card key={i} title={content.title} text={content.text} image={content.image} path={content.path} show={true} />
                        )
                    })
                }
            </Container> 
      );
  }

export default Projects;