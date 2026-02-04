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
              className="px-10 py-4 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-all duration-300 uppercase tracking-wider text-sm"
            >
              Download CV
            </button>
          </div>
        </div>        
      </div>
    </section>
  )
}

export default Hero