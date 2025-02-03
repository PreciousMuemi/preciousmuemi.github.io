import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
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
          <Link to="/blog" className="text-[#8892b0] hover:text-[#64ffda] transition-colors">
            Blog
          </Link>
          <Link to="/contact" className="px-4 py-2 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
