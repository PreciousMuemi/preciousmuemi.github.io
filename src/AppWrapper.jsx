import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ExternalLink } from 'lucide-react';
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter, FaSquareGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FiInstagram } from "react-icons/fi";
import Navbar from './Component/Navbar';
import AccessibilityMenu from './Component/AccesibilityMenu';


const BackToTop = () => {
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      Back to Top
    </button>
  );
};
// Preloader Component
const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-gray-200 dark:bg-gray-900">
      <div className="relative">
        <div className="relative flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-t-transparent border-blue-800 dark:border-blue-400 rounded-full animate-spin"></div>
        </div>
        <div className="absolute top-20 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent animate-pulse">
            Precious Muemi
          </span>
        </div>
      </div>
    </div>
  );
};

// Footer Component
const Footer = () => {
  const socialLinks = [
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/precious-muemi/", label: "LinkedIn" },
    { icon: FaXTwitter, href: "https://x.com/PreciousMuemi", label: "Twitter" },
    { icon: FaSquareGithub, href: "https://github.com/PreciousMuemi", label: "GitHub" },
    { icon: BiLogoGmail, href: "mailto:precious.muemi@gmail.com", label: "Email" },
    { icon: FiInstagram, href: "https://www.instagram.com/precious_muemi/", label: "Instagram" },
    { icon: FaWhatsapp, href: "https://wa.me/+254714296157", label: "Whatsapp" },
  ];

  return (
    <footer className="
      bg-gray-200 text-gray-800 py-12 mt-20 border-t border
      dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700
      transform transition-all duration-700 ease-in-out
    ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-400 transition-all duration-300">
              Precious Muemi
            </h3>
            <p className="dark:text-white max-w-md">
              Building innovative solutions with cutting-edge technology.
              Let us create something amazing together.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 ">
              <li>
                <a
                  href="/"
                  className="group flex items-center dark:text-white hover:text-gray-400 dark:hover:text-gray-500 transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Home
                </a>
                <a
                  href="/volunteer"
                  className="group flex items-center dark:text-white hover:text-gray-400 dark:hover:text-gray-500 transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  About
                </a>
                <a
                  href="/experience"
                  className="group flex items-center dark:text-white hover:text-gray-400 dark:hover:text-gray-500 transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Portfolio
                </a>
                <a
                  href="/experience"
                  className="group flex items-center dark:text-white hover:text-gray-400 dark:hover:text-gray-500 transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Services
                </a>
                <a
                  href="/projects"
                  className="group flex items-center dark:text-white hover:text-gray-400 dark:hover:text-gray-500 transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-400 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-white dark:text-gray-400 hover:text-gray-600 dark:hover:text-white transition-all duration-200 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-300 dark:border-gray-800 text-center dark:text-gray-400">
          <p>© {new Date().getFullYear()} Precious Muemi. All rights reserved.</p>
          <p className='text-xs mt-4'>Powered by <a href='https://guild-code.com/' target='_blank' rel='noopener noreferrer'>Guild Code</a></p>
        </div>
      </div>
    </footer>
  );
};

// Main App wrapper to include both components
const AppWrapper = ({ children }) => {
  return (
    <div>
      <Preloader />
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
      <AccessibilityMenu />
      <BackToTop />
    </div>
  );
};

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppWrapper;
