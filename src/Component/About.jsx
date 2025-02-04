import { useState } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [activeTab, setActiveTab] = useState('general');

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-gray-900 text-gray-100">
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center"
            {...fadeIn}
          >
            <div className="relative w-40 h-40 mx-auto mb-8">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-pulse"></div>
              <div className="absolute inset-4 bg-blue-400/30 rounded-full animate-pulse delay-75"></div>
              <div className="absolute inset-8 bg-blue-300/40 rounded-full animate-pulse delay-150"></div>
              <img
                src='src/Images/Profile.png'
                alt="Profile"
                className="absolute inset-0 w-full h-full rounded-full object-cover"
              />
            </div>
            <h1 className="text-5xl font-playfair mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Learn More About Me
            </h1>
          </motion.div>
        </div>
      </motion.section>

      {/* Biography Section */}
      <motion.section 
        className="py-16 bg-slate-800/50"
        {...fadeIn}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 rounded-lg transform -rotate-6"></div>
                <img
                  src='src/Images/About.jpg'
                  alt="About me"
                  className="relative rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="max-w-lg">
                <h2 className="text-4xl font-playfair mb-6">Who's Cynthia?</h2>
                <div className="h-1 w-20 bg-blue-500 mb-8"></div>
                <p className="text-lg leading-relaxed mb-8 font-light">
                  Currently a 4th-year student at St Paul's University. My stronghold lies in Motoko and
                  Python, focusing on building high-performance applications. With a strong aptitude
                  for identifying and solving real-world problems through code, I am eager to
                  contribute to dynamic teams and leverage opportunities to drive success.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Python', 'Django', 'AWS', 'UI/UX', 'Blockchain', 'AI & ML'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-blue-500/20 rounded-full text-sm font-medium hover:bg-blue-500/30 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section 
        className="py-16"
        {...fadeIn}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-playfair text-center mb-16">Educational Journey</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Formal Education */}
            <div className="bg-slate-800/50 rounded-xl p-8 hover:transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-semibold mb-6">Formal Education</h3>
              <ul className="space-y-6">
                <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full before:top-2">
                  <h4 className="font-medium text-lg">Bachelor's in Software Development</h4>
                  <p className="text-gray-400">St Paul's University | 2021-2025</p>
                </li>
                <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full before:top-2">
                  <h4 className="font-medium text-lg">KCSE Certificate</h4>
                  <p className="text-gray-400">Gatero Girls Highschool | 2017-2021</p>
                </li>
              </ul>
            </div>
            
            {/* Professional Certificates */}
            <div className="bg-slate-800/50 rounded-xl p-8 hover:transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-semibold mb-6">Professional Certificates</h3>
              <ul className="space-y-6">
                <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full before:top-2">
                  <h4 className="font-medium text-lg">AWS Cloud Practitioner</h4>
                  <p className="text-gray-400">Ujuzi | 2024</p>
                </li>
                <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full before:top-2">
                  <h4 className="font-medium text-lg">Web Development</h4>
                  <p className="text-gray-400">Emobilis Institute | 2023</p>
                </li>
                {/* <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full before:top-2">
                  <h4 className="font-medium text-lg">CCNA</h4>
                  <p className="text-gray-400">KCA University | 2022</p>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        className="py-16 bg-slate-800/50"
        {...fadeIn}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-playfair text-center mb-12">Experience</h2>
          
          {/* Tab Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            {['general', 'voluntary', 'hired'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all
                  ${activeTab === tab 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid md:grid-cols-2 gap-8">
            {activeTab === 'general' && (
              <>
                <motion.div 
                  className="bg-slate-700/50 rounded-xl p-8"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-semibold mb-4">IEBC</h3>
                  <p className="text-gray-400 mb-2">Clerk Assistant | August 2022</p>
                  <p className="text-gray-300">Supported the electoral process by managing voter registration and maintaining electoral records.</p>
                </motion.div>
                <motion.div 
                  className="bg-slate-700/50 rounded-xl p-8"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-semibold mb-4">Crystal Computers Limited</h3>
                  <p className="text-gray-400 mb-2">Receptionist & Tutor | May - September 2023</p>
                  <p className="text-gray-300">Handled cyber services and taught Microsoft Office packages to students.</p>
                </motion.div>
              </>
            )}

            {activeTab === 'voluntary' && (
              <motion.div 
                className="bg-slate-700/50 rounded-xl p-8 col-span-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold mb-4">Gatero High School Alumni Foundation</h3>
                <p className="text-gray-400 mb-2">IT Support & Maintenance | June 2024 - Current</p>
                <p className="text-gray-300">Maintaining and updating the organization's social media platforms and website.</p>
              </motion.div>
            )}

            {activeTab === 'hired' && (
              <motion.div 
                className="bg-slate-700/50 rounded-xl p-8 col-span-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold mb-4">Future Opportunities</h3>
                <p className="text-gray-400">Ready for new challenges and opportunities.</p>
              </motion.div>
            )}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;