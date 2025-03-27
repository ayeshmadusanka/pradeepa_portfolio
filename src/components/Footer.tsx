import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Pradeepa</h2>
            <p className="text-gray-400 mt-2">Full Stack Software Engineer</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <GithubIcon size={24} />
            </a>
            <a href="https://www.linkedin.com/in/pradeepa-malsinghe/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <LinkedinIcon size={24} />
            </a>
            <a href="mailto:pradeemalsinghe@gmail.com" className="hover:text-blue-400 transition">
              <MailIcon size={24} />
            </a>
          </div>
        </div>
        <div className="border-t border-navy-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Pradeepa Malsinghe. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-sm text-blue-400 hover:text-blue-300 transition">
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
