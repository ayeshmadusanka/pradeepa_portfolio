import React from 'react';
import { MailIcon, PhoneIcon, LinkedinIcon, MapPinIcon } from 'lucide-react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-navy-800">Contact Me</h2> {/* Changed to navy-800 */}
        <div className="w-24 h-1 bg-navy-600 mx-auto mt-4 mb-6"></div> {/* Changed to navy-600 */}
        <p className="text-gray-600 max-w-2xl mx-auto">
          Feel free to reach out to me for collaborations, opportunities, or
          just to say hello!
        </p>
      </div>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold text-navy-800 mb-6">Get In Touch</h3> {/* Changed to navy-800 */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-navy-100 p-3 rounded-full">
                <MailIcon size={24} className="text-navy-600" /> {/* Changed to navy-600 */}
              </div>
              <div>
                <h4 className="text-sm text-gray-500 font-medium">Email</h4>
                <a href="mailto:pradeemalsinghe@gmail.com" className="text-gray-800 hover:text-navy-600">
                  pradeemalsinghe@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-navy-100 p-3 rounded-full">
                <PhoneIcon size={24} className="text-navy-600" /> {/* Changed to navy-600 */}
              </div>
              <div>
                <h4 className="text-sm text-gray-500 font-medium">Phone</h4>
                <a href="tel:+94774260343" className="text-gray-800 hover:text-navy-600">
                  +94 77 426 0343
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-navy-100 p-3 rounded-full">
                <LinkedinIcon size={24} className="text-navy-600" /> {/* Changed to navy-600 */}
              </div>
              <div>
                <h4 className="text-sm text-gray-500 font-medium">LinkedIn</h4>
                <a href="https://www.linkedin.com/in/pradeepa-malsinghe/" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-navy-600">
                  pradeepa-malsinghe
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-navy-100 p-3 rounded-full">
                <MapPinIcon size={24} className="text-navy-600" /> {/* Changed to navy-600 */}
              </div>
              <div>
                <h4 className="text-sm text-gray-500 font-medium">Location</h4>
                <p className="text-gray-800">Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold text-navy-800 mb-6">Send Me a Message</h3> {/* Changed to navy-800 */}
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500" placeholder="John Doe" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Your Email
              </label>
              <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500" placeholder="john@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-500" placeholder="Your message here..."></textarea>
            </div>
            <button type="submit" className="w-full bg-navy-600 text-white py-2 px-4 rounded-md hover:bg-navy-700 transition">
              Send Message
            </button> {/* Changed to navy-600 and navy-700 */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
