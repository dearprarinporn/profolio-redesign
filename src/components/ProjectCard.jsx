function ProjectCard({ title, year, image, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-[2rem] p-4 md:p-3 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] cursor-pointer group"
    >
      {/* Image Container with padding and rounded corners */}
      <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 h-[280px] md:h-[240px] rounded-[1.5rem] overflow-hidden mb-4">
        {image && (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
        )}
        {/* Overlay gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      {/* Content Section */}
      <div className="px-2">
        {/* Title and Year */}
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl md:text-lg font-medium text-gray-900 leading-tight flex-1 pr-4">{title}</h3>
          <span className="text-xl md:text-lg font-medium text-gray-900 whitespace-nowrap">{year}</span>
        </div>
        
        {/* Tags */}
        <div className="flex gap-2.5 flex-wrap">
          <span className="px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 rounded-full text-sm font-semibold transition-all duration-300 hover:from-blue-100 hover:to-blue-200 hover:shadow-md">
            UX Design
          </span>
          <span className="px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 rounded-full text-sm font-semibold transition-all duration-300 hover:from-blue-100 hover:to-blue-200 hover:shadow-md">
            UI Design
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
