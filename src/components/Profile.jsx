import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import profileImage from '../assets/profile.png'
import backgroundImage from '../assets/projectBlackground.jpg'

function Profile() {
  const personalInfo = {
    name: 'Prarinporn Chookaew',
    nickname: 'Dear',
    title: 'UX/UI Designer & Frontend Developer',
    email: 'prarinporn.c@gmail.com', // อ้างอิงจากข้อมูลผู้ใช้
    phone: '086-959-4159', // อ้างอิงจากข้อมูลผู้ใช้
    location: 'Hat Yai, Songkhla', // อ้างอิงจากข้อมูลผู้ใช้
    bio: 'Fresh graduate Computer Science student from PSU with a passion for crafting user-centered digital experiences.', // สรุปจากประวัติ
    linkedin: 'https://linkedin.com/in/prarinporn',
    github: 'https://github.com/prarinporn'
  }

  return (
    <section id="about" className="py-20 md:py-32 px-4 md:px-8 bg-white relative overflow-hidden font-poppins">
      {/* Background Decor - Grid แบบโปรแกรมออกแบบ */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '32px 32px' }}>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Hero Image Section - ปรับให้เหมือนงาน Collage */}
        <div className="relative mb-24 animate-fadeInUp">
          {/* Main Background Card */}
          <div className="relative h-[350px] md:h-[450px] rounded-[2.5rem] overflow-hidden group">
            <img 
              src={backgroundImage} 
              alt="Background" 
              className="w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/90 to-blue-500/80 mix-blend-multiply"></div>
            
            {/* Big Name Overlay - Ghost Text */}
            <div className="absolute inset-0 flex items-center justify-start px-8 md:px-12 pointer-events-none">
              <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] font-black text-white/10 leading-none uppercase italic select-none">
                PRARINPORN<br />CHOOKAEW
              </h1>
            </div>

            {/* Content Inside Background Card */}
            <div className="absolute bottom-10 left-10 hidden md:block max-w-sm">
                <p className="text-white/80 text-sm font-medium leading-relaxed italic">
                    "{personalInfo.bio}"
                </p>
            </div>
          </div>

          {/* Profile Image - ขยายใหญ่และใช้ Shadow นุ่มๆ */}
          <div className="absolute right-0 md:right-8 -top-16 md:-top-24 lg:-top-32 z-10">
            <div className="relative group">
               {/* Selection Frame รอบรูปโปรไฟล์ */}
               <div className="absolute -inset-4 border-2 border-dashed border-white/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <img 
                src={profileImage} 
                alt={personalInfo.name}
                className="w-56 md:w-80 lg:w-96 h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
        </div>
        




    </section>
  )
}

export default Profile