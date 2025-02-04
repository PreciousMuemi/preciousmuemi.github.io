import React from 'react';
import Hero from "../Component/Hero";
import Contact from "../Component/Contact";

import Skills from "../Component/Skills";
import IntroSection from '../Component/IntroSection';
import ServiceSection from '../Component/ServiceSection';
import CTASection from '../Component/CTA';
import ServicesGrid from '../Component/ServicesGrid';
import TechStackSection from '../Component/TechStackSection';

import Projects from "../Component/Projects";
import About from "../Component/About";
import Testimonials from "../Component/Testimonials";
// import Portfolio from "../Component/Portfolio"; // Ensure correct import

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Hero />
      <IntroSection />
        <ServiceSection />
        <CTASection />
      <ServicesGrid />
      <TechStackSection />
      <Skills />
      {/* <Portfolio /> Ensure this component is correctly imported and defined */}
      <Projects />
      <Contact />
      <Testimonials />
    </div>
  );
};

export default Home;

