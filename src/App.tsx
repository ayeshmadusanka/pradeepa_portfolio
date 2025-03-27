import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
export function App() {
  const [activeSection, setActiveSection] = useState('home');
  return <div className="font-sans bg-slate-50 text-gray-800">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="w-full">
        <section id="home" className="min-h-screen">
          <Hero setActiveSection={setActiveSection} />
        </section>
        <section id="about" className="py-16 bg-white">
          <About />
        </section>
        <section id="education" className="py-16 bg-slate-50">
          <Education />
        </section>
        <section id="experience" className="py-16 bg-white">
          <Experience />
        </section>
        <section id="skills" className="py-16 bg-slate-50">
          <Skills />
        </section>
        <section id="projects" className="py-16 bg-white">
          <Projects />
        </section>
        <section id="certificates" className="py-16 bg-slate-50">
          <Certificates />
        </section>
        <section id="contact" className="py-16 bg-white">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>;
}