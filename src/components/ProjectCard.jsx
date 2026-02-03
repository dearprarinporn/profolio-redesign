function ProjectCard({ title, year, image, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="group bg-white rounded-[2.5rem] p-4 border border-gray-200 shadow-sm hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 cursor-pointer overflow-hidden"
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
      </div>
      
      {/* Content Section */}
      <div className="px-3 pb-2">
        <div className="flex justify-between items-end mb-4">
          <div className="space-y-1">
            <p className="text-purple-600 text-sm font-bold tracking-widest uppercase">{year}</p>
            <h3 className="text-2xl font-bold text-gray-900 tracking-tight group-hover:text-purple-600 transition-colors duration-300">
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
        
        {/* Tags - ปรับให้สี Soft ลงเพื่อไม่ให้แย่งจุดเด่น */}
        <div className="flex gap-2 flex-wrap">
          {['UX Design', 'UI Design'].map((tag) => (
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
