function ContactCTA() {
  return (
    <section className="relative py-12 md:py-16 px-4 md:px-8 bg-gray-50 overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 md:mb-8 px-2">
          Have an Awsome Project<br />
          Idea? <span className="text-[#8B5CF6]">Let's Discuss</span>
        </h2>

        {/* Email Input */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8 max-w-2xl mx-auto">
          <div className="flex items-center gap-3 bg-white rounded-full px-4 md:px-6 py-3 md:py-4 shadow-lg flex-1">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-[#8B5CF6]/20 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-[#8B5CF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <input 
              type="email" 
              placeholder="Enter Email Address" 
              className="flex-1 outline-none text-gray-700 placeholder-gray-400 text-sm md:text-base"
            />
          </div>
          <button className="bg-[#8B5CF6] text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold hover:bg-purple-700 transition-all duration-300 hover:scale-105 shadow-lg text-sm md:text-base">
            Send
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm text-gray-700 mb-12 md:mb-16 px-2">
          <div className="flex items-center justify-center gap-2">
            <span className="text-yellow-500 text-base md:text-lg">⭐</span>
            <span className="font-medium">4.9/5 Average Ratings</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-[#8B5CF6] text-base md:text-lg">🏆</span>
            <span className="font-medium">25+ Winning Awards</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-[#8B5CF6] text-base md:text-lg">✓</span>
            <span className="font-medium">Certified Product Designer</span>
          </div>
        </div>
      </div>

      {/* Scrolling Skills Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#8B5CF6] py-4 md:py-6 overflow-hidden">
        <div className="flex items-center gap-6 md:gap-8 animate-scroll whitespace-nowrap">
          <span className="text-white text-lg md:text-2xl font-bold">✦ UX Design</span>
          <span className="text-white text-lg md:text-2xl font-bold">✦ App Design</span>
          <span className="text-white text-lg md:text-2xl font-bold">✦ Dashboard</span>
          <span className="text-white text-lg md:text-2xl font-bold">✦ Wireframe</span>
          <span className="text-white text-lg md:text-2xl font-bold">✦ User Research</span>
          <span className="text-white text-lg md:text-2xl font-bold">✦ UX Design</span>
          <span className="text-white text-lg md:text-2xl font-bold">✦ App Design</span>
          <span className="text-white text-lg md:text-2xl font-bold">✦ Dashboard</span>
          <span className="text-white text-lg md:text-2xl font-bold">✦ Wireframe</span>
          <span className="text-white text-lg md:text-2xl font-bold">✦ User Research</span>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA
