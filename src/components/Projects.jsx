import { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { projectsData } from '../data/projectsData'

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showAll, setShowAll] = useState(false)

  // แสดงแค่ 3 โปรเจกต์แรก หรือทั้งหมดถ้ากด View All
  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 3)

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
    <>
      <section id="projects" className="relative py-12 md:py-20 px-4 md:px-8 bg-white">
        {/* Container with max-width */}
        <div className="max-w-6xl mx-auto">
          {/* Header with line */}
          <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-4 md:gap-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 whitespace-nowrap">
                Here are a few of my favorite projects.
              </h2>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-cyan-400 to-cyan-600"></div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {displayedProjects.map((project) => (
              <div key={project.id} className="animate-fadeInUp">
                <ProjectCard 
                  title={project.title} 
                  year={project.year}
                  image={project.image}
                  onClick={() => handleProjectClick(project)}
                />
              </div>
            ))}
          </div>

          {/* View All Button */}
          {!showAll && projectsData.length > 3 && (
            <div className="flex justify-center">
              <button
                onClick={() => setShowAll(true)}
                className="px-12 py-4 border-2 border-cyan-500 text-cyan-600 rounded-full font-medium hover:bg-cyan-50 transition-all duration-300 hover:scale-105"
              >
                View All
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  )
}

export default Projects
