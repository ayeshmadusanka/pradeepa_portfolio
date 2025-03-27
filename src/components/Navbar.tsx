import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar = ({
  activeSection,
  setActiveSection
}: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);  // Navbar will appear after scrolling more than 50px
      } else {
        setScrolled(false); // Navbar will be hidden when at the top
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'contact', label: 'Contact' },
  ];

  // Only render the navbar if the user has scrolled
  if (!scrolled) return null;  // Hide navbar initially

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a
          href="#home"
          className="text-xl md:text-2xl font-bold text-indigo-600"
          onClick={() => handleNavClick('home')}
        >
          Pradeepa
        </a>
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`${
                activeSection === link.id
                  ? 'text-indigo-600 font-medium'
                  : 'text-gray-600 hover:text-indigo-500'
              } transition-colors duration-300`}
            >
              {link.label}
            </button>
          ))}
        </div>
        <button
          className="md:hidden text-gray-700 hover:text-indigo-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`${
                  activeSection === link.id
                    ? 'text-indigo-600 font-medium'
                    : 'text-gray-600'
                } py-2 px-4 hover:bg-indigo-50 rounded transition-colors duration-300`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
