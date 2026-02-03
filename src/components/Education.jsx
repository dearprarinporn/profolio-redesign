import React from 'react'
import transcriptPDF from '../assets/Prarinporn_Chookaew_Transcript.pdf'
import graduationPDF from '../assets/Prarinporn_Chookaew_ graduation.pdf'
import psuLogo from '../assets/psuLogo.png'
import { FaGraduationCap, FaFileDownload, FaExternalLinkAlt } from "react-icons/fa";

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
    <section className="py-12 md:py-20 px-4 md:px-8 bg-white relative overflow-hidden">
      {/* Background Grid แบบเบาบาง */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '24px 24px' }}>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Minimal Header */}
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl font-bold tracking-tighter uppercase italic text-gray-900">Education</h2>
          <div className="flex-1 h-[1px] bg-gray-100"></div>
          <div className="flex gap-1">
             <div className="w-2 h-2 rounded-full bg-purple-400"></div>
             <div className="w-2 h-2 rounded-full bg-blue-400"></div>
          </div>
        </div>

        {/* Compact Education Card */}
        <div className="relative group">
          {/* Bounding Box Effect */}
          <div className="absolute -inset-2 border border-dashed border-purple-300 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative bg-white border border-gray-100 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              
              {/* Logo Area - Small & Clean */}
              <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 bg-gray-50 rounded-xl p-3 border border-gray-50 group-hover:rotate-3 transition-transform">
                <img src={psuLogo} alt="PSU" className="w-full h-full object-contain" />
              </div>

              {/* Info Area */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-gray-900">Bachelor of Science</h3>
                  {/* Fresh Grad Badges */}
                  <div className="flex justify-center md:justify-start gap-2">
                    <span className="bg-purple-50 text-purple-600 text-[10px] font-bold px-2 py-0.5 rounded border border-purple-100 uppercase tracking-wider">
                      Newly Graduated
                    </span>
                    <span className="bg-green-50 text-green-600 text-[10px] font-bold px-2 py-0.5 rounded border border-green-100 uppercase tracking-wider animate-pulse">
                      Open to Work
                    </span>
                  </div>
                </div>

                <p className="text-purple-600 font-medium flex items-center justify-center md:justify-start gap-2 mb-4">
                  <FaGraduationCap /> Computer Science
                </p>

                <div className="flex flex-wrap justify-center md:justify-start items-center gap-y-2 gap-x-6 text-sm text-gray-500">
                  <span className="flex items-center gap-1.5 font-medium">
                    📍 Prince of Songkla University
                  </span>
                  <span className="flex items-center gap-1.5 font-medium text-gray-400">
                    🗓️ 2018 - 2022
                  </span>
                </div>
              </div>

              {/* Actions Area - Minimal Buttons */}
              <div className="flex md:flex-col gap-2 w-full md:w-auto border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6">
                <button
                  onClick={() => handleDownload(transcriptPDF, 'Transcript.pdf')}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-widest bg-gray-900 text-white rounded-lg hover:bg-purple-600 transition-colors"
                >
                  <FaFileDownload size={12} /> Transcript
                </button>
                <button
                  onClick={() => handleDownload(graduationPDF, 'Graduation.pdf')}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-widest border border-gray-200 text-gray-600 rounded-lg hover:border-purple-400 hover:text-purple-600 transition-all"
                >
                  <FaExternalLinkAlt size={10} /> Certificate
                </button>
              </div>

            </div>
          </div>

          {/* Figma-style small anchor point */}
          <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border border-purple-500 opacity-0 group-hover:opacity-100"></div>
        </div>
      </div>
    </section>
  )
}

export default Education