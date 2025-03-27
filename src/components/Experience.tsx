import React from 'react';

const Experience = () => {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Experience</h2>
        <div className="w-24 h-1 bg-[#003366] mx-auto mt-4 mb-6"></div>
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:shrink-0  md:w-64 flex items-center justify-center py-8">
              <img
                src="https://media.licdn.com/dms/image/v2/C4E0BAQFVCfRaI5hpSw/company-logo_200_200/company-logo_200_200/0/1631325185065?e=1748476800&v=beta&t=t-5ge75aWVwA4JpbKIGm8kFGKi1HKSPIAwpXJS0l_eg"
                alt="Company Logo"
                className="w-32 h-32 object-contain"
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="uppercase tracking-wide text-sm text-[#003366] font-semibold mb-1">
                2025 - Present
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Full Stack Developer Intern
              </h3>
              <p className="text-gray-700 mb-4">IF Solutions</p>
              <div className="bg-[#003366] bg-opacity-10 p-4 rounded-md">
                <p className="text-gray-600">
                  Working on full-stack development projects, gaining hands-on
                  experience with modern web technologies, and contributing to
                  real-world software solutions.
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                  React
                </span>
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                  Node.js
                </span>
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                  MySQL
                </span>
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                  Full Stack
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
