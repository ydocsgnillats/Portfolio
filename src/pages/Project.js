import Container from '../components/Container'
import { projContent } from '../content/projectContent'

function Project({option}) {

      return (
          <Container show={false}>
            <a href="/projects" className="absolute text-lg left-12 top-32">Back</a>
            <div class="grid grid-cols-3 gap-4 rounded-md border-solid border-1 bg-stone-100 m-2 mt-4 p-1"> 
                <div class="">
                    <h1 className="ml-20 m-2 text-5xl">{projContent[option].title}</h1>
                    <img src={projContent[option].image}/>
                </div> 
                <div class="w-fit">
                    {projContent[option].text}
                </div>
                <div class="block ml-48 list-none text-xl w-1/3">
                    <li className="p-4 hover:shadow mb-4"><a href={projContent[option].site} target="_blank">Site</a></li>
                    <li className="p-4 hover:shadow mb-4"><a href={projContent[option].github} target="_blank">Github</a></li>
                </div>
            </div>
          </Container>
      );
  }

export default Project;