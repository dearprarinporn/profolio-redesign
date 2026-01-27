import { useState, useRef, useEffect } from 'react'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { projectsData } from '../data/projectsData'
import projectBackground from '../assets/projectBlackground.jpg'

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0) // เริ่มที่การ์ดแรก
  const [savedScrollIndex, setSavedScrollIndex] = useState(0) // เก็บ index ก่อนเปิด modal
  const scrollContainerRef = useRef(null)

  // คำนวณ max index ที่สามารถเลื่อนได้
  const maxScrollIndex = Math.max(0, projectsData.length - 4)

  // Handle wheel scroll for horizontal scrolling
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleWheel = (e) => {
      // ถ้า scroll แนวนอน (shift + wheel หรือ touchpad horizontal)
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault()
        
        // คำนวณ scroll amount เป็น percentage ของ card width
        const cardWidth = 25 // 25% per card
        const scrollAmount = (e.deltaX * 5.6) / 100 // เพิ่มความไวจาก 0.3 เป็น 0.8
        
        // อัปเดต index ด้วยการเลื่อนแบบ smooth
        setCurrentIndex(prev => {
          const newIndex = prev + (scrollAmount / cardWidth)
          // จำกัด index ไม่ให้เกิน maxScrollIndex
          return Math.max(0, Math.min(newIndex, maxScrollIndex))
        })
      }
    }

    container.addEventListener('wheel', handleWheel, { passive: false })
    return () => container.removeEventListener('wheel', handleWheel)
  }, [maxScrollIndex])

  const handleProjectClick = (project) => {
    const projectIndex = projectsData.findIndex(p => p.id === project.id)
    setSavedScrollIndex(currentIndex) // เก็บ index ปัจจุบันก่อนเปิด modal
    setSelectedProject(project)
    setIsModalOpen(true)
    // ไม่เปลี่ยน currentIndex ที่นี่
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => {
      setSelectedProject(null)
      setCurrentIndex(savedScrollIndex) // คืนค่า index กลับ
    }, 300)
  }

  const handleNextProject = () => {
    const currentProjectIndex = projectsData.findIndex(p => p.id === selectedProject.id)
    const nextIndex = (currentProjectIndex + 1) % projectsData.length
    setSelectedProject(projectsData[nextIndex])
  }

  const handlePrevProject = () => {
    const currentProjectIndex = projectsData.findIndex(p => p.id === selectedProject.id)
    const prevIndex = currentProjectIndex === 0 ? projectsData.length - 1 : currentProjectIndex - 1
    setSelectedProject(projectsData[prevIndex])
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      return prev >= maxScrollIndex ? maxScrollIndex : prev + 1
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => prev <= 0 ? 0 : prev - 1)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <>
      <section id="projects" className="relative py-12 md:py-20 overflow-hidden -mt-8 md:-mt-12 rounded-3xl md:rounded-[3rem]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 rounded-3xl md:rounded-[3rem]">
          <img 
            src={projectBackground} 
            alt="Project Background" 
            className="w-full h-full object-cover rounded-3xl md:rounded-[3rem]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/60 to-[#6D28D9]/70 rounded-3xl md:rounded-[3rem]"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="mb-8 md:mb-12 animate-fadeInUp px-4 md:px-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white">Project</h2>
          </div>

          {/* Slider Container */}
          <div className="relative">
            {/* Cards Container with Navigation Overlay */}
            <div 
              ref={scrollContainerRef}
              className="overflow-hidden relative px-4 md:px-8"
              style={{ scrollBehavior: 'smooth' }}
            >
              {/* Previous Button - Left Overlay */}
              {currentIndex > 0 && (
                <button
                  onClick={prevSlide}
                  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Previous"
                >
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}

              {/* Next Button - Right Overlay */}
              {currentIndex < maxScrollIndex && (
                <button
                  onClick={nextSlide}
                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Next"
                >
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}

              <div className="relative flex items-center min-h-[400px]">
                <div 
                  className="flex gap-4 md:gap-6 pl-4 md:pl-12"
                  style={{
                    transform: `translateX(-${currentIndex * 25}%)`,
                    transition: 'transform 0.6s cubic-bezier(0.22, 0.61, 0.36, 1)',
                  }}
                >
                  {projectsData.map((project) => {
                    return (
                      <div 
                        key={project.id}
                        className="flex-shrink-0"
                        style={{
                          width: 'calc(23% - 16px)',
                          minWidth: '300px',
                        }}
                      >
                        <ProjectCard 
                          title={project.title} 
                          year={project.year}
                          image={project.image}
                          onClick={() => handleProjectClick(project)}
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Dots Indicator - Below Cards */}
            <div className="flex justify-center gap-2.5 mt-10">
              {Array.from({ length: maxScrollIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`rounded-full transition-all duration-500 ease-in-out ${
                    index === currentIndex 
                      ? 'bg-white w-10 h-3' 
                      : 'bg-white/40 hover:bg-white/60 w-3 h-3'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
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

export default Projects
