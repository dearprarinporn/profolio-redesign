function ProjectCard({ title, year, image, tags = [], onClick, githubUrl, type, status }) {
  const handleGithubClick = (e) => {
    e.stopPropagation()
    window.open(githubUrl, '_blank')
  }

  return (
    <div 
      onClick={onClick}
      className="group bg-white rounded-[2.5rem] p-4 border border-gray-200 shadow-[0_0_20px_rgba(0,0,0,0.08)] hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] transition-all duration-500 cursor-pointer overflow-hidden"
    >
      {/* Image Container - เพิ่มมิติด้วย Inner Shadow */}
      <div className="relative aspect-[4/3] md:aspect-[5/4] rounded-[2rem] overflow-hidden mb-6 bg-gray-50">
        {image && (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
          />
        )}
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* In Progress Badge */}
        {status === 'in-progress' && (
          <div className="absolute top-4 left-4 bg-amber-500 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
            <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span className="text-sm font-medium">In Progress</span>
          </div>
        )}
        
        {/* GitHub Button for Dev Projects */}
        {type === 'development' && githubUrl && (
          <button
            onClick={handleGithubClick}
            className="absolute bottom-4 right-4 bg-gray-900 hover:bg-gray-800 text-white p-3 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>
      
      {/* Content Section */}
      <div className="px-3 pb-2">
        <div className="flex justify-between items-end mb-4">
          <div className="space-y-1">
            <p className="text-purple-600 text-sm font-semibold tracking-widest uppercase">{year}</p>
            <h3 className="text-2xl font-semibold text-gray-900 tracking-tight group-hover:text-purple-600 transition-colors duration-300">
              {title}
            </h3>
          </div>
          {/* Arrow Icon - เพิ่มลูกเล่นเวลา Hover */}
          <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center -rotate-45 group-hover:rotate-0 group-hover:bg-purple-500 group-hover:border-purple-500 transition-all duration-500">
             <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
             </svg>
          </div>
        </div>
        
        {/* Tags - แสดง tags ที่แตกต่างกันในแต่ละการ์ด */}
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <span key={tag} className="px-4 py-1.5 bg-gray-50 text-gray-500 rounded-full text-xs font-medium border border-gray-100 group-hover:border-purple-100 group-hover:bg-purple-50 group-hover:text-purple-600 transition-all duration-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
export default ProjectCard
