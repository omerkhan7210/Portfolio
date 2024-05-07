import { Route, Routes } from "react-router-dom"
import Header from "src/GlobalComponents/Header"
import MainHome from "src/Pages/HomePage/MainHome"
import MainAbout from "./Pages/AboutPage/MainAbout"
import MainProject from "./Pages/ProjectsPage/MainProject"
import MainContact from "./Pages/ContactPage/MainContact"
import MainBlog from "./Pages/BlogPage/MainBlog"


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<MainHome/>}/>
      <Route path="/about" element={<MainAbout/>}/>
      <Route path="/projects" element={<MainProject/>}/>
      <Route path="/blogs" element={<MainBlog/>}/>
      <Route path="/contact" element={<MainContact/>}/>
    </Routes>
    </>
  )
}

export default App
