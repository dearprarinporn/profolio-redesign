import rapidLogo from '../assets/rapidLogo.png'
import wealthLogo from '../assets/wealthLogo.png'
import jtsLogo from '../assets/jtsLogo.png'
import W1 from '../assets/W1.png'
import W2 from '../assets/W2.png'
import W3 from '../assets/W3.png'
import W4 from '../assets/W4.png'
import FL01 from '../assets/FL01.png'
import FL02 from '../assets/FL02.png'
import FL03 from '../assets/FL03.png'
import FL08 from '../assets/FL08.png'
import FL06 from '../assets/FL06.png'
import FL07 from '../assets/FL07.png'


const CLOUDINARY_URL = 'https://res.cloudinary.com/dl1m5dwmb/image/upload/v1768671127'

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
    image: wealthLogo,
    projectData: {
      id: 'wealth-project',
      title: 'Wealth Management Project',
      year: '2024',
      additionalImages: [
        W1,
        W2,
        W3,
        W4,
      ]
    }
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
    image: jtsLogo,
    projectData: {
      id: 'jts-project',
      title: 'Jasmine Technology Project',
      year: '2024',
      additionalImages: [
      `${CLOUDINARY_URL}/MacBook_Pro_16__-_8_ydhmnm.webp`,
      `${CLOUDINARY_URL}/MacBook_Pro_16__-_47_vgvw2x.webp`,
      `${CLOUDINARY_URL}/MacBook_Pro_16__-_48_e0kbat.webp`,
      `${CLOUDINARY_URL}/MacBook_Pro_16__-_50_odfqyw.webp`,
      `${CLOUDINARY_URL}/MacBook_Pro_16__-_49_qwf34v.webp`,
      `${CLOUDINARY_URL}/designsystem1.webp`,
      `${CLOUDINARY_URL}/MacBook_Pro_16__-_37_rb7b6l.webp`,
      `${CLOUDINARY_URL}/MacBook_Pro_16__-_38_hzvhy3.webp`,
      `${CLOUDINARY_URL}/MacBook_Pro_16__-_39_sdxnrx.webp`,
      `${CLOUDINARY_URL}/MacBook_Pro_16__-_76_wxvxlw.webp`,
      `${CLOUDINARY_URL}/MacBook_Pro_16__-_100_edapjo.webp`,
      `${CLOUDINARY_URL}/MacBook_Pro_16__-_66_ppocxc.webp`,
      `${CLOUDINARY_URL}/MacBook_Pro_16__-_69_a70umd.webp`,
      `${CLOUDINARY_URL}/MacBook_Pro_16__-_70_icfyrv.webp`,
      `${CLOUDINARY_URL}/MacBook_Pro_16__-_73_vexi0u.webp`,
      `${CLOUDINARY_URL}/MacBook_Pro_16__-_61_jovcl3.webp`,
      `${CLOUDINARY_URL}/MacBook_Pro_16__-_64_srab4l.webp`,
    ]
    }
  },
  {
    id: 3,
    company: 'RapidTech Co., Ltd.',
    position: 'UX/UI Designer',
    period: 'July 2025 - November 2025',
    status: 'past',
    order: 3,
    type: 'fulltime',
    tags: ["Design System", "Prototyping","Productivity"],
    image: rapidLogo,
    projectData: {
      id: 'rapid-project',
      title: 'RapidWork Project',
      year: '2025',
      additionalImages: [
        `${CLOUDINARY_URL}/MacBook_Pro_16__-_112_x5qcnj.webp`,
        `${CLOUDINARY_URL}/MacBook_Pro_16__-_113_kgx9yo.webp`,
        `${CLOUDINARY_URL}/MacBook_Pro_16__-_117_bcpa3h.webp`,
        `${CLOUDINARY_URL}/MacBook_Pro_16__-_118_zdlm3s.webp`,
        `${CLOUDINARY_URL}/Frame_1597885124_yc7zzu.webp`,
        `${CLOUDINARY_URL}/MacBook_Pro_16__-_119_ttlmel.webp`,
        `${CLOUDINARY_URL}/MacBook_Pro_16__-_120_rxnoqg.webp`,
        `${CLOUDINARY_URL}/MacBook_Pro_16__-_121_cvuyai.webp`,
        `${CLOUDINARY_URL}/MacBook_Pro_16__-_100_dmnvbn.webp`,
        `${CLOUDINARY_URL}/MacBook_Pro_16__-_122_wqineg.webp`,
        `${CLOUDINARY_URL}/MacBook_Pro_16__-_123_mdy7mb.webp`,
      ]
    }
  },
  {
    id: 4,
    company: 'Self-Employed',
    position: 'Freelance Designer',
    period: 'January 2026 - Present',
    status: 'current',
    order: 4,
    type: 'freelance',
    tags: ["Graphic", "Web Development", "UI/UX Design", "Poster"],
    image: null, // ใช้ emoji แทน
    isFreelance: true, // flag สำหรับแสดงแบบ horizontal card
    projectData: {
      id: 'freelance-project',
      title: 'Freelance Projects',
      year: '2025',
      additionalImages: [
        FL01,
        FL02,
        FL06,
        FL07,
        FL08,
        FL03,
      ]
    }
  }
]
