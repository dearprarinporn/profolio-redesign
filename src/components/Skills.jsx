import React from 'react';

// นำเข้ารูปภาพโลโก้ตาม Path เดิมของคุณ
import figmaLogo from '../assets/figmaLogo.jpeg';
import framerLogo from '../assets/framerLogo.jpeg';
import xdLogo from '../assets/xdLogo.svg.png';
import notionLogo from '../assets/notionLogo.webp';
import figjamLogo from '../assets/figjamLogo.webp';
import vsLogo from '../assets/vsLogo.svg.png';

function Skills() {
  const designTools = [
    { name: 'FIGMA', logo: figmaLogo },
    { name: 'FRAMER', logo: framerLogo },
    { name: 'ADOBE XD', logo: xdLogo },
    { name: 'NOTION', logo: notionLogo }, 
    { name: 'FIGJAM', logo: figjamLogo }, 
    { name: 'VS Code', logo: vsLogo }, 
  ];

  const uxSkills = [
    'User Research', 'Wireframing', 'Info Architecture', 
    'Prototyping', 'Usability Testing', 'Design Thinking', 'Design System', ,'WCAG', 'Responsive Design'
  ];

  const devSkills = [
    'React', 'Angular', 'JavaScript', 'TypeScript', 
    'Python', 'PHP', 'C', 'HTML', 'CSS', 'MySQL', 'Robot Framework','Tailwind CSS'
  ];

  const allTools = Array(8).fill(designTools).flat();

  return (
    <section id="skills" className="py-16 md:py-24 px-4 md:px-8 bg-white font-poppins relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* 🟢 Header: คงเดิม */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-3">
            Skills & <span className="text-purple-600">Tools</span>
          </h2>
          <p className="text-gray-500 font-light text-sm md:text-base">
            My technical proficiency and design workflow
          </p>
        </div>

        {/* 🟢 Design Tools Scroll: คงเดิม */}
        <div className="mb-20 overflow-hidden relative">
          <div 
            className="absolute inset-0 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, white 0%, transparent 15%, transparent 85%, white 100%)' }}
          ></div>
          <div className="flex gap-6 animate-scroll-seamless">
            {allTools.map((tool, index) => (
              <div key={index} className="flex-shrink-0 w-64 h-40 bg-white rounded-xl flex flex-col items-center justify-center gap-4 border border-gray-100 shadow-sm">
                <img src={tool.logo} alt={tool.name} className="w-16 h-16 object-contain" />
                <p className="text-gray-600 text-sm font-medium tracking-wide">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 🟢 ปรับปรุง: แยกฝั่งซ้าย-ขวา และลดขนาด Capsule */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
          
          {/* 1. User Experience Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-4 mb-6 w-full justify-center md:justify-start">
              <h3 className="text-xl md:text-2xl font-medium text-gray-900 whitespace-nowrap">
                <span className="text-purple-600">UX/UI</span> Skill 
              </h3>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600"></div>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {uxSkills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-4 py-1.5 bg-white border border-gray-200 text-gray-500 rounded-full text-xs md:text-sm font-normal hover:text-purple-600 hover:border-purple-300 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* 2. Development Skill Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-4 mb-6 w-full justify-center md:justify-start">
              <h3 className="text-xl md:text-2xl font-medium text-gray-900 whitespace-nowrap">
                <span className="text-purple-600">Development</span> Skill
              </h3>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600"></div>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {devSkills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-4 py-1.5 bg-white border border-gray-200 text-gray-500 rounded-full text-xs md:text-sm font-normal hover:text-purple-600 hover:border-purple-300 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;