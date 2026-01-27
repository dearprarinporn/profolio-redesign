import figmaLogo from '../assets/figmaLogo.jpeg'
import framerLogo from '../assets/framerLogo.jpeg'
import xdLogo from '../assets/xdLogo.svg.png'

import { 
  FaSearch, FaPencilRuler, FaSitemap, 
  FaUserCheck, FaLayerGroup, FaLightbulb 
} from "react-icons/fa"

import { 
  SiReact, SiAngular, SiJavascript, SiTypescript, 
  SiPython, SiPhp, SiC, SiHtml5, SiCss3, SiMysql, SiRobotframework 
} from 'react-icons/si'

function Skills() {
  const designSkills = [
    { name: 'Figma', logo: figmaLogo, percentage: 95, color: '#A259FF' },
    { name: 'Framer', logo: framerLogo, percentage: 80, color: '#0D99FF' },
    { name: 'Adobe XD', logo: xdLogo, percentage: 70, color: '#FF61F6' }
  ]

  const uxSkills = [
    { name: 'User Research', icon: FaSearch, description: 'Understand users', color: '#FF6B6B' },
    { name: 'Wireframing', icon: FaPencilRuler, description: 'Low-fidelity layouts', color: '#4ECDC4' },
    { name: 'Info Architecture', icon: FaSitemap, description: 'Structure content', color: '#45B7D1' },
    { name: 'Prototyping', icon: FaLayerGroup, description: 'Interactive flows', color: '#96CEB4' },
    { name: 'Usability Testing', icon: FaUserCheck, description: 'Validate designs', color: '#FFEEAD' },
    { name: 'Design Thinking', icon: FaLightbulb, description: 'Problem solving', color: '#FFD93D' },
  ]

  const devSkills = [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Angular', icon: SiAngular, color: '#DD0031' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'PHP', icon: SiPhp, color: '#777BB4' },
    { name: 'C', icon: SiC, color: '#A8B9CC' },
    { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS', icon: SiCss3, color: '#1572B6' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'Robot Framework', icon: SiRobotframework, color: '#000000' }
  ]

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-white font-poppins">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-3">
            Skills & <span className="text-purple-600">Tools</span>
          </h2>
          <p className="text-gray-500 font-light text-sm md:text-base">
            My technical proficiency and design workflow
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          
          {/* Left Column: Design Tools */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center lg:text-left w-full">
              Design Tools
            </h3>
            <div className="flex flex-row lg:flex-col flex-wrap justify-center gap-6 w-full">
              {designSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-4 bg-gray-50 p-3 rounded-2xl w-full max-w-[300px] hover:bg-gray-100 transition-colors"
                >
                  {/* Logo */}
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img 
                        src={skill.logo} 
                        alt={skill.name} 
                        className="w-14 h-14 object-contain" 
                      />
                    </div>
                  </div>

                  {/* Text Information */}
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-bold text-gray-800">{skill.name}</h4>
                      <span className="text-sm font-semibold text-gray-500">
                        {skill.percentage}%
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full" 
                        style={{ 
                          width: `${skill.percentage}%`, 
                          backgroundColor: skill.color 
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: UX Skills */}
          <div className="lg:col-span-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center lg:text-left">
              Core UX Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {uxSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="group bg-white rounded-xl p-3 border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex items-center gap-3"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ 
                      backgroundColor: `${skill.color}15`, 
                      color: skill.color 
                    }}
                  >
                    <skill.icon className="text-lg" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {skill.name}
                    </h4>
                    <p className="text-xs text-gray-400 truncate w-full">
                      {skill.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Development Stack */}
        <div className="pt-8 border-t border-gray-100">
          <h3 className="text-xl font-semibold text-center mb-6 text-gray-800">
            Development Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {devSkills.map((skill) => (
              <div
                key={skill.name}
                className="group relative bg-gray-50 rounded-lg px-4 py-2 hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-200 flex items-center gap-2 cursor-default"
              >
                {/* Hover Background */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"
                  style={{ backgroundColor: skill.color }}
                ></div>

                <skill.icon
                  className="text-lg transition-colors duration-300 group-hover:scale-110"
                  style={{ color: skill.color }}
                />
                <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills
