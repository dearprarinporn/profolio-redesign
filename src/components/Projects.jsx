import { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { projectsData } from '../data/projectsData'

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showAllPage, setShowAllPage] = useState(false)

  // แสดงแค่ 3 โปรเจกต์แรก ในหน้าหลัก
  const displayedProjects = showAllPage ? projectsData : projectsData.slice(0, 3)

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

  // ถ้าเปิดหน้า View All
  if (showAllPage) {
    return (
      <>
        <section className="relative min-h-screen py-12 md:py-20 px-4 md:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            {/* Header with Back Button */}
            <div className="mb-12 md:mb-16 flex items-center justify-between">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900">
                All Projects
              </h2>
              <button
                onClick={() => setShowAllPage(false)}
                className="px-6 py-2 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
              >
                ← Back
              </button>
            </div>

            {/* All Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {projectsData.map((project) => (
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

  return (
    <>
      <section id="projects" className="relative py-12 md:py-20 px-4 md:px-8 bg-gray-50">
        {/* Container with max-width */}
        <div className="max-w-6xl mx-auto">
          {/* Header with line */}
          <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-4 md:gap-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 whitespace-nowrap">
                Here are a few of my <span className="text-purple-600">favorite projects</span>.
              </h2>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600"></div>
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
          {projectsData.length > 3 && (
            <div className="flex justify-center">
              <button
                onClick={() => setShowAllPage(true)}
                className="group relative px-10 py-4 bg-gray-900 text-white rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] active:scale-95"
              >
                <span className="relative z-10">View All Projects</span>
                <div className="absolute inset-0 bg-cyan-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
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
