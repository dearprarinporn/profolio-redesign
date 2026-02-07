import { useState, useEffect } from 'react'
import profileNew from '../assets/ProfileNew.png'
import psuLogo from '../assets/psuLogo.png'

function About() {
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
            <div className="w-full max-w-[350px] md:max-w-[450px] lg:max-w-[520px]">
              <img 
                src={profileNew}
                alt="Prarinporn Chookaew" 
                className="w-full h-auto object-contain" 
              />
            </div>
          </div>

          {/* --- Right Column: Info --- */}
          <div className="animate-fadeInRight order-2 lg:order-2">
            <div className="mb-6 md:mb-8">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-purple-600 tracking-wide mb-4 md:mb-6 whitespace-nowrap uppercase">
                PRARINPORN CHOOKAEW
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight font-poppins whitespace-nowrap mb-4 md:mb-6">
                <span className="text-gray-900">{text}</span>
                <span className="animate-pulse text-purple-600">|</span>
              </h2>

              {/* Passion Quote */}
              <div className="relative pl-6 md:pl-8  mb-6 md:mb-8">
                <svg className="absolute -left-1 top-0 w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  <span className="font-semibold text-gray-900">Designing intuitive experiences that users actually enjoy.</span>
                </p>
              </div>
            </div>

            {/* Education Card */}
            <div className="bg-white border border-gray-100 rounded-3xl px-6 py-5 md:px-8 md:py-6 shadow-[0_0_20px_rgba(0,0,0,0.08)] hover:shadow-[0_0_25px_rgba(0,0,0,0.12)] transition-all duration-300">
              <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-center">
                
                {/* Logo */}
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-3xl p-3 border border-gray-100 flex-shrink-0 flex items-center justify-center shadow-md">
                  <img src={psuLogo} alt="PSU Logo" className="w-full h-full object-contain" />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  {/* Computer Science with Education Badge */}
                  <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-purple-600">
                      Computer Science
                    </h3>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-purple-50 to-purple-100 text-purple-700 rounded-full text-xs font-semibold border border-purple-200">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                      Education
                    </span>
                  </div>
                  
                  <h4 className="text-lg md:text-xl font-semibold text-gray-700 mb-2 pb-4 border-b border-gray-200">Bachelor of Science</h4>
                  
                  <div className="flex items-center gap-3 text-sm md:text-base text-gray-600 pt-1">
                    <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="font-medium">Prince of Songkla University</span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                    <span className="font-medium">2018 - 2022</span>
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

export default About
