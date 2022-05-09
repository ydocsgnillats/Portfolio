import Container from '../components/Container'

function Resume() {

      return (
          <Container
              show={false}
              title="Resume"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          >
            <a href={require("../assets/CodyResumeMAY2022.pdf")} download="CodyStallings-Resume"><button className="border rounded-lg border-black p-2 hover:animate-bounce">Download Resume</button></a>
          </Container>
      );
  }

export default Resume;