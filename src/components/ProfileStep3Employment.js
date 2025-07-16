import React, { useState } from 'react';

const ProfileStep3Employment = ({ onNext, onBack, onSkip, formData, setFormData }) => {
  const [errors, setErrors] = useState({});

  const employmentStatusOptions = [
    'Employed',
    'Unemployed',
    'Student',
    'Freelancer',
    'Self-employed',
    'Retired',
    'Other'
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.currentEmploymentStatus) {
      newErrors.currentEmploymentStatus = 'Please select your current employment status';
    }
    
    if (!formData.presentJobTitle?.trim()) {
      newErrors.presentJobTitle = 'Present job title is required';
    }
    
    if (!formData.skills?.trim()) {
      newErrors.skills = 'Skills are required';
    }
    
    if (!formData.yearsOfExperience?.trim()) {
      newErrors.yearsOfExperience = 'Years of experience is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      onNext();
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  return (
    <div className="w-full">
      {/* Title and Description */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Employment Information</h2>
        <p className="text-gray-600">Fill out your details to get job recommendations that match your skills.</p>
      </div>

      {/* Form Fields */}
      <div className="space-y-4 mb-6">
        {/* Current Employment Status */}
        <div>
          <select
            value={formData.currentEmploymentStatus || ''}
            onChange={(e) => handleInputChange('currentEmploymentStatus', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 transition appearance-none bg-white ${
              errors.currentEmploymentStatus ? 'border-red-400' : 'border-gray-300'
            }`}
          >
            <option value="">Current Employment Status</option>
            {employmentStatusOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          {errors.currentEmploymentStatus && (
            <p className="text-red-500 text-sm mt-1">{errors.currentEmploymentStatus}</p>
          )}
        </div>

        {/* Present Job Title/Occupation */}
        <div>
          <input
            type="text"
            placeholder="Present Job title/ Occupation"
            value={formData.presentJobTitle || ''}
            onChange={(e) => handleInputChange('presentJobTitle', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 transition ${
              errors.presentJobTitle ? 'border-red-400' : 'border-gray-300'
            }`}
          />
          {errors.presentJobTitle && (
            <p className="text-red-500 text-sm mt-1">{errors.presentJobTitle}</p>
          )}
        </div>

        {/* Skills */}
        <div>
          <input
            type="text"
            placeholder="Skills"
            value={formData.skills || ''}
            onChange={(e) => handleInputChange('skills', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 transition ${
              errors.skills ? 'border-red-400' : 'border-gray-300'
            }`}
          />
          {errors.skills && (
            <p className="text-red-500 text-sm mt-1">{errors.skills}</p>
          )}
        </div>

        {/* Years of Experience */}
        <div>
          <input
            type="text"
            placeholder="Years of experience"
            value={formData.yearsOfExperience || ''}
            onChange={(e) => handleInputChange('yearsOfExperience', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 transition ${
              errors.yearsOfExperience ? 'border-red-400' : 'border-gray-300'
            }`}
          />
          {errors.yearsOfExperience && (
            <p className="text-red-500 text-sm mt-1">{errors.yearsOfExperience}</p>
          )}
        </div>
      </div>

      {/* Skip Option */}
      <div className="text-center mb-6">
        <span className="text-gray-500">or </span>
        <button
          type="button"
          onClick={onSkip}
          className="text-gray-500 underline hover:text-gray-700 transition"
        >
          Skip
        </button>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="flex-1 border border-gray-300 text-gray-700 rounded-xl py-3 text-lg font-semibold hover:bg-gray-50 transition"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="flex-1 bg-[#2346A9] text-white rounded-xl py-3 text-lg font-semibold hover:bg-[#19337a] transition"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ProfileStep3Employment; 