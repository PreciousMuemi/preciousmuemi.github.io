import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Brain, LineChart, ArrowRight, MessageCircle, CheckCircle, DollarSign, Book, Menu, X, Phone } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PortfolioShowcase from './PortfolioShowcase';
import Services from './services';

const ParticleBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      const particleCount = 50;
      const newParticles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.5 + 0.2
      }));
      setParticles(newParticles);
    };

    generateParticles();
    window.addEventListener('resize', generateParticles);
    return () => window.removeEventListener('resize', generateParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          initial={{ x: particle.x, y: particle.y, opacity: 0 }}
          animate={{ 
            x: particle.x + Math.sin(index) * 50, 
            y: particle.y, 
            opacity: [particle.opacity, 0, particle.opacity] 
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute rounded-full bg-indigo-900/30"
          style={{
            width: particle.size,
            height: particle.size,
          }}
        />
      ))}
    </div>
  );
};

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('skills');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const projects = [
    {
      title: "Blockchain Education Platform",
      description: "Decentralized learning management system built on Internet Computer Protocol",
      tech: ["Motoko", "React", "ICP", "TypeScript"],
      category: "blockchain",
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      title: "AI Insurance Underwriting",
      description: "Machine learning model for automated risk assessment and policy pricing",
      tech: ["Python", "TensorFlow", "Django", "PostgreSQL"],
      category: "ai",
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      title: "Endocare",
      description: "Mobile health records management system for endocrinology clinics",
      tech: ["Kotlin", "React Native", "Firebase", "Node.js"],
      category: "mobile",
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      title: "Social Analytics Dashboard",
      description: "Real-time social media analytics and sentiment analysis platform",
      tech: ["React", "Power BI", "Python", "MongoDB"],
      category: "analytics",
      githubUrl: "#",
      demoUrl: "#"
    }
  ];

  const skills = {
    languages: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Kotlin", level: 80 },
      { name: "Motoko", level: 75 },
      { name: "SQL", level: 85 }
    ],
    frameworks: [
      { name: "React", level: 90 },
      { name: "Django", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "TensorFlow", level: 75 }
    ]
  };

  const blogs = [
    {
      title: "Building Scalable dApps on ICP",
      date: "Jan 2025",
      preview: "Exploring the future of decentralized applications..."
    },
    {
      title: "AI in Healthcare: A Deep Dive",
      date: "Dec 2024",
      preview: "How machine learning is transforming patient care..."
    },
    {
      title: "Modern Mobile Development",
      date: "Nov 2024",
      preview: "Cross-platform development strategies..."
    }
  ];

  const steps = [
    { icon: MessageCircle, text: "Contact me" },
    { icon: Book, text: "Give me the project" },
    { icon: CheckCircle, text: "Allow me to do the job" },
    { icon: DollarSign, text: "Make your payment" }
  ];

  const SkillBar = ({ name, level }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-indigo-300">{name}</span>
        <span className="text-sm text-indigo-400">{level}%</span>
      </div>
      <div className="w-full bg-indigo-900 rounded-full h-2">
        <div 
          className="bg-indigo-600 h-2 rounded-full transition-all duration-1000"
          style={{ width: `${isVisible ? level : 0}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden relative">
      <ParticleBackground />
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center">
          <X 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="absolute top-6 right-6 w-8 h-8 text-white cursor-pointer" 
          />
          {['Home', 'Projects', 'Skills', 'Blog', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-2xl mb-6 text-indigo-300 hover:text-indigo-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}

      <div className="bg-[#0a192f] text-[#8892b0] font-sans">
      {/* Top Bar */}
      <div className="container-fluid px-5 hidden lg:block bg-[#112240] py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a 
              href="mailto:precious.muemi@gmail.com" 
              className="flex items-center hover:text-[#64ffda] transition-colors"
            >
              <Mail className="mr-2 w-5 h-5" />
              precious.muemi@gmail.com
            </a>
            <span className="flex items-center">
              <Phone className="mr-2 w-5 h-5" />
              +254 714296157
            </span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar fixed w-full z-50 bg-[#0a192f]/90 backdrop-blur-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-[#64ffda]">
            Precious Muemi
          </a>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#64ffda] focus:outline-none"
            >
              {isMobileMenuOpen ? 'Close' : 'Menu'}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6">
            {['Home', 'About', 'Services', 'Portfolio', 'Blog'].map((item) => (
              <a 
                key={item} 
                href={`/${item.toLowerCase()}`} 
                className="text-[#8892b0] hover:text-[#64ffda] transition-colors"
              >
                {item}
              </a>
            ))}
            <a 
              href="/contact" 
              className="px-4 py-2 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Mobile Navigation Overlay */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 bg-[#0a192f] lg:hidden">
              <div className="flex flex-col items-center justify-center h-full space-y-6">
                {['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'].map((item) => (
                  <a 
                    key={item} 
                    href={`/${item.toLowerCase()}`} 
                    className="text-2xl text-[#8892b0] hover:text-[#64ffda]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        <Services />
        <PortfolioShowcase />
      </main>

      {/* Footer */}
      <footer className="bg-[#112240] text-[#8892b0] py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-xl font-bold text-[#64ffda] mb-4">About Me</h3>
              <p className="text-sm">
                I'm a passionate technologist with a diverse skill set spanning web development, 
                AI/ML, and innovative tech solutions. My mission is to create impactful digital 
                experiences that solve real-world challenges.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold text-[#64ffda] mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['About', 'Services', 'Portfolio', 'Blog', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`/${item.toLowerCase()}`} 
                      className="hover:text-[#64ffda] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold text-[#64ffda] mb-4">Get in Touch</h3>
              <div className="space-y-2">
                <p>Email: precious.muemi@gmail.com</p>
                <p>Phone: +254 746 238 725</p>
                
                {/* Social Links */}
                <div className="flex space-x-4 mt-4">
                  {[
                    { Icon: Linkedin, link: 'https://linkedin.com/in/precious-muemi' },
                    { Icon: Github, link: 'https://github.com/PreciousMuemi' },
                    { Icon: Mail, link: 'mailto:precious.muemi@gmail.com' }
                  ].map(({ Icon, link }) => (
                    <a 
                      key={link} 
                      href={link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#8892b0] hover:text-[#64ffda]"
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-4 border-t border-[#233554] text-center">
            <p>© 2024 Precious Muemi. All Rights Reserved.</p>
          </div>

          {/* Back to Top Button */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 bg-[#64ffda]/10 text-[#64ffda] p-3 rounded-full hover:bg-[#64ffda]/20 transition-colors"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </footer>
    </div>
  </div>
  );
};
export default App;
