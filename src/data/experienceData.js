import rapidLogo from '../assets/rapidLogo.png'
import wealthLogo from '../assets/wealthLogo.png'
import jtsLogo from '../assets/jtsLogo.png'

export const experienceData = [
  {
    id: 1,
    company: 'RapidTech Co., Ltd.',
    position: 'UX/UI Designer',
    period: 'July 2025 - November 2025',
    duration: '4 months',
   description: [
      "Led the end-to-end design process for core products, translating business requirements into intuitive UI solutions.",
      "Collaborated closely with developers to ensure 100% design fidelity and maintained the company's Design System.",
      "Conducted user research to optimize user flows, reducing drop-off rates by 15%."
    ],
    tags: ["Figma", "Design System", "Agile"],
    image: rapidLogo
  },
  {
    id: 2,
    company: 'Jasmine Technology Solution Co., Ltd.',
    position: 'UX/UI Designer (Intern)',
    period: 'November 2024 - March 2025',
    duration: '4 months',
    description: [
      "Assisted senior designers in crafting responsive web interfaces and conducting usability testing.",
      "Translated complex user requirements into interactive High-fidelity prototypes using Figma."
    ],
    tags: ["Wireframing", "Prototyping", "User Research", "Usability Testing"],
    image: jtsLogo
  },
  {
    id: 3,
    company: 'Wealth Management System Co., Ltd.',
    position: 'Application Developer (Intern)',
    period: 'April 2024 - June 2024',
    duration: '2 months',
    description: [
      "Developed responsive front-end components using Typescript/Angular, ensuring cross-browser compatibility.",
      "Collaborated with the design team to optimize UI feasibility, effectively bridging the gap between design and code."
    ],
    tags: ["HTML/CSS", "TypeScript", "Angular", "Git", "Robot Framework"],
    image: wealthLogo
  }
]
