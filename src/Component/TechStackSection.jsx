import React from 'react';
import typescriptLogo from '../Images/typescript.svg';
import javascriptLogo from '../Images/javascript-logo-.webp';
import pythonLogo from '../Images/Python.png';
import javaLogo from '../Images/Java.png';
import reactLogo from '../Images/react-icon.jpg';
import htmlLogo from '../Images/Html.jpeg';
import nodeLogo from '../Images/Node.png';
import djangoLogo from '../Images/django.jpeg';

const TechStackSection = () => {
  return (
    <section className="tech-stack-section py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-bold mb-8">Tech Stack</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 text-center">
          {[
            { logo: typescriptLogo, name: 'TypeScript', category: 'Languages' },
            { logo: javascriptLogo, name: 'JavaScript', category: 'Languages' },
            { logo: pythonLogo, name: 'Python', category: 'Languages' },
            { logo: javaLogo, name: 'Java', category: 'Languages' },
            { logo: reactLogo, name: 'React', category: 'Frameworks' },
            { logo: nodeLogo, name: 'Node.js', category: 'Backend' },
            { logo: djangoLogo, name: 'Django', category: 'Backend' },
            { logo: htmlLogo, name: 'HTML/CSS', category: 'Frontend' }
          ].map(({ logo, name }) => (
            <div 
              key={name} 
              className="tech-item transition-transform duration-300 hover:scale-110 hover:shadow-lg rounded-lg p-2"
            >
              <img 
                src={logo} 
                alt={name} 
                className="mx-auto mb-2 w-16 h-16 object-contain" 
              />
              <h4 className="text-sm font-semibold">{name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
// const steps = [
//   { icon: MessageCircle, text: "Contact me" },
//   { icon: Book, text: "Give me the project" },
//   { icon: CheckCircle, text: "Allow me to do the job" },
//   { icon: DollarSign, text: "Make your payment" }
// ];