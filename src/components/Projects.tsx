import React from 'react';
import { CalendarIcon } from 'lucide-react';

const Projects = () => {
  const projects = [{
    title: 'Calorie Detection App for University Canteen',
    duration: 'Dec 2024 - Present',
    description: ['Developed a mobile application for university students to scan and analyze food items from the canteen menu to estimate calorie intake.', 'Utilized TensorFlow Lite for real-time image classification.', 'Used Flutter for cross-platform development.', 'Contributed by training the model to accurately identify food items in images for reliable and efficient classification.'],
    tags: ['Flutter', 'TensorFlow Lite', 'Mobile Development', 'AI']
  }, {
    title: 'Coffee Cafe Menu Display',
    duration: 'Feb 2025 - Feb 2025',
    description: ['Built a Coffee Café Menu application using React.js.', 'Focused on CRUD operations with role-based access control (Admin and User roles).', 'Admin role can create, edit, update, and delete menu items.', 'User role can only view the menu items.', 'Displays a list of coffee items with names, descriptions, and prices.'],
    tags: ['React.js', 'CRUD', 'Role-based Access', 'Frontend']
  }, {
    title: 'Apple Catcher Game',
    duration: 'Jul 2024 - Aug 2024',
    description: ['Developed a simple and engaging game using Python.', 'Showcased logic implementation and game development skills.'],
    tags: ['Python', 'Game Development']
  }, {
    title: 'Budget Management Mobile Application',
    duration: 'May 2024 - Aug 2024',
    description: ['Built a mobile app for tracking expenses, setting financial goals, and managing monthly budgets.', 'Included user-friendly features for easy budget management.'],
    tags: ['Mobile App', 'Financial Management']
  }, {
    title: 'Educational Website for Kids',
    duration: 'May 2024 - Aug 2024',
    description: ['Created an interactive website aimed at helping children improve knowledge across various domains.', 'Focused on engaging content and activities.', 'Contributed to back-end development, using Firebase for data management, user authentication, and real-time interactions.'],
    tags: ['Web Development', 'Firebase', 'Education', 'Backend']
  }, {
    title: 'Research Paper Upload Website',
    duration: 'Nov 2023 - Jan 2024',
    description: ['Designed and developed a web platform for university students to upload and manage their project reports and research papers.', 'Focused on back-end development using PHP for smooth data handling and user management.'],
    tags: ['PHP', 'Web Development', 'Backend', 'Academic']
  }];

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-navy-800">Projects</h2>
        <div className="w-24 h-1 bg-navy-600 mx-auto mt-4 mb-6"></div>
        <p className="text-navy-600 max-w-2xl mx-auto">
          A collection of projects that showcase my skills and experience in
          software development.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow p-6">
            <div className="flex items-center gap-2 text-sm text-navy-500 mb-2">
              <CalendarIcon size={16} />
              <span>{project.duration}</span>
            </div>
            <h3 className="text-xl font-bold text-navy-800 mb-3">
              {project.title}
            </h3>
            <ul className="text-navy-600 mb-4 space-y-2">
              {project.description.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-navy-600 mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag, tagIdx) => (
                <span key={tagIdx} className="bg-lightBlue-100 text-lightBlue-800 text-xs px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
