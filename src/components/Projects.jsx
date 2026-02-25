import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Link } from 'react-router-dom'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { projectsData } from '../data/projectsData'

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 })
  const [projectsRef, projectsVisible] = useScrollAnimation({ threshold: 0.1 })

  // แสดงแค่ 3 โปรเจกต์แรก ในหน้าหลัก
  const displayedProjects = projectsData.slice(0, 3)

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
          <div ref={headerRef} className={`mb-12 md:mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-4 md:gap-6">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-900">
                Here are a few of my <span className="text-purple-600">favorite projects</span>.
              </h2>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600"></div>
            </div>
          </div>

          {/* Projects Grid */}
          <div ref={projectsRef} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 transition-all duration-1000 ${projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {displayedProjects.map((project) => (
              <div key={project.id} className="animate-fadeInUp">
                <ProjectCard 
                  title={project.title} 
                  year={project.year}
                  image={project.image}
                  tags={project.tags}
                  type={project.type}
                  status={project.status}
                  githubUrl={project.githubUrl}
                  onClick={() => handleProjectClick(project)}
                />
              </div>
            ))}
          </div>

          {/* View All Button */}
          {projectsData.length > 3 && (
            <div className="flex justify-center">
              <Link
                to="/projects"
                className="group px-10 py-4 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-full font-semibold transition-all duration-300 tracking-wider text-base inline-flex items-center gap-3 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:scale-105 animate-pulse-glow"
              >
                View All Projects
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </Link>
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
