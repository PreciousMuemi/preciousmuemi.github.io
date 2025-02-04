import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AppWrapper from './AppWrapper';
import About from './Component/About';
import Services from './Component/services';
import Projects from './Component/Projects';
// import PortfolioShowcase from './Component/PortfolioShowcase';
import Home from './Component/Home'; 
import GetStartedSection from './Pages/Contact';
// import Blog from './Component/Blog';
import ServicesPage from './Pages/Services'
// Import other components as needed

const App = () => {
  return (

    <Router>
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <AppWrapper>
       
          <>
            {/* Navbar */}
            <nav className="navbar fixed w-full z-50 bg-[#0a192f]/90 backdrop-blur-md">
              <div className="container mx-auto px-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-[#64ffda]">
                  Precious Muemi
                </Link>
                <div className="hidden lg:flex space-x-6">
                  <Link to="/" className="text-[#8892b0] hover:text-[#64ffda] transition-colors">
                    Home
                  </Link>
                  <Link to="/about" className="text-[#8892b0] hover:text-[#64ffda] transition-colors">
                    About
                  </Link>
                  <Link to="/services" className="text-[#8892b0] hover:text-[#64ffda] transition-colors">
                    Services
                  </Link>
                  <Link to="/portfolio" className="text-[#8892b0] hover:text-[#64ffda] transition-colors">
                    Portfolio
                  </Link>
                  {/* <Link to="/blog" className="text-[#8892b0] hover:text-[#64ffda] transition-colors">
                    Blog
                  </Link> */}
                  <Link to="/contact" className="px-4 py-2 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-colors">
                    Contact
                  </Link>
                </div>
              </div>
            </nav>

            {/* Main Content */}
            <main className="pt-20">
              <Routes>
                {/* Define your routes here */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/portfolio" element={<Projects />} />
                <Route path="/contact" element={<GetStartedSection />} />
                {/* Add more routes as needed */}
              </Routes>
            </main>
          </>
        
      </AppWrapper>
    </div>
    </Router>
  );
};

export default App;




// import React, { useState, useEffect, useRef } from 'react';
// import { Github, Linkedin, Mail, ExternalLink, Code, Database, Brain, LineChart, ArrowRight, MessageCircle, CheckCircle, DollarSign, Book, Menu, X, Phone } from 'lucide-react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import PortfolioShowcase from './Component.js/PortfolioShowcase';
// import Services from './services';


// const App = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeSection, setActiveSection] = useState('skills');
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [navbarVisible, setNavbarVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({ target: ref });
//   const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  

 

  
//   return (
//     <div className="bg-black text-white min-h-screen overflow-x-hidden relative">
//       <ParticleBackground />
      
//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center">
//           <X 
//             onClick={() => setIsMobileMenuOpen(false)} 
//             className="absolute top-6 right-6 w-8 h-8 text-white cursor-pointer" 
//           />
//           {['Home', 'Projects', 'Skills', 'Blog', 'Contact'].map((item) => (
//             <a
//               key={item}
//               href={`#${item.toLowerCase()}`}
//               className="text-2xl mb-6 text-indigo-300 hover:text-indigo-100 transition-colors"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               {item}
//             </a>
//           ))}
//         </div>
//       )}

//       <div className="bg-[#0a192f] text-[#8892b0] font-sans">
//       {/* Top Bar */}
//       <div className="container-fluid px-5 hidden lg:block bg-[#112240] py-2">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center space-x-4">
//             <a 
//               href="mailto:precious.muemi@gmail.com" 
//               className="flex items-center hover:text-[#64ffda] transition-colors"
//             >
//               <Mail className="mr-2 w-5 h-5" />
//               precious.muemi@gmail.com
//             </a>
//             <span className="flex items-center">
//               <Phone className="mr-2 w-5 h-5" />
//               +254 714296157
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Navbar */}
//       <nav className="navbar fixed w-full z-50 bg-[#0a192f]/90 backdrop-blur-md">
//         <div className="container mx-auto px-4 flex justify-between items-center">
//           <a href="/" className="text-2xl font-bold text-[#64ffda]">
//             Precious Muemi
//           </a>

//           {/* Mobile Menu Toggle */}
//           <div className="lg:hidden">
//             <button 
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="text-[#64ffda] focus:outline-none"
//             >
//               {isMobileMenuOpen ? 'Close' : 'Menu'}
//             </button>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex space-x-6">
//             {['Home', 'About', 'Services', 'Portfolio', 'Blog'].map((item) => (
//               <a 
//                 key={item} 
//                 href={`/${item.toLowerCase()}`} 
//                 className="text-[#8892b0] hover:text-[#64ffda] transition-colors"
//               >
//                 {item}
//               </a>
//             ))}
//             <a 
//               href="/contact" 
//               className="px-4 py-2 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-colors"
//             >
//               Contact
//             </a>
//           </div>

//           {/* Mobile Navigation Overlay */}
//           {isMobileMenuOpen && (
//             <div className="fixed inset-0 bg-[#0a192f] lg:hidden">
//               <div className="flex flex-col items-center justify-center h-full space-y-6">
//                 {['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'].map((item) => (
//                   <a 
//                     key={item} 
//                     href={`/${item.toLowerCase()}`} 
//                     className="text-2xl text-[#8892b0] hover:text-[#64ffda]"
//                     onClick={() => setIsMobileMenuOpen(false)}
//                   >
//                     {item}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Main Content */}
//       <main className="pt-20">
//         <Services />
//         <PortfolioShowcase />
//       </main>

     
//     </div>
//   </div>
//   );
// };
// export default App;
