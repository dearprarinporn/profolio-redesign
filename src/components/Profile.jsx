import { useState, useEffect } from 'react'
import profileNew from '../assets/ProfileNew.png'
import profileHover from '../assets/ProfileHover.png'
import psuLogo from '../assets/psuLogo.png'

function About() {
  const [isHovering, setIsHovering] = useState(false)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const words = ['UX/UI Designer', 'Frontend Developer']

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length
      const fullText = words[i]

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      )

      setTypingSpeed(isDeleting ? 50 : 150)

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleType, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, words])

  return (
    <section id="about" className="py-8 md:py-12 px-4 md:px-8 bg-white relative overflow-hidden">
      
      <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-3">
            Who is <span className="text-purple-600">Prarinporn?</span>
          </h2>
          <p className="text-gray-500 font-light text-sm md:text-base">
            A brief look into my journey and educational background.
          </p>
        </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-purple-100/30 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center -ml-0 lg:-ml-16">
          
          {/* --- Left Column: Image --- */}
          <div className="flex justify-center lg:justify-start animate-fadeInLeft order-1 lg:order-1">
            <div 
              className="w-full max-w-[350px] md:max-w-[450px] lg:max-w-[520px] cursor-pointer"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <img 
                src={isHovering ? profileHover : profileNew}
                alt="Prarinporn Chookaew" 
                className="w-full h-auto object-contain transition-all duration-500" 
              />
            </div>
          </div>

          {/* --- Right Column: Info --- */}
          <div className="animate-fadeInRight order-2 lg:order-2">
            <div className="mb-6 md:mb-8">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight font-poppins mb-4 md:mb-6 whitespace-nowrap">
                <span className="text-purple-600">{text}</span>
                <span className="animate-pulse">|</span>
              </h2>
              <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold text-gray-900 uppercase tracking-wide break-words">
                PRARINPORN CHOOKAEW
              </h1>
            </div>

            {/* Divider Line */}
            <div className="w-full h-0.5 bg-gradient-to-r from-purple-400 to-purple-600 mb-6 md:mb-8"></div>

            {/* Education Card */}
            <div>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-start">
                
                {/* Logo */}
                <div className="w-16 h-16 md:w-24 md:h-24 bg-gray-50 rounded-xl p-2 border border-gray-100 flex-shrink-0 flex items-center justify-center">
                  <img src={psuLogo} alt="PSU Logo" className="w-full h-full object-contain" />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl md:text-2xl font-semibold text-purple-600 mb-2">Computer Science</h3>
                  <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-1">Bachelor of Science</h4>
                  <p className="text-sm md:text-base text-gray-700 font-medium">
                    Prince of Songkla University
                  </p>
                </div>

                {/* Year Badge - Capsule Style */}
                <div className="px-4 md:px-6 py-2 md:py-3 bg-purple-50 text-purple-600 text-xs md:text-sm font-semibold rounded-full whitespace-nowrap flex-shrink-0 border border-purple-200 flex items-center gap-2">
                  <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  2018 - 2022
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
