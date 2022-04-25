import { Routes, Route } from "react-router-dom"
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Project from './pages/Project'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { projContent } from './content/projectContent'

function App() {

      return (
          <div className="h-screen overflow-hidden bg-stone-100">
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
              {
                projContent.map((content, i) => {
                  return (
                    <Route key={i} path={content.path} element={<Project option={i} />} />
                  )
                })
              }
            </Routes>
          </div>
      );
  }

export default App;
