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

  const words = ['UXUI Designer', 'Frontend Developer']

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
    <section id="about" className="py-2 md:py-4 px-4 md:px-8 bg-white relative overflow-hidden">
      
      <div className="text-center mb-12 md:mb-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-3">
            Who is <span className="text-purple-600">Prarinporn?</span>
          </h2>
          <p className="text-gray-500 font-light text-sm md:text-base">
            A brief look into my journey and educational background.
          </p>
        </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-100/30 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          
          {/* --- Left Column: Image --- */}
          <div className="flex justify-center animate-fadeInLeft order-1 md:order-1">
            <div 
              className="w-[600px] h-[600px] cursor-pointer"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <img 
                src={isHovering ? profileHover : profileNew}
                alt="Prarinporn Chookaew" 
                className="w-full h-auto object-cover object-center transition-all duration-500" 
              />
            </div>
          </div>

          {/* --- Right Column: Info --- */}
          <div className="animate-fadeInRight order-2 md:order-2 -mt-16">
            <div className="mb-8">
              <h2 className="text-5xl md:text-6xl font-semibold text-gray-900 leading-tight font-poppins mb-6 whitespace-nowrap">
                <span className="text-purple-600">{text}</span>
                <span className="animate-pulse">|</span>
              </h2>
              <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 uppercase tracking-wide">
                PRARINPORN CHOOKAEW
              </h1>
            </div>

            {/* Divider Line */}
            <div className="w-full h-0.5 bg-gradient-to-r from-purple-400 to-purple-600 mb-8"></div>

            {/* Education Card */}
            <div>
              <div className="flex gap-6 items-center flex-wrap md:flex-nowrap">
                
                {/* Logo */}
                <div className="w-20 h-20 bg-gray-50 rounded-xl p-2 border border-gray-100 flex-shrink-0 flex items-center justify-center">
                  <img src={psuLogo} alt="PSU Logo" className="w-full h-full object-contain" />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-[300px]">
                  <h3 className="text-2xl font-semibold text-purple-600 mb-2">Computer Science</h3>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Bachelor of Science</h4>
                  <p className="text-base text-gray-700 font-medium">
                    Prince of Songkla University
                  </p>
                </div>

                {/* Year Badge - Capsule Style */}
                <div className="px-6 py-3 bg-purple-50 text-purple-600 text-sm font-semibold rounded-full whitespace-nowrap flex-shrink-0 border border-purple-200 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
