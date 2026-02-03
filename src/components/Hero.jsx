import cvFile from '../assets/Prarinporn_Chookaew_CV.pdf'
import profileImage from '../assets/profile2.png'
import uiImage from '../assets/ui.png'
import ui2Image from '../assets/ui2.png'
import cursorImage from '../assets/cursor.jpg'

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
    <section id="home" className="relative flex flex-col items-center justify-center px-4 md:px-8 pt-32 md:pt-40 pb-8 md:pb-12 overflow-hidden bg-gradient-to-b from-gray-50 to-white" style={{ minHeight: '70vh' }}>

      {/* Animated Cursor */}
      <div className="absolute top-1/4 left-1/4 w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 z-30 animate-cursor-move pointer-events-none">
        <img 
          src={cursorImage} 
          alt="Cursor" 
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </div>

      {/* Main Content - Grid Layout */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            {/* Small Intro Text */}
            <p className="text-lg md:text-4xl text-gray-600 mb-4 animate-fadeInUp">
              Hey, I'm <span className="font-semibold text-purple-600">Dear</span>
            </p>

            {/* Main Headline */}
            <h1 className="text-3xl md:text-5xl lg:text-8xl font-semibold mb-6 animate-fadeInUp animate-delay-200">
              <div className="mb-2">
                UX/UI <span className="text-purple-600">Designer</span> 
              </div>
              
            </h1>

            {/* Action Button */}
            
          </div>

          {/* Right Column - Profile Image with UI Overlay */}
          <div className="flex justify-center lg:justify-end animate-fadeInUp animate-delay-400">
            <div className="relative">
              {/* Main Profile Image */}
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-64 md:w-80 lg:w-96 h-auto relative z-10"
              />
              
              {/* UI Overlay Image with Float Animation - Bottom Right */}
              <img 
                src={uiImage} 
                alt="UI Design" 
                className="absolute bottom-0 -right-8 md:-right-12 w-32 md:w-40 lg:w-48 h-auto z-20 animate-float-horizontal drop-shadow-2xl"
              />

              {/* UI2 Overlay Image - Top Left with Animation */}
              <img 
                src={ui2Image} 
                alt="UI Design 2" 
                className="absolute top-12 -left-8 md:top-16 md:-left-12 w-24 md:w-32 lg:w-40 h-auto z-20 animate-float-vertical drop-shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
