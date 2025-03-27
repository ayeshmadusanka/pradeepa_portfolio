import React from 'react';
import { AwardIcon } from 'lucide-react';

const Certificates = () => {
  const certificates = [{
    title: 'Python for Data Science, AI & Development',
    issuer: 'IBM',
    date: '2024',
    image: 'https://via.placeholder.com/150x150?text=IBM',
    link: '#'
  }];
  
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Certificates</h2>
        <div className="w-24 h-1 bg-navy-600 mx-auto mt-4 mb-6"></div> {/* Changed to navy */}
        <p className="text-gray-600 max-w-2xl mx-auto">
          Professional certifications that validate my skills and knowledge.
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        {certificates.map((cert, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden mb-6 hover:shadow-lg transition-shadow">
            <div className="md:flex">
              <div className="md:shrink-0 bg-navy-50 p-6 flex items-center justify-center"> {/* Changed to navy-50 */}
                <div className="w-24 h-24 rounded-full bg-navy-100 flex items-center justify-center"> {/* Changed to navy-100 */}
                  <AwardIcon size={40} className="text-navy-600" /> {/* Changed to navy */}
                </div>
              </div>
              <div className="p-6 md:p-8 w-full">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    {cert.title}
                  </h3>
                  <span className="bg-navy-100 text-navy-800 text-sm px-3 py-1 rounded-full mt-2 md:mt-0"> {/* Changed to navy-100 and navy-800 */}
                    {cert.date}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  <span className="font-medium">Issuer:</span> {cert.issuer}
                </p>
                <a href={cert.link} className="inline-block bg-navy-600 text-white px-4 py-2 rounded-md hover:bg-navy-700 transition"> {/* Changed to navy-600 */}
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
