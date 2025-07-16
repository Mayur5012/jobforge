import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, X } from 'lucide-react';
import banner from '../assets/banner.png';

const HeroSection = () => {
  const [showMobileSearch, setShowMobileSearch] = React.useState(false);
  const [mobileFields, setMobileFields] = React.useState({
    query: '',
    location: 'India',
    experience: 'Select Experience',
  });

  const handleMobileFieldChange = (e) => {
    setMobileFields({ ...mobileFields, [e.target.name]: e.target.value });
  };
  const handleMobileClear = () => {
    setMobileFields({ query: '', location: 'India', experience: 'Select Experience' });
  };
  const handleMobileSearch = (e) => {
    e.preventDefault();
    setShowMobileSearch(false);
    // You can add your search logic here
  };

  return (
    <motion.section 
      className="relative bg-transparent text-white py-8 "
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
        <div className="relative z-10 px-2 sm:px-6 md:px-8 py-10 sm:py-14 md:py-20">
          <div className="text-center">
            {/* <motion.p 
              className="text-yellow-400 text-sm mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              ⚡ Upload your CV - let employer find you
            </motion.p> */}
            <motion.h1 
              className="text-xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-8 text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Get the <span className="text-cyan-300">Right Job</span> You Deserve
            </motion.h1>
            <motion.p 
              className="text-xs sm:text-sm md:text-base mb-6 sm:mb-8 text-gray-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Search on the top job site in the Middle East
            </motion.p>
            {/* Responsive Search Bar/Button */}
            <motion.div className="max-w-5xl mx-auto mb-1">
              {/* Mobile/Tablet: Show button instead of search bar */}
              <div className="block sm:hidden">
                <button
                  className="w-[80%] flex items-center bg-white rounded-full shadow-xl px-4 py-3 text-gray-400 text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 mx-auto"
                  onClick={() => setShowMobileSearch(true)}
                  aria-label="Start your search"
                >
                  <Search className="mr-3 h-6 w-6 text-gray-400" />
                  <span className="flex-1 text-left text-gray-400">Start your search</span>
                </button>
                {/* Popup Modal */}
                {showMobileSearch && (
                  <div className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-60">
                    <div className="relative bg-white w-full h-full max-w-md mx-auto flex flex-col">
                      {/* Close Icon */}
                      <button
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
                        onClick={() => setShowMobileSearch(false)}
                        aria-label="Close search"
                      >
                        <X className="h-7 w-7" />
                      </button>
                      <form onSubmit={handleMobileSearch} className="flex flex-col justify-between h-full pt-16 pb-6 px-6">
                        <div className="flex-1 flex flex-col gap-6">
                          <div>
                            <label className="block text-gray-700 font-semibold mb-2">What are you looking for?</label>
                            <input
                              type="text"
                              name="query"
                              value={mobileFields.query}
                              onChange={handleMobileFieldChange}
                              placeholder="Search by Jobs, Skills and companies"
                              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none text-base"
                            />
                          </div>
                          <div>
                            <label className="block text-gray-700 font-semibold mb-2">Location</label>
                            <select
                              name="location"
                              value={mobileFields.location}
                              onChange={handleMobileFieldChange}
                              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none text-base"
                            >
                              <option value="India">India</option>
                              <option value="Middle East">Middle East</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-gray-700 font-semibold mb-2">Experience</label>
                            <select
                              name="experience"
                              value={mobileFields.experience}
                              onChange={handleMobileFieldChange}
                              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none text-base"
                            >
                              <option value="Select Experience">Select Experience</option>
                              <option value="0-1">0-1 Year</option>
                              <option value="1-3">1-3 Years</option>
                              <option value="3+">3+ Years</option>
                            </select>
                          </div>
                        </div>
                        <div className="flex gap-4 mt-8">
                          <button
                            type="button"
                            className="flex-1 bg-gray-100 text-gray-700 rounded-full py-3 font-semibold shadow hover:bg-gray-200 transition-all"
                            onClick={handleMobileClear}
                          >
                            Clear
                          </button>
                          <button
                            type="submit"
                            className="flex-1 bg-gradient-to-r from-blue-500 to-blue-900 text-white rounded-full py-3 font-semibold shadow hover:from-blue-600 hover:to-blue-950 transition-all"
                          >
                            Search
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
              {/* Desktop/Laptop: Show full search bar */}
              <form
                className="hidden sm:flex flex-col sm:flex-row items-stretch bg-white rounded-full shadow-xl px-1 sm:px-6 py-2 gap-3 sm:gap-2 md:gap-0"
                role="search"
                aria-label="Job search"
              >
                {/* Search Input */}
                <div className="flex items-center flex-1 min-w-[400px] relative w-full">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-6 w-6" aria-hidden="true" />
                  <input
                    type="text"
                    placeholder="Search by Jobs, Skills and companies"
                    className="w-full pl-12 pr-4 py-3 text-gray-700 bg-transparent border-none focus:ring-0 outline-none text-base sm:text-lg placeholder-gray-400 rounded-full sm:rounded-none"
                    aria-label="Search jobs, skills, companies"
                  />
                </div>
                {/* Divider */}
                <div className="hidden sm:block h-10 w-px bg-gray-200 mx-2 sm:mx-4" />
                {/* Location Select */}
                <div className="flex items-center min-w-[100px] relative w-full">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-6 w-6" aria-hidden="true" />
                  <select
                    className="appearance-none w-full pl-10 pr-6 py-3 text-base sm:text-lg text-gray-900 bg-transparent border-none focus:ring-0 outline-none cursor-pointer rounded-full sm:rounded-none"
                    defaultValue="India"
                    aria-label="Location"
                  >
                    <option value="India">India</option>
                    <option value="Middle East">Middle East</option>
                    <option value="Other">Other</option>
                  </select>
                  {/* Dropdown arrow */}
                  <svg className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </div>
                {/* Divider */}
                <div className="hidden sm:block h-10 w-px bg-gray-200 mx-2 sm:mx-4" />
                {/* Experience Select */}
                <div className="flex items-center min-w-[200px] relative w-full">
                  <select
                    className="appearance-none w-full pl-4 pr-8 py-3 text-base sm:text-lg text-gray-900 bg-transparent border-none focus:ring-0 outline-none cursor-pointer rounded-full sm:rounded-none"
                    defaultValue="Select Experience"
                    aria-label="Experience"
                  >
                    <option value="Select Experience">Select Experience</option>
                    <option value="0-1">0-1 Year</option>
                    <option value="1-3">1-3 Years</option>
                    <option value="3+">3+ Years</option>
                  </select>
                  {/* Dropdown arrow */}
                  <svg className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </div>
                {/* Search Button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto mt-2 sm:mt-0 sm:ml-2 bg-gradient-to-r from-blue-500 to-blue-900 text-white px-8 sm:px-10 py-3 text-base sm:text-lg font-semibold rounded-full shadow hover:from-blue-500 hover:to-blue-950 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
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