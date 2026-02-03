import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'
import Education from './components/Education'

function App() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <ContactCTA />
      <Footer />
    </div>
  )
}

export default App
