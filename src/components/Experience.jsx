import { useState } from 'react'
import { experienceData } from '../data/experienceData'
import certificateOfEmployment from '../assets/Prarinporn_Chookaew_ Certificate of Employment.pdf'
import ProjectModal from './ProjectModal'

function Experience() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleDownload = (fileUrl, fileName) => {
    const link = document.createElement('a')
    link.href = fileUrl
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleProjectClick = (exp) => {
    if (exp.projectData) {
      setSelectedProject(exp.projectData)
      setIsModalOpen(true)
    }
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => {
      setSelectedProject(null)
    }, 300)
  }

  return (
    <section id="experience" className="py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-3">
            My <span className="text-purple-600">Work Experience</span>
          </h2>
          <p className="text-gray-500 font-light text-sm md:text-base">
            A journey through my professional career path
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-16">
          {experienceData.filter(exp => !exp.isFreelance).map((exp, index) => (
            <div
              key={exp.id}
              className="relative animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card with integrated logo at top */}
              <div className="relative bg-white border border-gray-100/80 rounded-[2rem] shadow-[0_0_20px_rgba(0,0,0,0.08)] hover:shadow-[0_0_25px_rgba(0,0,0,0.12)] hover:border-purple-100 transition-all duration-300 group mt-12">
                {/* Logo integrated into card - half outside */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  {/* Timeline Badge */}
                  {exp.status === 'current' && (
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10 animate-pulse">
                      Latest
                    </div>
                  )}
                  <div className="w-24 h-24 bg-white rounded-3xl p-4 border border-gray-100 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    {exp.image ? (
                      <img src={exp.image} alt={`${exp.company} logo`} className="w-full h-full object-contain rounded-2xl" />
                    ) : (
                      <span className="text-4xl flex items-center justify-center h-full">💼</span>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-col h-full relative z-10 p-6 pt-20 pb-6 min-h-[420px]">
                  {/* Position Title - Centered */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300 leading-tight mb-2 text-center">
                    {exp.position}
                  </h3>

                  {/* Type Badge - Centered */}
                  <div className="mb-6 text-center">
                    {exp.type === 'intern' ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold border border-blue-100">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        Internship
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-purple-50 to-purple-100 text-purple-700 rounded-full text-xs font-semibold border border-purple-200">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Full-time
                      </span>
                    )}
                  </div>

                  {/* Spacer to push content down */}
                  <div className="flex-grow"></div>

                  {/* Company Name - Left Aligned */}
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-4 h-4 text-purple-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="font-medium text-purple-600 text-sm">{exp.company}</span>
                  </div>

                  {/* Period - Left Aligned */}
                  <div className="flex items-center gap-2 mb-6">
                    <svg className="w-4 h-4 text-purple-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium text-gray-600 text-sm">{exp.period}</span>
                  </div>

                  {/* Tags */}
                  {exp.tags && (
                    <div className="mt-auto w-full pt-6 border-t border-gray-100">
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, i) => (
                          <span key={i} className="px-3 py-1.5 bg-gray-50 text-gray-500 rounded-lg text-xs font-medium border border-gray-100/50 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-100/50 transition-all duration-300 group-hover:bg-white/50 group-hover:shadow-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* View Project Button - Bottom Right */}
                  {exp.projectData && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleProjectClick(exp)
                      }}
                      className="absolute bottom-6 right-6 w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center -rotate-45 hover:rotate-0 hover:bg-purple-500 hover:border-purple-500 transition-all duration-500 group/btn"
                    >
                      <svg className="w-5 h-5 text-gray-400 group-hover/btn:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Freelance Card - Horizontal (from data) */}
        {experienceData.filter(exp => exp.isFreelance).map((exp) => (
          <div key={exp.id} className="mt-8 animate-fadeInUp flex justify-center">
            <div className="bg-white border border-gray-100/80 rounded-[2rem] p-6 md:p-8 shadow-[0_0_20px_rgba(0,0,0,0.08)] hover:shadow-[0_0_25px_rgba(0,0,0,0.12)] hover:border-purple-100 transition-all duration-300 max-w-4xl w-full">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                
                {/* Logo */}
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-3xl p-4 border border-gray-100 shadow-lg flex-shrink-0 flex items-center justify-center">
                  <span className="text-4xl">💼</span>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center gap-3 mb-3">
                    <h3 className="text-1xl md:text-2xl font-bold text-gray-900">
                      {exp.position}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 rounded-full text-xs font-semibold border border-green-200 mx-auto md:mx-0">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Available
                    </span>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center gap-3 text-sm text-gray-600 mb-4">
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <span className="hidden md:inline text-gray-400">•</span>
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="font-medium">{exp.period}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    {exp.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1.5 bg-gray-50 text-gray-500 rounded-lg text-xs font-medium border border-gray-100/50 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-100/50 transition-all duration-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Project Button - Right Side */}
                {exp.projectData && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleProjectClick(exp)
                    }}
                    className="flex-shrink-0 w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center -rotate-45 hover:rotate-0 hover:bg-purple-500 hover:border-purple-500 transition-all duration-500 group/btn"
                  >
                    <svg className="w-5 h-5 text-gray-400 group-hover/btn:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                )}

              </div>
            </div>
          </div>
        ))}

        {/* Download Button */}
        <div className="flex justify-center mt-16 animate-fadeInUp">
          <button
            onClick={() => handleDownload(certificateOfEmployment, 'Prarinporn_Chookaew_Certificates.pdf')}
            className="px-10 py-4 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-all duration-300 tracking-wider text-base flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Certificates
          </button>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </section>
  )
}

export default Experience
