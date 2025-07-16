import React from 'react';

const ProfileProgressIndicator = ({ currentStep, totalSteps = 8 }) => {
  const progressPercentage = Math.round((currentStep / totalSteps) * 100);
  
  return (
    <div className="w-full mb-6">
      {/* Logo */}
      <div className="w-full flex items-center mb-4">
        <span className="text-lg font-bold tracking-widest text-[#E11D48] mr-2">/</span>
        <span className="text-lg font-bold tracking-widest text-black">JOBFORGE</span>
      </div>
      
      {/* Progress Bar */}
      <div className="w-full mb-2">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-[#E11D48] h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
      
      {/* Progress Percentage */}
      <div className="flex justify-center">
        <div className="bg-[#E11D48] text-white text-sm font-semibold px-3 py-1 rounded-full">
          {progressPercentage}%
        </div>
      </div>
    </div>
  );
};

export default ProfileProgressIndicator; 