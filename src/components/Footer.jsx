function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-400 mb-4 text-sm md:text-base">© 2025 Portfolio. All rights reserved.</p>
        <div className="flex justify-center gap-4 md:gap-6 flex-wrap">
          <a href="#" className="text-gray-400 hover:text-white transition text-sm md:text-base">LinkedIn</a>
          <a href="#" className="text-gray-400 hover:text-white transition text-sm md:text-base">GitHub</a>
          <a href="#" className="text-gray-400 hover:text-white transition text-sm md:text-base">Behance</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
