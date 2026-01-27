import { useEffect, useRef } from 'react'
import LazyImage from './LazyImage'



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
        className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 backdrop-blur-sm p-2 md:p-4 pt-16 md:pt-20"
      >

      {/* Modal Content */}
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-7xl bg-white rounded-2xl md:rounded-3xl shadow-2xl mb-10 md:mb-20 animate-fadeInUp"
      >
        {/* Top Right Buttons */}
        <div className="absolute top-3 right-3 md:top-6 md:right-6 z-50 flex items-center gap-2 md:gap-3">
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
                <LazyImage
                  src={img}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-auto"
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
