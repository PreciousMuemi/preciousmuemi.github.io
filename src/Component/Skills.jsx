import React from 'react';
import SkillBar from './Skillbar';

const Skills = () => {
  const skillsData = {
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

  return (
    <section className="skills-section bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-10">My Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-indigo-300 mb-6">Programming Languages</h3>
            {skillsData.languages.map((skill) => (
              <SkillBar 
                key={skill.name} 
                name={skill.name} 
                level={skill.level} 
              />
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-indigo-300 mb-6">Frameworks & Tools</h3>
            {skillsData.frameworks.map((skill) => (
              <SkillBar 
                key={skill.name} 
                name={skill.name} 
                level={skill.level} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
