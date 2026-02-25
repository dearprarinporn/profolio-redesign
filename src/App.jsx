import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'
import Education from './components/Education'
import ProjectsPage from './pages/ProjectsPage'

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={
          <div className="bg-white text-gray-900">
            <Navbar />
            <Hero />
            <Projects />
            <Profile />
            <Experience />
            <Skills />
            <Footer />
          </div>
        } />
        
        {/* Projects Page */}
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
  )
}

export default App
