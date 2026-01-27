import React from 'react'
import transcriptPDF from '../assets/Prarinporn_Chookaew_Transcript.pdf'
import graduationPDF from '../assets/Prarinporn_Chookaew_ graduation.pdf'
import psuLogo from '../assets/psuLogo.png'

// Import Icons เพิ่มเติมเพื่อความสวยงาม
import { FaUniversity, FaGraduationCap, FaMapMarkerAlt, FaFileDownload } from "react-icons/fa";

function Education() {
  const handleDownload = (fileUrl, fileName) => {
    const link = document.createElement('a')
    link.href = fileUrl
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-gray-50/50 relative overflow-hidden">
      {/* Background Decoration (Optional) - วงกลมจางๆ ฉากหลัง */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-20 right-0 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-4 font-poppins">
            Education
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full opacity-80"></div>
        </div>
        
        <div className="flex justify-center animate-fadeInUp">
          {/* Education Card */}
          <div className="group relative w-full max-w-5xl bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
            
            {/* Top Gradient Accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"></div>

            <div className="p-8 md:p-12">
              <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
                
                {/* Left Side: Logo Area */}
                <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:block">
                  <div className="relative group-hover:scale-105 transition-transform duration-500">
                    {/* Glow Effect behind logo */}
                    <div className="absolute inset-0 bg-purple-100 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative w-36 h-36 md:w-44 md:h-44 flex items-center justify-center p-6 bg-white rounded-full shadow-lg border border-gray-50">
                      <img src={psuLogo} alt="PSU Logo" className="w-full h-full object-contain" />
                    </div>
                  </div>
                </div>
                
                {/* Right Side: Content Area */}
                <div className="flex-1 w-full">
                  
                  {/* Title Section */}
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 font-poppins">
                        Bachelor of Science
                      </h3>
                      <div className="flex items-center gap-2 text-xl font-medium text-purple-600">
                        <FaGraduationCap className="text-xl" />
                        <span>Computer Science</span>
                      </div>
                    </div>

                    {/* Year Badge */}
                    <div className="flex-shrink-0 self-start">
                      <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-purple-50 text-purple-700 font-bold text-sm border border-purple-100 shadow-sm">
                        <span>📅</span> 2018 - 2022
                      </span>
                    </div>
                  </div>
                  
                  {/* University Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-8 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-2 bg-white rounded-lg shadow-sm text-purple-500">
                        <FaUniversity />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">University</p>
                        <p className="text-gray-800 font-medium">Prince of Songkla University (PSU)</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-2 bg-white rounded-lg shadow-sm text-pink-500">
                        <FaMapMarkerAlt />
                      </div>
                      <div>
                         <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Faculty</p>
                         <p className="text-gray-800 font-medium">Faculty of Science</p>
                      </div>
                    </div>

                    {/* GPA Section - Highlighted */}
                    <div className="md:col-span-2 pt-2 border-t border-gray-200 mt-2">
                       <div className="flex items-center justify-between">
                          <p className="text-gray-600 font-medium">Cumulative GPA</p>
                          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                            3.31
                          </span>
                       </div>
                    </div>

                  </div>
                  
                  {/* Buttons Section */}
                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={() => handleDownload(transcriptPDF, 'Prarinporn_Chookaew_Transcript.pdf')}
                      className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl transition-all duration-300 hover:bg-purple-600 hover:shadow-lg hover:-translate-y-1 font-medium group/btn"
                    >
                      <FaFileDownload className="group-hover/btn:animate-bounce" />
                      <span>Transcript</span>
                    </button>
                    
                    <button
                      onClick={() => handleDownload(graduationPDF, 'Prarinporn_Chookaew_Graduation.pdf')}
                      className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 border border-gray-200 rounded-xl transition-all duration-300 hover:border-purple-500 hover:text-purple-600 hover:shadow-lg hover:-translate-y-1 font-medium"
                    >
                      <FaGraduationCap />
                      <span>Certificate</span>
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education