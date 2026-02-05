import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'
import Footer from '../components/Footer'
import { projectsData } from '../data/projectsData'

function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  const handleProjectClick = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => {
      setSelectedProject(null)
    }, 300)
  }

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Navbar />
      
      <section className="relative min-h-screen py-24 md:py-32 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12 md:mb-16 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-4">
              Projects
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              I've built cool apps and websites using anything from HTML to React. 
              Here are some of my favorite projects over the course of my journey.
            </p>
            <Link 
              to="/"
              className="inline-block px-6 py-2 text-purple-600 hover:text-purple-700 font-medium transition-colors"
            >
              ← Back to Home
            </Link>
          </div>

          {/* All Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projectsData.map((project, index) => (
              <div 
                key={project.id} 
                className="animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard 
                  title={project.title} 
                  year={project.year}
                  image={project.image}
                  tags={project.tags}
                  onClick={() => handleProjectClick(project)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Project Modal */}
      <ProjectModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </div>
  )
}

export default ProjectsPage
