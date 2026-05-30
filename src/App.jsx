import { Route, Routes } from 'react-router-dom'
import './App.css'
import AllProjects from './pages/AllProjects'
import Home from "./pages/Home"
import InformationProject from './pages/InformationProject'

function App() {
  
  

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="projects" element={<AllProjects />} />
      <Route path="project/:id" element={<InformationProject />} />
    </Routes>
  )
}

export default App
