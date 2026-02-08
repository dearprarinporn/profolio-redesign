import { useState, useEffect } from 'react'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (e, targetId) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'glass-navbar py-4' : 'bg-transparent py-4 md:py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center relative">
        <div className="text-xl md:text-2xl font-bold text-gray-800">Portfolio</div>
        
        {/* Desktop Menu - Center */}
        <div className="hidden md:flex gap-8 absolute left-1/2 transform -translate-x-1/2">
          <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="text-gray-700 hover:text-[#8B5CF6] transition cursor-pointer">Home</a>
          <a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')} className="text-gray-700 hover:text-[#8B5CF6] transition cursor-pointer">Projects</a>
          <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="text-gray-700 hover:text-[#8B5CF6] transition cursor-pointer">About Me</a>
          <a href="#skills" onClick={(e) => handleLinkClick(e, 'skills')} className="text-gray-700 hover:text-[#8B5CF6] transition cursor-pointer">Skills</a>
          <a href="#experience" onClick={(e) => handleLinkClick(e, 'experience')} className="text-gray-700 hover:text-[#8B5CF6] transition cursor-pointer">Experiences</a>
        </div>

        {/* Desktop Contact Me Button */}
        <a 
          href="#footer"
          onClick={(e) => handleLinkClick(e, 'footer')}
          className="hidden md:block bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition cursor-pointer"
        >
          Contact Me
        </a>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-800 p-2"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-navbar border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <a 
              href="#home" 
              onClick={(e) => handleLinkClick(e, 'home')}
              className="block text-gray-700 hover:text-[#8B5CF6] transition py-2 cursor-pointer"
            >
              Home
            </a>
            <a 
              href="#projects" 
              onClick={(e) => handleLinkClick(e, 'projects')}
              className="block text-gray-700 hover:text-[#8B5CF6] transition py-2 cursor-pointer"
            >
              Projects
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleLinkClick(e, 'about')}
              className="block text-gray-700 hover:text-[#8B5CF6] transition py-2 cursor-pointer"
            >
              About Me
            </a>
            <a 
              href="#experience" 
              onClick={(e) => handleLinkClick(e, 'experience')}
              className="block text-gray-700 hover:text-[#8B5CF6] transition py-2 cursor-pointer"
            >
              Experiences
            </a>
            <a 
              href="#skills" 
              onClick={(e) => handleLinkClick(e, 'skills')}
              className="block text-gray-700 hover:text-[#8B5CF6] transition py-2 cursor-pointer"
            >
              Skills
            </a>
            <a 
              href="#footer"
              onClick={(e) => handleLinkClick(e, 'footer')}
              className="block w-full bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition text-center cursor-pointer"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
