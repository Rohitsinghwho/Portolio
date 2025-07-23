
import Wrapper from "./Pages/Wrapper/Wrapper"
import { BrowserRouter } from "react-router-dom"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import Home from "./Pages/Home/Home"
import ProjectPage from "./Pages/ProjectPage/ProjectPage"

const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wrapper/>}>
          <Route index element={<Home/>} />
           <Route path="projects" element={<ProjectPage/>} />
         {/* <Route path="contact" element={<ContactPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App