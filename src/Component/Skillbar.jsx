import React, { useState, useEffect } from 'react';


// Skillbar.jsx
const SkillBar = ({ name, level }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-indigo-300">{name}</span>
      <span className="text-sm text-indigo-400">{level}%</span>
    </div>
    <div className="w-full bg-indigo-900 rounded-full h-2">
      <div 
        className="bg-indigo-600 h-2 rounded-full transition-all duration-1000"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

export default SkillBar;
