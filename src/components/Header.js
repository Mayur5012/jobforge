import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, LifeBuoy } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent my-2 mx-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-red-600">/JOBFORGE</h1>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 bg-white/70 rounded-3xl px-6 py-2 shadow-sm backdrop-blur-sm">
              <a href="#jobs" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Jobs</a>
              <a href="#blog" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Blog</a>
              <a href="#contact" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact Us</a>
              <a href="#faqs" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">FAQs</a>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-4">
              <a href="#support" className="flex items-center text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                <LifeBuoy className="h-4 w-4 mr-2" />
                Support
              </a>
              <button className="bg-transparent border border-black text-gray-900 px-4 py-2 rounded-2xl text-sm font-medium hover:bg-gray-100 transition-colors">Login/Sign Up</button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-400 hover:text-gray-500"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <a href="#jobs" className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Jobs</a>
              <a href="#blog" className="text-gray-500 block px-3 py-2 rounded-md text-base font-medium">Blog</a>
              <a href="#contact" className="text-gray-500 block px-3 py-2 rounded-md text-base font-medium">Contact Us</a>
              <a href="#faqs" className="text-gray-500 block px-3 py-2 rounded-md text-base font-medium">FAQs</a>
              <a href="#support" className="text-gray-500 block px-3 py-2 rounded-md text-base font-medium">Support</a>
              <button className="bg-blue-600 text-white w-full mt-4 px-4 py-2 rounded-md text-base font-medium hover:bg-blue-700">Login/Sign Up</button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Header;