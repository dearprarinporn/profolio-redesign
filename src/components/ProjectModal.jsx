import { useEffect, useRef } from 'react'



function ProjectModal({ isOpen, onClose, project }) {
  const modalContentRef = useRef(null)
  const designSystemRef = useRef(null)

  // Find design system image index
  const designSystemIndex = project?.additionalImages?.findIndex(img => 
    img.toLowerCase().includes('designsystem')
  ) ?? -1

  const hasDesignSystem = designSystemIndex !== -1

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    // Scroll to top when project changes
    if (modalContentRef.current) {
      modalContentRef.current.scrollTo(0, 0)
    }
  }, [project])

  const scrollToTop = () => {
    if (modalContentRef.current) {
      modalContentRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  const scrollToDesignSystem = () => {
    if (designSystemRef.current && modalContentRef.current) {
      const elementPosition = designSystemRef.current.offsetTop
      const offsetPosition = elementPosition - 100 // offset for better view
      
      modalContentRef.current.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  if (!isOpen || !project) return null

  return (
    <>
      {/* Floating Scroll to Top Button - Fixed to viewport, outside modal */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[60] w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-[#8B5CF6] hover:bg-purple-700 text-white rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
      >
        <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
      </button>

      <div 
        ref={modalContentRef}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/70 p-2 md:p-4 pt-16 md:pt-20"
      >

      {/* Modal Content */}
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-7xl bg-white rounded-2xl md:rounded-3xl shadow-2xl mb-10 md:mb-20 animate-fadeInUp"
      >
        {/* Top Right Buttons */}
        <div className="absolute top-3 right-3 md:top-6 md:right-6 z-50 flex items-center gap-2 md:gap-3">
          {/* GitHub Button - Only show if project has GitHub URL */}
          {project.githubUrl && (
            <button
              onClick={() => window.open(project.githubUrl, '_blank')}
              className="px-4 md:px-6 py-2 md:py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-full transition-all duration-300 hover:scale-105 shadow-lg font-medium text-sm md:text-base flex items-center gap-2"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span className="hidden md:inline">GitHub</span>
            </button>
          )}
          
          {/* Design System Button - Only show if project has design system */}
          {hasDesignSystem && (
            <button
              onClick={scrollToDesignSystem}
              className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full transition-all duration-300 hover:scale-105 shadow-lg font-medium text-sm md:text-base"
            >
              Design System
            </button>
          )}
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white hover:bg-gray-100 rounded-full transition-all duration-300 hover:scale-110 shadow-lg border border-gray-200"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        {/* Content - Only Screenshots */}
        <div className="overflow-hidden rounded-2xl md:rounded-3xl">
          <div>
            {project.additionalImages && project.additionalImages.map((img, index) => (
              <div 
                key={index}
                ref={index === designSystemIndex ? designSystemRef : null}
              >
                <img
                  src={img}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-auto"
                  loading="eager"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default ProjectModal
