import React from 'react';
import { CalendarIcon, MailIcon, PhoneIcon, LinkedinIcon } from 'lucide-react';

const About = () => {
  return (
    <div className="container mx-auto px-4 md:px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold" style={{ color: '#1A3D5D' }}>About Me</h2>
        <div className="w-24 h-1" style={{ backgroundColor: '#3A5670', marginTop: '1rem', marginBottom: '1.5rem', marginLeft: 'auto', marginRight: 'auto' }}></div>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="bg-white shadow-md rounded-lg p-6 border-l-4" style={{ borderColor: '#3A5670' }}>
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#1A3D5D' }}>Personal Details</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium" style={{ color: '#1A3D5D' }}>Name:</h4>
                <p style={{ color: '#4B6B8C' }}>Pradeepa Piumali Nethmini Malsinghe</p>
              </div>
              <div className="flex items-center gap-2">
                <CalendarIcon size={18} style={{ color: '#3A5670' }} />
                <div>
                  <h4 className="font-medium" style={{ color: '#1A3D5D' }}>Date of Birth:</h4>
                  <p style={{ color: '#4B6B8C' }}>April 28, 1999</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon size={18} style={{ color: '#3A5670' }} />
                <div>
                  <h4 className="font-medium" style={{ color: '#1A3D5D' }}>Email:</h4>
                  <p style={{ color: '#4B6B8C' }}>pradeemalsinghe@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon size={18} style={{ color: '#3A5670' }} />
                <div>
                  <h4 className="font-medium" style={{ color: '#1A3D5D' }}>Phone:</h4>
                  <p style={{ color: '#4B6B8C' }}>+94 77 426 0343</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <LinkedinIcon size={18} style={{ color: '#3A5670' }} />
                <div>
                  <h4 className="font-medium" style={{ color: '#1A3D5D' }}>LinkedIn:</h4>
                  <a
                    href="https://www.linkedin.com/in/pradeepa-malsinghe/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#3A5670', textDecoration: 'underline' }}
                  >
                    linkedin.com/in/pradeepa-malsinghe
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-white shadow-md rounded-lg p-6 border-l-4" style={{ borderColor: '#3A5670' }}>
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#1A3D5D' }}>Professional Summary</h3>
            <p style={{ color: '#4B6B8C' }} className="leading-relaxed">
              I am an undergraduate studying Computing & Information Systems at
              Wayamba University of Sri Lanka. I'm passionate about software
              engineering and leveraging technology to solve real-world
              problems.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 border-l-4" style={{ borderColor: '#3A5670' }}>
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#1A3D5D' }}>Current Role</h3>
            <div className="flex items-center gap-4 mb-2">
              <div className="bg-navy-800 p-0 rounded-md" style={{ width: '100px', height: '100px' }}>
                <img
                  src="https://media.licdn.com/dms/image/v2/C4E0BAQFVCfRaI5hpSw/company-logo_200_200/company-logo_200_200/0/1631325185065?e=1748476800&v=beta&t=t-5ge75aWVwA4JpbKIGm8kFGKi1HKSPIAwpXJS0l_eg"
                  alt="IF Solutions Logo"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div>
                <h4 className="font-medium" style={{ color: '#1A3D5D' }}>IF Solutions</h4>
                <p style={{ color: '#3A5670' }}>Intern Full Stack Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
