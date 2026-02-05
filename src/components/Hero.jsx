import cvFile from '../assets/Prarinporn_Chookaew_CV.pdf'

function Hero() {
  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = cvFile
    link.download = 'Prarinporn_Chookaew_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="relative flex flex-col items-center justify-center px-4 md:px-8 pt-0 md:pt-4 pb-16 overflow-hidden bg-white" style={{ minHeight: '70vh' }}>

      {/* Main Content - Center Aligned */}
      <div className="relative z-10 max-w-5xl mx-auto w-full text-center">
        
        {/* Text Content */}
        <div className="flex flex-col items-center">
          {/* Small Intro Text */}
          <p className="text-lg md:text-4xl text-gray-500 mb-6 animate-fadeInUp">
            Hey, I'm <span className="font-semibold text-purple-600">Dear</span>
          </p>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-semibold mb-10 animate-fadeInUp animate-delay-200">
            <div className="mb-4">I enjoy <span className="text-purple-600">designing</span> and</div>
            <div><span className="text-purple-600">creating</span> for the web.</div>
          </h1>

          {/* Action Button */}
          <div className="animate-fadeInUp animate-delay-300">
            <button 
              onClick={handleDownloadCV}
              className="px-10 py-4 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-all duration-300  tracking-wider text-base flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </button>
          </div>
        </div>        
      </div>
    </section>
  )
}

export default Hero