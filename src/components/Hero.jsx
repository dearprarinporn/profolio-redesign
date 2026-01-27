import cvFile from '../assets/Prarinporn_Chookaew_CV.pdf'
import { 
  FaPencilRuler, FaPalette, FaLightbulb, 
  FaUserCheck, FaMagic, FaCode 
} from 'react-icons/fa'

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
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-start px-4 md:px-8 pt-32 md:pt-40 pb-12 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      
      {/* Decorative Icons - Floating around */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Left */}
        <FaPencilRuler className="absolute top-20 left-10 md:left-20 text-purple-300 text-4xl md:text-6xl opacity-40 animate-float" style={{ animationDelay: '0s' }} />
        <FaMagic className="absolute top-32 left-32 md:left-48 text-pink-300 text-3xl md:text-5xl opacity-30 animate-float" style={{ animationDelay: '0.5s' }} />
        
        {/* Top Right */}
        <FaPalette className="absolute top-24 right-16 md:right-32 text-blue-300 text-5xl md:text-7xl opacity-40 animate-float" style={{ animationDelay: '1s' }} />
        <FaLightbulb className="absolute top-40 right-40 md:right-60 text-yellow-300 text-4xl md:text-6xl opacity-35 animate-float" style={{ animationDelay: '1.5s' }} />
        
        {/* Bottom Left */}
        <FaUserCheck className="absolute bottom-32 left-20 md:left-40 text-green-300 text-4xl md:text-6xl opacity-40 animate-float" style={{ animationDelay: '2s' }} />
        <FaCode className="absolute bottom-20 left-48 md:left-72 text-indigo-300 text-3xl md:text-5xl opacity-30 animate-float" style={{ animationDelay: '2.5s' }} />
        
        {/* Bottom Right */}
        <FaPencilRuler className="absolute bottom-28 right-24 md:right-48 text-purple-300 text-5xl md:text-7xl opacity-35 animate-float" style={{ animationDelay: '3s' }} />
        <FaMagic className="absolute bottom-40 right-12 md:right-24 text-pink-300 text-4xl md:text-6xl opacity-40 animate-float" style={{ animationDelay: '3.5s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Small Intro Text */}
        <p className="text-ปส md:text-3xl text-gray-600 mb-4 animate-fadeInUp">
          Hey, I'm <span className="font-semibold text-purple-600">Dear</span>
        </p>

        {/* Main Headline */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 animate-fadeInUp animate-delay-200">
          <div className="mb-4 md:mb-5">
            I enjoy <span className="text-purple-600">designing</span> and
          </div>
          <div>
            <span className="text-purple-600">creating</span> for the web.
          </div>
        </h1>

        
        

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeInUp animate-delay-500">
          
          <button 
            onClick={handleDownloadCV}
            className="border-2 border-gray-300 text-gray-700 px-8 md:px-10 py-3 md:py-4 rounded-full text-sm md:text-base font-semibold hover:border-purple-600 hover:text-purple-600 transition-all duration-300 hover:scale-105 transform uppercase tracking-wider"
          >
            Download CV
          </button>
        </div>
      </div>

      {/* Decorative Text Labels - Like "CODER" and "BRAYDEN" in the example */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">
        <div className="absolute bottom-32 left-10 text-6xl font-bold text-purple-200 opacity-20 rotate-[-15deg] animate-float" style={{ animationDelay: '1s' }}>
          DESIGNER
        </div>
        <div className="absolute bottom-40 right-16 text-7xl font-bold text-pink-200 opacity-20 rotate-[10deg] animate-float" style={{ animationDelay: '2s' }}>
          CREATIVE
        </div>
      </div>
    </section>
  )
}

export default Hero
