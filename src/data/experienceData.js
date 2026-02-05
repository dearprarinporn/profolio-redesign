import rapidLogo from '../assets/rapidLogo.png'
import wealthLogo from '../assets/wealthLogo.png'
import jtsLogo from '../assets/jtsLogo.png'

export const experienceData = [
  {
    id: 1,
    company: 'Wealth Management System Co., Ltd.',
    position: 'Application Developer',
    period: 'April 2024 - June 2024',
    status: 'past',
    order: 1,
    type: 'intern',
    tags: ["HTML/CSS", "TypeScript", "Angular", "Git", "Robot Framework"],
    image: wealthLogo
    
    
  },
  {
    id: 2,
    company: 'Jasmine Technology Solution Co., Ltd.',
    position: 'UX/UI Designer',
    period: 'November 2024 - March 2025',
    status: 'past',
    order: 2,
    type: 'intern',
    tags: ["Wireframing", "Prototyping", "User Research", "Usability Testing"],
    image: jtsLogo
    
  },
  {
    id: 3,
    company: 'RapidTech Co., Ltd.',
    position: 'UX/UI Designer',
    period: 'July 2025 - November 2025',
    status: 'current',
    order: 3,
    type: 'fulltime',
    tags: ["Design System", "Prototyping","Productivity"],
    image: rapidLogo
  }
]
