import React from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';

const FiltersSidebar = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <motion.div 
      className="lg:col-span-1"
      variants={fadeInUp}
      initial="initial"
      animate="animate"
    >
      <div className="card sticky top-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
          <Filter className="h-5 w-5 text-gray-400" />
        </div>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Job Type</h4>
            <div className="space-y-2">
              {['Full-time', 'Part-time', 'Contract', 'Internship'].map((type) => (
                <label key={type} className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                  <span className="ml-2 text-sm text-gray-700">{type}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-3">Experience Level</h4>
            <div className="space-y-2">
              {['Entry Level', 'Mid Level', 'Senior', 'Executive'].map((level) => (
                <label key={level} className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                  <span className="ml-2 text-sm text-gray-700">{level}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-3">Salary Range</h4>
            <div className="space-y-2">
              {['$0 - $50k', '$50k - $100k', '$100k - $150k', '$150k+'].map((range) => (
                <label key={range} className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                  <span className="ml-2 text-sm text-gray-700">{range}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FiltersSidebar; 