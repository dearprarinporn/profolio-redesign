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
    <section id="experience" className="py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-12 md:mb-20 text-center animate-fadeInUp font-poppins">
          My <span className="text-purple-600">Work Experience</span>
        </h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-12 top-8 bottom-8 w-[2px] bg-purple-100"></div>
          
          <div className="space-y-12 md:space-y-16">
            {experienceData.map((exp, index) => (
              <div 
                key={exp.id} 
                className="relative pl-24 md:pl-32 animate-fadeInUp group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline Dot with Logo */}
                <div className="absolute left-0 md:left-2 top-0 w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl flex items-center justify-center shadow-md p-2 md:p-3 border border-gray-100 z-10 transition-transform duration-300 group-hover:scale-110 group-hover:border-purple-200">
                  {exp.image ? (
                    <img src={exp.image} alt={`${exp.company} logo`} className="w-full h-full object-contain" />
                  ) : (
                    <span className="text-2xl md:text-3xl">💼</span>
                  )}
                </div>
                
                {/* Content */}
                <div>
                  {/* Header: Position & Company & Date */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-8 mb-4">
                    <div className="max-w-[600px]">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                        {exp.position}
                      </h3>
                      <p className="text-lg font-semibold text-purple-600">
                        {exp.company}
                      </p>
                    </div>
                    
                    {/* Period Badge */}
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-50 text-purple-700 rounded-full text-sm font-medium border border-purple-100 whitespace-nowrap">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {exp.period}
                        {exp.duration && <span className="text-purple-400 ml-1">• {exp.duration}</span>}
                      </div>
                    </div>
                  </div>
                  
                  {/* Description as Bullet Points */}
                  <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-600 md:text-base leading-relaxed marker:text-purple-400">
                    {/* เช็คว่าเป็น Array หรือไม่ เพื่อรองรับข้อมูลเก่าที่เป็น string */}
                    {Array.isArray(exp.description) ? (
                      exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))
                    ) : (
                      <li>{exp.description}</li>
                    )}
                  </ul>

                  {/* Skills Tags (New!) */}
                  {exp.tags && (
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-50 text-gray-500 rounded-lg text-xs font-medium border border-gray-100 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-100 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-16 animate-fadeInUp">
          {/* Main Button: Certificates */}
          <button
            onClick={() => handleDownload(certificateOfEmployment, 'Prarinporn_Chookaew_Certificates.pdf')}
            className="flex items-center gap-3 px-8 py-3 bg-gray-900 hover:bg-purple-600 text-white rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 font-medium text-sm md:text-base"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
