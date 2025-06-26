import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin } from 'lucide-react';
import banner from '../assets/banner.png';

const HeroSection = () => {
  return (
    <motion.section 
      className="relative bg-transparent text-white py-8 px-12 sm:px-8"
      style={{}}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div
        className="relative rounded-3xl overflow-hidden mx-auto max-w-7xl"
        style={{ background: `url(${banner}) center/cover no-repeat` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />
        <div className="relative z-10 px-4 sm:px-8 py-20">
          <div className="text-center">
            <motion.p 
              className="text-yellow-400 text-sm mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              ⚡ Upload your CV - let employer find you
            </motion.p>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-8 text-cyan-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Get the Right Job You Deserve
            </motion.h1>
            <motion.p 
              className="text-sm md:text-base mb-8 text-gray-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Search among 49,200+ active jobs on the Middle East's #1 job site
            </motion.p>
            
            {/* Search Bar */}
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <form className="bg-white rounded-2xl p-2 shadow-xl flex flex-col sm:flex-row items-stretch gap-2 sm:gap-0" role="search" aria-label="Job search">
                <div className="relative flex-[2_2_0%] min-w-[180px]">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" aria-hidden="true" />
                  <input
                    type="text"
                    placeholder="Search by Jobs, Skills and companies"
                    className="w-full pl-12 pr-4 py-3 text-gray-900 rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none border-0 focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                    aria-label="Search jobs, skills, companies"
                  />
                </div>
                <div className="relative flex-1 min-w-[140px]">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" aria-hidden="true" />
                  <select
                    className="w-full pl-12 pr-4 py-3 text-gray-900 border-0 focus:ring-2 focus:ring-blue-500 outline-none appearance-none text-sm rounded-none sm:rounded-none"
                    defaultValue="India"
                    aria-label="Location"
                  >
                    <option value="India">India</option>
                    <option value="Middle East">Middle East</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="relative flex-1 min-w-[140px]">
                  <select
                    className="w-full pl-4 pr-4 py-3 text-gray-900 border-0 focus:ring-2 focus:ring-blue-500 outline-none appearance-none text-sm rounded-none sm:rounded-none"
                    defaultValue="Select Experience"
                    aria-label="Experience"
                  >
                    <option value="Select Experience">Select Experience</option>
                    <option value="0-1">0-1 Year</option>
                    <option value="1-3">1-3 Years</option>
                    <option value="3+">3+ Years</option>
                  </select>
                </div>
                <button type="submit" className="bg-blue-600 text-white px-6 py-3 text-sm font-semibold rounded-b-xl sm:rounded-r-xl sm:rounded-bl-none hover:bg-blue-700 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Search
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;