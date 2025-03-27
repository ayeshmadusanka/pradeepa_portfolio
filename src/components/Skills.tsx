import React from 'react';
import { CodeIcon } from 'lucide-react';

const Skills = () => {
  const skills = [{
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    level: 85
  }, {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    level: 80
  }, {
    name: 'Flutter',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    level: 75
  }, {
    name: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    level: 85
  }, {
    name: 'PHP',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    level: 70
  }, {
    name: 'HTML',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    level: 95
  }, {
    name: 'CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    level: 90
  }, {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    level: 75
  }, {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    level: 85
  }];
  
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#003366]">Tech Stack</h2>
        <div className="w-24 h-1 bg-[#003366] mx-auto mt-4 mb-6"></div>
        <p className="text-[#003366] max-w-2xl mx-auto">
          These are the technologies I've worked with throughout my projects and
          professional experience.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow">
            <img src={skill.icon} alt={`${skill.name} icon`} className="w-16 h-16 mb-4" />
            <h3 className="text-[#003366] font-medium text-lg mb-2">
              {skill.name}
            </h3>
            <div className="w-full bg-[#E6F1F8] rounded-full h-2.5">
              <div className="bg-[#003366] h-2.5 rounded-full" style={{
                width: `${skill.level}%`
              }}></div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 bg-gradient-to-r from-[#003366] to-[#005073] rounded-xl p-8 text-white text-center">
        <div className="flex justify-center mb-4">
          <CodeIcon size={40} />
        </div>
        <h3 className="text-2xl font-bold mb-2">Always Learning</h3>
        <p className="max-w-2xl mx-auto">
          Technology evolves rapidly, and I'm committed to continuously
          expanding my skill set to build better solutions.
        </p>
      </div>
    </div>
  );
};

export default Skills;
