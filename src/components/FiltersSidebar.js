import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';

const FiltersSidebar = () => {
  const [expRange, setExpRange] = useState([0, 10]);
  const minRef = useRef();
  const maxRef = useRef();

  const handleMinChange = (e) => {
    let newMin = Math.min(Number(e.target.value), expRange[1] - 1);
    setExpRange([newMin, expRange[1]]);
    if (maxRef.current) maxRef.current.focus();
  };
  const handleMaxChange = (e) => {
    let newMax = Math.max(Number(e.target.value), expRange[0] + 1);
    setExpRange([expRange[0], newMax]);
    if (minRef.current) minRef.current.focus();
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  // For better thumb styling
  const sliderThumb =
    'appearance-none w-5 h-5 bg-blue-500 border-2 border-white rounded-full shadow transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400';
  const sliderTrack =
    'appearance-none w-full h-2 bg-blue-100 rounded-lg outline-none';

  return (
    <motion.div 
      className="lg:col-span-1"
      variants={fadeInUp}
      initial="initial"
      animate="animate"
    >
      <div className="card sticky top-8 p-6 bg-white rounded-2xl shadow-md border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-6">All Filters</h2>
        {/* Experience Selector */}
        {/* ─── Experience Filter ─── */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium text-gray-700">Experience</span>
            <button
              className="text-xs text-blue-600"
              type="button"
              onClick={() => setExpRange([0, 10])}
            >
              Reset
            </button>
          </div>

          <div className="relative w-full pt-6 pb-2">
            {/* Value Bubbles */}
            <div className="flex justify-between px-1 mb-2">
              <span className="bg-[#1c274d] text-white text-xs px-2 py-[2px] rounded shadow-md">
                {expRange[0]} yrs
              </span>
              <span className="bg-[#1c274d] text-white text-xs px-2 py-[2px] rounded shadow-md">
                {expRange[1]} yrs
              </span>
            </div>
            {/* Double Range Slider */}
            <div className="relative h-8 flex items-center">
              <input
                type="range"
                min="0"
                max="10"
                value={expRange[0]}
                onChange={e => {
                  const val = Math.min(Number(e.target.value), expRange[1] - 1);
                  setExpRange([val, expRange[1]]);
                }}
                className="absolute w-full appearance-none bg-transparent h-2 z-30"
                style={{ zIndex: expRange[0] === expRange[1] ? 50 : 30 }}
              />
              <input
                type="range"
                min="0"
                max="10"
                value={expRange[1]}
                onChange={e => {
                  const val = Math.max(Number(e.target.value), expRange[0] + 1);
                  setExpRange([expRange[0], val]);
                }}
                className="absolute w-full appearance-none bg-transparent h-2 z-40"
              />
              {/* Track */}
              <div className="absolute w-full h-2 bg-gray-200 rounded" />
              {/* Active Range */}
              <div
                className="absolute h-2 bg-[#1c274d] rounded"
                style={{
                  left: `${(expRange[0] / 10) * 100}%`,
                  width: `${((expRange[1] - expRange[0]) / 10) * 100}%`,
                }}
              />
            </div>
            {/* Custom Thumb Styles */}
            <style>{`
              input[type='range']::-webkit-slider-thumb {
                appearance: none;
                width: 18px;
                height: 18px;
                background: #fff;
                border: 2px solid #1c274d;
                border-radius: 50%;
                box-shadow: 0 1px 4px rgba(0,0,0,0.12);
                cursor: pointer;
                transition: border 0.2s;
              }
              input[type='range']:focus::-webkit-slider-thumb {
                border: 2px solid #2563eb;
              }
              input[type='range']::-moz-range-thumb {
                width: 18px;
                height: 18px;
                background: #fff;
                border: 2px solid #1c274d;
                border-radius: 50%;
                box-shadow: 0 1px 4px rgba(0,0,0,0.12);
                cursor: pointer;
                transition: border 0.2s;
              }
              input[type='range']:focus::-moz-range-thumb {
                border: 2px solid #2563eb;
              }
              input[type='range']::-ms-thumb {
                width: 18px;
                height: 18px;
                background: #fff;
                border: 2px solid #1c274d;
                border-radius: 50%;
                box-shadow: 0 1px 4px rgba(0,0,0,0.12);
                cursor: pointer;
                transition: border 0.2s;
              }
              input[type='range']:focus::-ms-thumb {
                border: 2px solid #2563eb;
              }
              input[type='range'] {
                pointer-events: auto;
              }
            `}</style>
          </div>
        </div>

        {/* Companies */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium text-gray-700">Companies</span>
            <button className="text-xs text-blue-600">Show more</button>
          </div>
          <input type="text" placeholder="Search companies" className="w-full border border-gray-200 rounded-lg px-3 py-2 mb-2 text-sm" />
          <div className="space-y-2">
            {['Schneider', 'Cognizant', 'Air India'].map((company) => (
              <label key={company} className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="ml-2 text-sm text-gray-700">{company}</span>
              </label>
            ))}
          </div>
        </div>
        {/* Salary */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium text-gray-700">Salary</span>
            <button className="text-xs text-blue-600">Show more</button>
          </div>
          <div className="space-y-2">
            {['Less than $25', '$150 - $250', '$250 - $350', 'Greater than $500'].map((salary) => (
              <label key={salary} className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="ml-2 text-sm text-gray-700">{salary}</span>
              </label>
            ))}
          </div>
        </div>
        {/* Role Category */}
        <div className="mb-6">
          <span className="font-medium text-gray-700 mb-2 block">Role Category</span>
          <input type="text" placeholder="Search Role Position" className="w-full border border-gray-200 rounded-lg px-3 py-2 mb-2 text-sm" />
          <div className="space-y-2 max-h-30 overflow-y-auto">
            {['Driver', 'Retail Manager', 'Mover', 'Quality Assurance'].map((role) => (
              <label key={role} className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="ml-2 text-sm text-gray-700">{role}</span>
              </label>
            ))}
          </div>
        </div>
        {/* Nature of Business */}
        <div className="mb-6">
          <span className="font-medium text-gray-700 mb-2 block">Nature of Business</span>
          <div className="flex flex-wrap gap-2 mb-2">
            {['B2B', 'B2C', 'SAAS'].map((nature) => (
              <span key={nature} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs cursor-pointer hover:bg-blue-100">{nature} (22)</span>
            ))}
          </div>
        </div>
        {/* Department */}
        <div className="mb-2">
          <span className="font-medium text-gray-700 mb-2 block">Department</span>
          <div className="space-y-2 max-h-30 overflow-y-auto">
            {['IT & Technology', 'Healthcare and Hygiene', 'Security', 'Domestic Help & Caregiving', 'Infrastructure, transport & Real estate'].map((dept) => (
              <label key={dept} className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="ml-2 text-sm text-gray-700">{dept}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FiltersSidebar; 