import { experienceData } from '../data/experienceData'
import certificateOfEmployment from '../assets/Prarinporn_Chookaew_ Certificate of Employment.pdf'

function Experience() {
  const handleDownload = (fileUrl, fileName) => {
    const link = document.createElement('a')
    link.href = fileUrl
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="experience" className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-white to-purple-50/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-12 md:mb-16 text-center animate-fadeInUp font-poppins">
          My <span className="text-purple-600">Work Experience</span>
        </h2>
        
        <div className="space-y-5 md:space-y-6">
          {experienceData.map((exp, index) => (
            <div 
              key={exp.id} 
              className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-3xl p-6 md:p-8 hover:shadow-2xl hover:shadow-purple-100/50 hover:border-purple-200 hover:-translate-y-1 transition-all duration-300 animate-fadeInUp group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-gray-50 to-purple-50/30 rounded-2xl flex items-center justify-center p-4 border border-gray-100 group-hover:border-purple-300 group-hover:shadow-lg transition-all duration-300">
                    {exp.image ? (
                      <img src={exp.image} alt={`${exp.company} logo`} className="w-full h-full object-contain" />
                    ) : (
                      <span className="text-3xl md:text-4xl">💼</span>
                    )}
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 mb-5">
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                        {exp.position}
                      </h3>
                      <p className="text-base md:text-lg font-semibold text-purple-600">
                        {exp.company}
                      </p>
                    </div>
                    
                    {/* Period Badge */}
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-purple-50 to-purple-100/50 text-purple-700 rounded-full text-sm font-medium border border-purple-200/50 shadow-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="whitespace-nowrap">{exp.period}</span>
                        {exp.duration && <span className="text-purple-500">• {exp.duration}</span>}
                      </div>
                    </div>
                  </div>

                  {/* Skills Tags */}
                  {exp.tags && (
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, i) => (
                        <span key={i} className="px-4 py-1.5 bg-gray-50/80 text-gray-600 rounded-xl text-xs md:text-sm font-medium border border-gray-200/50 hover:bg-purple-50 hover:text-purple-700 hover:border-purple-200 hover:shadow-sm transition-all duration-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Download Button */}
        <div className="flex justify-center mt-16 animate-fadeInUp">
          <button
            onClick={() => handleDownload(certificateOfEmployment, 'Prarinporn_Chookaew_Certificates.pdf')}
            className="flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-gray-900 to-gray-800 hover:from-purple-600 hover:to-purple-700 text-white rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-1 font-medium text-sm md:text-base group"
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Download Certificates</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Experience
