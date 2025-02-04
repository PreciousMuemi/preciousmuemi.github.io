import React from 'react';

const SkillBar = ({ name, level }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-2">
      <span className="text-md font-medium text-indigo-200">{name}</span>
      <span className="text-md text-indigo-300">{level}%</span>
    </div>
    <div className="w-full bg-indigo-950 rounded-full h-3">
      <div 
        className="bg-indigo-600 h-3 rounded-full transition-all duration-1000 ease-in-out"
        style={{ 
          width: `${level}%`,
          boxShadow: '0 0 10px rgba(99, 102, 241, 0.5)' 
        }}
      />
    </div>
  </div>
);

export default SkillBar;
