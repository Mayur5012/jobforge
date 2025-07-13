import React, { useState } from 'react';
import { FiltersSidebar, JobList } from '../components';
import { Filter, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const JobsPage = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-[#f7f8fa] px-2 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-0 py-8">
        <div className="max-w-7xl 2xl:max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar Filters - hidden on small screens and tablets, visible from lg (laptop) and up */}
            <aside className="w-full lg:w-72 xl:w-64 2xl:w-80 flex-shrink-0 mb-6 lg:mb-0 hidden lg:block">
              <FiltersSidebar />
            </aside>
            {/* Main Content - always fills available space */}
            <main className="flex-1 min-w-0">
              {/* Responsive header row for results, filter, and sort */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 gap-4">
                <div className="flex flex-row items-center w-full gap-2 lg:gap-4 justify-between">
                  {/* Results number left */}
                  <div className="text-lg font-medium text-gray-700 whitespace-nowrap">
                    <span className="font-semibold text-xl text-gray-900">1452</span> results found
                  </div>
                  {/* Filter and sort right (row) */}
                  <div className="flex flex-row items-center gap-2">
                    {/* Filter button: only below lg */}
                    <button
                      className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 lg:hidden"
                      onClick={() => setShowFilters(true)}
                      aria-label="Show filters"
                    >
                      <Filter className="w-5 h-5" />
                      <span className="font-medium">Filters</span>
                    </button>
                    {/* Sort dropdown: always visible, but right-aligned on lg+ */}
                    <select className="border border-gray-200 rounded-lg px-4 py-2 bg-white text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none w-28">
                      <option>Sort By</option>
                      <option>Most Relevant</option>
                      <option>Newest</option>
                      <option>Salary: High to Low</option>
                    </select>
                  </div>
                </div>
              </div>
              <JobList />
            </main>
          </div>
        </div>
      </div>
      {/* Mobile & Tablet Filters Modal */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 m-4 max-h-[90vh] overflow-y-auto"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 focus:outline-none"
                onClick={() => setShowFilters(false)}
                aria-label="Close filters"
              >
                <X className="w-6 h-6" />
              </button>
              <FiltersSidebar />
              <button
                className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg py-3 text-base transition"
                onClick={() => setShowFilters(false)}
              >
                Apply Filters
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default JobsPage; 