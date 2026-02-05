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

  // Separate projects by type
  const designProjects = projectsData.filter(project => project.type === 'design')
  const devProjects = projectsData.filter(project => project.type === 'development')

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

          {/* Design Projects Section */}
          <div className="mb-12 flex items-center gap-4">
            <h2 className="text-2xl md:text-3xl font-normal text-gray-900">
              UX/UI <span className="text-purple-600">Project</span>
            </h2>
            <div className="flex-1 h-px bg-purple-300"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20">
            {designProjects.map((project, index) => (
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
                  type={project.type}
                  githubUrl={project.githubUrl}
                  onClick={() => handleProjectClick(project)}
                />
              </div>
            ))}
          </div>

          {/* Development Projects Section */}
          <div className="mb-12 flex items-center gap-4">
            <h2 className="text-2xl md:text-3xl font-normal text-gray-900">
              <span className="text-purple-600">Development Project</span>
            </h2>
            <div className="flex-1 h-px bg-purple-300"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {devProjects.map((project, index) => (
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
                  type={project.type}
                  githubUrl={project.githubUrl}
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
