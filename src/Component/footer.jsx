import React, { useState, useEffect } from 'react';

export default function Footer() {
  return (
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
  );
}
