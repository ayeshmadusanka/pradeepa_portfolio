import React from 'react';
import { ArrowDownIcon, LinkedinIcon, MailIcon, PhoneIcon } from 'lucide-react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const Hero = ({
  setActiveSection
}: HeroProps) => {
  const scrollToAbout = () => {
    setActiveSection('about');
    document.getElementById('about')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen w-full flex items-center bg-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-[#003366] font-medium text-lg md:text-xl mb-2">
              Hello, I'm
            </h2>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#003366]">
              Pradeepa Malsinghe
            </h1>
            <h3 className="text-xl md:text-2xl font-medium mb-6 text-[#003366]">
              Full Stack Software Engineer
            </h3>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              An undergraduate passionate about software engineering and
              leveraging technology to solve real-world problems.
            </p>
            <div className="flex justify-center lg:justify-start gap-6 mb-8">
              <a
                href="https://www.linkedin.com/in/pradeepa-malsinghe/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#003366] hover:text-[#002244] p-3 transition"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={24} />
              </a>
              <a
                href="mailto:pradeemalsinghe@gmail.com"
                className="text-[#003366] hover:text-[#002244] p-3 transition"
                aria-label="Send Email"
              >
                <MailIcon size={24} />
              </a>
              <a
                href="tel:+94774260343"
                className="text-[#003366] hover:text-[#002244] p-3 transition"
                aria-label="Call"
              >
                <PhoneIcon size={24} />
              </a>
            </div>
          </div>
          <div className="lg:w-2/5 mb-8 lg:mb-0">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl mx-auto">
                <img
                  src="https://i.ibb.co/Pzgfq9PK/461999493-466716479736450-6664676796253922815-n.jpg"
                  alt="Pradeepa Malsinghe"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="flex items-center gap-2 text-[#003366] hover:text-[#002244]"
          >
            <span>Explore More</span>
            <ArrowDownIcon size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
