import React from 'react';

const Education = () => {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Education</h2>
        <div className="w-24 h-1 bg-[#003366] mx-auto mt-4 mb-6"></div>
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:shrink-0  md:w-64 flex items-center justify-center py-8">
              <img 
                src="https://www.wyb.ac.lk/wp-content/uploads/2020/10/announcements.jpg" 
                alt="Wayamba University" 
                className="w-full h-100 object-cover"  // Cropped image with object-cover
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="uppercase tracking-wide text-sm text-[#003366] font-semibold mb-1">
                2021 - 2025
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                BSc (Special) Computing & Information Systems
              </h3>
              <p className="text-gray-700 mb-2">
                Wayamba University of Sri Lanka
              </p>
              <p className="text-gray-700">
                Kuliyapitiya, Sri Lanka
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
