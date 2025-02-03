import Hero from "../Component/Hero";
import ContactSection from "../Component/Contact";
import SkillsSection from "../Component/Skills";
import ProjectsSection from "../Component/Projects";
import AboutSection from "../Component/About";
import Footer from "../Component/footer";
import { motion } from "framer-motion";
import Services from "./services";
import Skillbar from "./Skillbar";
// import CTASection from "../Component/CTA";
import Testimonials from "../Component/Testimonials";

import { useState } from "react";

const Home = () => {
  const [isDarkTheme] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Hero isDarkTheme={isDarkTheme} />
      <SkillsSection />
      {/* <CTASection /> */}
      <ContactSection />
      <Testimonials />
    </div>
  );
};

export default Home;